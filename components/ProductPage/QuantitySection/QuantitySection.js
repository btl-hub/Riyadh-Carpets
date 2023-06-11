import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Button } from "@material-ui/core";

import { LinearProgressBar } from "components/LinearProgressBar/LinearProgressBar";
import { changeNumberToArabic } from "utils/helperFunc";
import { useSelector } from "react-redux";

const useStyles = makeStyles(({ palette }) => ({
  available: {
    fontSize: 18,
    fontWeight: 700,
    color: "#767676",
  },
  availableNumber: {
    color: palette.primary.main,
  },
  soldNumber: {
    color: palette.secondary.main,
  },
  quantity: {
    color: "#767676",
    fontSize: 15,
  },
  btn: {
    padding: 10,
    backgroundColor: `${palette.secondary.main} !important`,
    cursor: "pointer",
    minWidth: 0,
    borderRadius: 0,
    border: `1px solid ${palette.secondary.main} `,
    height: 43,
    margin: "0 5px",
  },
  addSubtract: {
    fontSize: 20,
  },

  counter: { fontSize: 15 },
  counterGrid: {
    padding: "10px 36px",
    backgroundColor: palette.primary.main,
  },
}));

export const QuantitySection = ({
  product,
  increaseCounter,
  decreaseCounter,
  counter,
}) => {
  const classes = useStyles();

  const [direction, arabic] = useSelector(
    ({ direction: { direction, arabic } }) => [direction, arabic]
  );
  return (
    <Grid item container className={classes.quantitySection} direction="column">
      <Grid item container alignItems="center" justify="space-between">
        <Grid item>
          <Typography className={classes.available}>
            {arabic ? "العناصر المباعة" : ` Sold `} :
            <span className={classes.soldNumber}>
              {arabic
                ? changeNumberToArabic(+product?.soldQuantity)
                : +product?.soldQuantity}
            </span>
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.available}>
            {arabic ? " المتاح" : ` Available `} :
            <span className={classes.availableNumber}>
              {" "}
              {arabic
                ? changeNumberToArabic(+product?.availableQuantity)
                : +product?.availableQuantity}
            </span>
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        <LinearProgressBar
          value={
            (+product?.soldQuantity /
              (+product?.soldQuantity + +product?.availableQuantity)) *
            100
          }
        />
      </Grid>
      <Grid
        item
        container
        alignItems="center"
        className={classes.quantityChange}
      >
        <Grid item>
          <Grid container>
            <Typography className={classes.quantity}>الكمية</Typography>
          </Grid>
        </Grid>
        <Button onClick={increaseCounter} classes={{ root: classes.btn }}>
          <Typography className={classes.addSubtract}>+</Typography>
        </Button>
        <Grid item className={classes.counterGrid}>
          <Typography className={classes.counter}>{counter}</Typography>
        </Grid>
        <Button onClick={decreaseCounter} classes={{ root: classes.btn }}>
          <Typography className={classes.addSubtract}>-</Typography>
        </Button>
      </Grid>
    </Grid>
  );
};
