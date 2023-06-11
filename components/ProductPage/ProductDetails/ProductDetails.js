import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, useMediaQuery } from "@material-ui/core";

import { changeNumberToArabic } from "utils/helperFunc";
import { useSelector } from "react-redux";

const useStyles = makeStyles(({ palette }) => ({
  productDetails: {
    marginTop: 20,
    padding: "30px 10px",
    "& > p ": {
      fontSize: "15px",
    },
    "& > h2 , p": {
      color: "#919191",
    },
  },

  list: {
    marginRight: "20px",
    "& > p": {
      marginBottom: "10px",
      fontSize: "15px",
    },
  },
}));
export const ProductDetails = ({ product }) => {
  const [direction, arabic] = useSelector(
    ({ direction: { direction, arabic } }) => [direction, arabic]
  );
  function createMarkup(text) {
    return { __html: text };
  }
  const classes = useStyles();
  return (
    <Grid container item direction="column" className={classes.productDetails}>
      <Typography variant="h4">
        {arabic ? "الخصائص الرئيسية" : "Main Features"}
      </Typography>
      <Typography
      // dangerouslySetInnerHTML={
      //   arabic
      //     ? createMarkup(product?.arabicDescription)
      //     : createMarkup(product?.discreption)
      // }
      >
        {arabic ? `${product?.arabicDescription}` : `${product?.discreption}`}
      </Typography>
    </Grid>
  );
};
