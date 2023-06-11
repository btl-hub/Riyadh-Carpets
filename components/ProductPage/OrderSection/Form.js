import React, { useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  TextField,
  Grid,
  Typography,
  Select,
  NativeSelect,
  InputLabel,
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";

import { changeNumberToArabic } from "utils/helperFunc";

const useStyles = makeStyles((theme) => ({
  root: {
    overflowX: "hidden",
  },
  label: {
    fontSize: 18,
    color: "#757575 !important",
  },
  rightLabelFormControl: {
    right: 0,
    left: "auto",
    top: -8,
    transform: "none",
    marginBottom: "5px",
  },
  leftLablFormControl: {
    transform: "none",
    left: "0",
    top: -8,
  },

  input: {
    fontSize: 15,
    color: "#757575",
    height: "100%",
    background: "#f5f5f5",
  },
  textField: {
    margin: "10px 0px",
  },

  textFieldEmail: {
    padding: ({ arabic }) => (arabic ? "10px 5px 10px 0" : "10px 0 10px 5px"),
  },
  textFieldMobile: {
    padding: ({ arabic }) => (arabic ? "10px 5px 10px 0" : "10px 0 10px 5px"),
  },
  emailHelper: {
    padding: "5px 10px",
    background: "rgba(255, 255, 0, 0.2)",
    marginTop: "5px",
  },
  inputMobile: {
    padding: ({ arabic }) => (arabic ? "0 0 0 30px" : "0 0 0 45px"),
    fontSize: 15,
    color: "#757575",
    background: "#f5f5f5",
    direction: "ltr",
  },
  key: {
    position: "absolute",
    top: "22%",
    left: ({ arabic }) => arabic && 0,
    // left: ({ arabic }) => !arabic && 5,
    padding: "7px",
    background: "#aaa",
    zIndex: 2,
  },
  emailHelperText: {
    fontSize: 14,
    color: "#757575",
  },
  orderInfo: {
    background: "#f5f5f5",
    marginTop: "15px",
    "& > div": {
      padding: "20px 10px",
      borderLeft: "1px solid #e5e5e5",
    },
  },
  orderLabel: {
    fontSize: "15px",
    color: "#757575",
  },
  orderLabelGrid: {
    marginBottom: "8px",
  },
  payment: {
    margin: 20,
  },
  paymentWay: {
    margin: "10px 0 8px 0",
  },
  radio: {
    margin: 0,
  },
  radioLabel: {
    fontSize: 15,
  },
  submitGrid: {
    margin: "0 auto",
    padding: theme.spacing(1),
  },
  save: {
    fontSize: 20,
    padding: 15,
    background: "#dddddd !important",
    fontWeight: 700,
  },
  error: {
    color: "red",
    fontSize: 10,
    marginBottom: 15,
  },
  formSelect: {
    marginTop: 10,
  },
}));
const defaultValues = {
  name: "",
  email: "",
  mobile: "",
  city: "",
  address: "",
};

export const Form = ({ product, counter, handleClose }) => {
  const [direction, arabic] = useSelector(
    ({ direction: { direction, arabic } }) => [direction, arabic]
  );
  const [city, setCity] = useState("dubai");

  const classes = useStyles({ arabic });

  const handleChange = (event) => {
    setCity(event.target.value);
  };
  // const schema = yup.object().shape({
  //   name: yup.string().required(),
  //   // age: yup.number().required(),
  // });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: "onSubmit",
    reValidateMode: "onChange",
    shouldUseNativeValidation: true,
    // resolver: yupResolver(schema),
  });
  const onSubmit = (data, e) => {
    console.log(data);
    handleClose();
    // e.preventDefault();
  };
  console.log(errors);

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="true"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Grid container direction="column">
        <Controller
          name="name"
          control={control}
          rules={{
            required: `${arabic ? "الاسم مطلوب" : "Your Name is Required"} `,
            pattern: {
              value: /^[a-zA-Z]+$/,
              message: `${
                arabic
                  ? "اسمك يجب ان لا يوجد به رمز او رقم"
                  : "Your name shouldn't include a number or a special character"
              }`,
            },
          }}
          render={({ field }) => (
            <TextField
              required
              {...field}
              autoComplete="name"
              onChange={field.onChange}
              label={arabic ? "الاسم" : "Name"}
              error={!!errors.name}
              fullWidth
              className={classes.textField}
              InputLabelProps={{
                classes: {
                  root: classes.label,
                  formControl: arabic
                    ? classes.rightLabelFormControl
                    : classes.leftLablFormControl,
                },
              }}
              InputProps={{
                classes: {
                  input: classes.input,
                },
              }}
            />
          )}
        />

        {errors.name && (
          <span className={classes.error}>{errors.name.message}</span>
        )}

        <Grid container>
          <Grid item xs={6} container direction="column">
            <Grid item>
              <Controller
                name="email"
                control={control}
                rules={{
                  required: `${
                    arabic ? "الايميل مطلوب" : "Your Email is Required"
                  } `,

                  pattern: {
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: `${
                      arabic
                        ? "يجب ان تدخل ايميل صحيح"
                        : "You must provide a valid email address!"
                    }`,
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    required
                    onChange={field.onChange}
                    error={!!errors.email}
                    label={arabic ? "البريد الالكتروني" : "Email Address"}
                    // variant="filled"
                    fullWidth
                    className={classes.textFieldEmail}
                    InputLabelProps={{
                      classes: {
                        root: classes.label,
                        formControl: arabic
                          ? classes.rightLabelFormControl
                          : classes.leftLablFormControl,
                      },
                    }}
                    InputProps={{
                      classes: {
                        root: classes.input,
                      },
                    }}
                  />
                )}
              />
              {errors.email && (
                <span className={classes.error}>{errors.email.message}</span>
              )}
            </Grid>
            <Grid item className={classes.emailHelper}>
              <Typography className={classes.emailHelperText}>
                {arabic
                  ? "ادخل بريدك الالكترونى بشكل صحيح لتصلك فاتورة الشراء"
                  : "Enter your e-mail correctly to receive the purchase invoice"}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={6} container style={{ position: "relative" }}>
            <Grid item className={classes.key}>
              <Typography>01</Typography>
            </Grid>
            <Controller
              name="mobile"
              rules={{
                required: `${
                  arabic
                    ? "رقم الموبايل مطلوب"
                    : "Your Mobile number is Required"
                } `,
                pattern: {
                  value: /^\d+$/,
                  message: `${
                    arabic ? "يجب ان تدخل ارقاما" : "It Should be a number"
                  }`,
                },
              }}
              control={control}
              render={({ field }) => (
                <TextField
                  error={!!errors.mobile}
                  {...field}
                  id={arabic ? "رقم الجوال" : "Mobile"}
                  label={arabic ? "رقم الجوال" : "Mobile"}
                  // variant="filled"
                  required
                  fullWidth
                  className={classes.textFieldMobile}
                  defaultValue="XX XXX XXXX"
                  InputLabelProps={{
                    classes: {
                      root: classes.label,
                      formControl: arabic
                        ? classes.rightLabelFormControl
                        : classes.leftLablFormControl,
                    },
                  }}
                  InputProps={{
                    classes: {
                      root: classes.inputMobile,
                    },
                  }}
                />
              )}
            />
            {errors.mobile && (
              <span className={classes.error}>{errors.mobile.message}</span>
            )}
          </Grid>
        </Grid>
        <Grid container direction="column" style={{ margin: "10px 0" }}>
          <Grid item>
            <FormControl fullWidth required className={classes.formSelect}>
              <InputLabel
                classes={{
                  root: classes.label,
                  formControl: arabic
                    ? classes.rightLabelFormControl
                    : classes.leftLablFormControl,
                }}
                shrink
                htmlFor="city-native-label-placeholder"
              >
                {arabic ? "المدينة" : "City"}
              </InputLabel>
              <Controller
                name="city"
                rules={{
                  required: `${
                    arabic
                      ? "يجب أن تختار المدينة"
                      : "You should choose the city"
                  } `,
                }}
                control={control}
                render={({ field }) => (
                  <NativeSelect
                    {...field}
                    fullWidth
                    className={classes.textField}
                    error={!!errors.city}
                    inputProps={{
                      name: `${arabic ? "الإمارة/المدينة" : "Emirate/City"}`,
                      classes: {
                        root: classes.input,
                        input: classes.input,
                      },
                    }}
                    IconComponent={"icon"}
                  >
                    <option value={0}>None</option>
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                  </NativeSelect>
                )}
              />
              {errors.city && (
                <span className={classes.error}>{errors.city.message}</span>
              )}
            </FormControl>
          </Grid>
          <Grid item className={classes.emailHelper}>
            <Typography className={classes.emailHelperText}>
              {arabic
                ? `مصاريف الشحن : ${changeNumberToArabic(15)} جنيه مصري`
                : "Shipping Fees : 15 EGP"}
            </Typography>
          </Grid>
          <Controller
            name="address"
            rules={{
              required: `${
                arabic ? "العنوان مطلوب" : "Your Address is Required"
              } `,
            }}
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                error={!!errors.address}
                required
                id={arabic ? "العنوان" : "Address"}
                label={arabic ? "العنوان" : "Address"}
                fullWidth
                className={classes.textField}
                InputLabelProps={{
                  classes: {
                    root: classes.label,
                    formControl: arabic
                      ? classes.rightLabelFormControl
                      : classes.leftLablFormControl,
                  },
                }}
                InputProps={{
                  classes: {
                    root: classes.input,
                    input: classes.input,
                  },
                }}
              />
            )}
          />
          {errors.address && (
            <span className={classes.error}>{errors.address.message}</span>
          )}
        </Grid>
        <Grid container direction="column" style={{ margin: "10px 0" }}>
          <Grid item>
            <NativeSelect
              value={arabic ? product?.arabicName : product?.name}
              fullWidth
              IconComponent={"icon"}
              inputProps={{
                classes: {
                  root: classes.input,
                  input: classes.input,
                },
              }}
            >
              <option value={arabic ? product?.arabicName : product?.name}>
                {arabic ? product?.arabicName : product?.name}
              </option>
            </NativeSelect>
          </Grid>
          <Grid item className={classes.emailHelper}>
            <Typography className={classes.emailHelperText}>
              {arabic
                ? `الكمية المتبقية : ${changeNumberToArabic(
                    product?.availableQuantity
                  )} `
                : `Remaining Quantity : ${product?.availableQuantity} `}
            </Typography>
          </Grid>
        </Grid>
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h3">{arabic ? "طلبي" : "My Order"}</Typography>
          </Grid>
          <Grid item container className={classes.orderInfo}>
            <Grid item xs={4} container direction="column">
              <Grid item className={classes.orderLabelGrid}>
                <Typography className={classes.orderLabel}>
                  {arabic ? "المنتج" : "product"}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6">
                  {arabic ? product?.arabicTitle : product?.title}
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={4} container direction="column">
              <Grid item className={classes.orderLabelGrid}>
                <Typography className={classes.orderLabel}>
                  {arabic ? "الكمية" : "Quantity"}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h5">{counter}</Typography>
              </Grid>
            </Grid>
            <Grid item xs={4} container direction="column">
              <Grid item className={classes.orderLabelGrid}>
                <Typography className={classes.orderLabel}>
                  {arabic ? "الإجمالي" : "Total"}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h5">
                  {arabic
                    ? `${changeNumberToArabic(
                        counter * product?.price
                      )} جنيه مصري`
                    : `${counter * product?.price} Egyptian Pounds`}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid container direction="column" className={classes.payment}>
            <Grid item>
              <Typography variant="h3">
                {arabic ? "طريقة الدفع" : "Payment Way"}
              </Typography>
            </Grid>
            <Grid
              item
              container
              direction="column"
              className={classes.paymentWay}
            >
              <Grid item>
                <RadioGroup value="home">
                  <FormControlLabel
                    value="home"
                    control={<Radio />}
                    label={arabic ? "الدفع عند الاستلام" : "Cash On Delivery"}
                    classes={{
                      root: classes.radio,
                      label: classes.radioLabel,
                    }}
                  />
                </RadioGroup>
              </Grid>

              <Grid item className={classes.emailHelper}>
                <Typography className={classes.emailHelperText}>
                  {arabic
                    ? "التوصيل خلال مدة اقصاها 5 ايام من تاريخ الطلب"
                    : "Delivery within a maximum period of 5 days from the date of the order"}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <hr />
      <Grid item container justify="center" className={classes.submitGrid}>
        <Button autoFocus className={classes.save} type="submit">
          {arabic ? "اتمام الطلب" : "CHECKOUT"}
        </Button>{" "}
      </Grid>
    </form>
  );
};
