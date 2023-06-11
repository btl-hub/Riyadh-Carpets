import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, useMediaQuery, Button } from "@material-ui/core";
import { useSelector } from "react-redux";

import { BillDetails } from "./BillDetails";

const useStyles = makeStyles(({ palette }) => ({
  orderSection: {
    marginTop: 20,
  },
  orderNowBtnGrid: {
    padding: ({ md }) => !md && "0 19px",
    width: "100%",
  },
  orderWhatsAppBtnGrid: {
    width: "100%",
  },
  orderNowBtn: {
    backgroundColor: "#cceeff",
    borderRadius: 0,
    padding: 10,
    border: "1px solid #cceeff",
    color: palette.secondary.main,

    "&:hover": {
      backgroundColor: "#fff",
      color: palette.primary.main,
      border: `1px solid ${palette.primary.main}`,
    },
  },
  orderWhatsAppBtn: {
    backgroundColor: `${palette.primary.main} !important`,
    borderRadius: 0,
    padding: 10,
    fontWeight: 600,
    color: "#fff",
  },
  orderNow: {
    fontSize: 25,
    fontWeight: 600,
  },
  orderWhatsApp: {
    fontSize: 25,
    fontWeight: 600,
    "@media (max-width:960px)": {
      fontSize: 18,
    },
  },

  or: {
    fontSize: 20,
    fontWeight: 600,
  },
  watchingGrid: {
    marginTop: 20,
    padding: 8,
    textAlign: "center",
    backgroundColor: "#dcdcdc",
    width: "100%",
  },
  numberWatching: {
    fontSize: 20,
    fontWeight: 600,
  },
  numberWatchingGrid: {
    margin: "0 7px",
  },
  watching: {
    fontSize: 15,
    fontWeight: 600,
  },
}));
export const OrderSection = ({ product, counter }) => {
  const [open, setOpen] = useState(false);

  const md = useMediaQuery("(max-width:960px)");
  const classes = useStyles({ md });
  const arabic = useSelector(({ direction }) => direction.arabic);

  const openDialog = () => {
    setOpen(true);
  };
  const closeDialog = () => {
    setOpen(false);
  };
  return (
    <>
      <Grid
        item
        container
        direction="column"
        className={classes.orderSection}
        justify="center"
        alignItems="center"
      >
        <Grid item md={10} className={classes.orderNowBtnGrid}>
          <Button
            classes={{ root: classes.orderNowBtn }}
            fullWidth
            onClick={openDialog}
          >
            <Typography className={classes.orderNow}>
              {arabic ? "اطلب الان" : "Order Now"}{" "}
            </Typography>
          </Button>
        </Grid>
        <Grid item>
          <Typography className={classes.or}>او</Typography>
        </Grid>
        <Grid item md={10} className={classes.orderWhatsAppBtnGrid}>
          <a
            href="https://api.whatsapp.com/send?phone=01092940160"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <Button classes={{ root: classes.orderWhatsAppBtn }} fullWidth>
              <Typography className={classes.orderWhatsApp}>
                {arabic
                  ? "اضغط هنا للطلب عبر واتساب"
                  : "Order Now Via Whatsapp"}
              </Typography>
            </Button>
          </a>
        </Grid>
        <Grid
          item
          className={classes.watchingGrid}
          container
          justify="center"
          alignItems="center"
        >
          <Grid item className={classes.numberWatchingGrid}>
            <Typography className={classes.numberWatching}>
              {/* {Math.floor(Math.random() * 100)} */} 5
            </Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.watching}>
              {arabic ? "عميل يشاهد الان " : " clients watching now"}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <BillDetails
        open={open}
        closeDialog={closeDialog}
        product={product}
        counter={counter}
      />
    </>
  );
};
