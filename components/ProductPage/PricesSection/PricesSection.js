import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, useMediaQuery } from "@material-ui/core";

import { changeNumberToArabic } from "utils/helperFunc";
import theme from "src/theme";
const useStyles = makeStyles(({ palette }) => ({
  priceSection: {
    padding: "20px 0",
  },
  before: {
    color: "#767676",
    fontSize: "19px",
  },
  beforeNumber: {
    color: "#6a6a6a",
    fontSize: "19px",
    textDecoration: "line-through",
  },
  beforeSection: {
    margin: "10px 5px",
  },
  nowNumber: {
    color: palette.secondary.main,
    fontSize: "30px",
    fontWeight: 700,
  },
  savedNumber: {
    color: "#6a6a6a",
    fontSize: "19px",
  },
  discountGrid: {
    margin: ({ direction }) =>
      direction === "ltr" ? "0 0 0 112px" : "0 112px 0 0",
    padding: "8px",
    backgroundColor: "#cceeff",
    opacity: "0.8",
  },
  discount: {
    fontSize: 15,
    color: palette.primary.main,
    fontWeight: 700,
  },
}));
export const PricesSection = ({ product }) => {
  const [direction, arabic] = useSelector(
    ({ direction: { direction, arabic } }) => [direction, arabic]
  );
  const classes = useStyles({ direction });
  return (
    <Grid item container className={classes.priceSection} direction="column">
      <Grid
        item
        container
        alignItems="center"
        className={classes.beforeSection}
      >
        <Grid item xs={2}>
          <Typography className={classes.before}>
            {arabic ? "قبل" : "Before"} :
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.beforeNumber}>
            {arabic
              ? `${changeNumberToArabic(
                  +product?.priceBefore
                )}                 جنيه مصري
                  `
              : `${+product?.priceBefore} Egyptian Pound`}
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        alignItems="center"
        className={classes.beforeSection}
      >
        <Grid item xs={2}>
          <Typography className={classes.before}>
            {arabic ? "الان " : "Now"} :{" "}
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.nowNumber}>
            {arabic
              ? `${changeNumberToArabic(
                  +product?.price
                )}                 جنيه مصري
                  `
              : `${+product?.price} Egyptian Pound`}
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        alignItems="center"
        className={classes.beforeSection}
      >
        <Grid item xs={2}>
          <Typography className={classes.before}>توفير : </Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.savedNumber}>
            {arabic
              ? `${changeNumberToArabic(
                  +product?.priceBefore - +product?.price
                )}                 جنيه مصري
                  `
              : `${+product?.priceBefore - +product?.price} Egyptian Pound`}
          </Typography>
        </Grid>
        <Grid item className={classes.discountGrid}>
          <Typography className={classes.discount}>
            {arabic
              ? ` % ${
                  +product?.priceBefore !== 0 &&
                  changeNumberToArabic(
                    Math.round(
                      ((+product?.priceBefore - +product?.price) /
                        +product?.priceBefore) *
                        100
                    )
                  )
                }               تخفيض
                  `
              : `${
                  +product?.priceBefore !== 0 &&
                  Math.round((+product?.price / +product?.priceBefore) * 100)
                }% Discount `}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
