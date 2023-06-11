import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, useMediaQuery } from "@material-ui/core";
import { useSelector } from "react-redux";

import { Carrousel } from "./Carrousel/Carrousel";
import { PricesSection } from "./PricesSection/PricesSection";
import { QuantitySection } from "./QuantitySection/QuantitySection";
import { OrderSection } from "./OrderSection/OrderSection";
import { ProductDetails } from "./ProductDetails/ProductDetails";
import { ProductSpecifications } from "./ProductSpecifications/ProductSpecifications";
import { HomePage } from "components/HomePage/HomePage";

const useStyles = makeStyles(({ palette }) => ({
  productName: {
    color: "#7b8093",
  },
  productNameGrid: {
    margin: "7px 0",
  },
  productType: {
    fontSize: "32px",
    fontWeight: "700",
    color: palette.primary.main,
  },
}));
export const ProductPage = ({ product }) => {
  const classes = useStyles();
  const [counter, setCounter] = useState(1);
  const increaseCounter = () => {
    setCounter((counter) => counter + 1);
  };
  const decreaseCounter = () => {
    counter === 1 ? setCounter(1) : setCounter((counter) => counter - 1);
  };
  const arabic = useSelector(({ direction }) => direction.arabic);
  function createMarkup(text) {
    return { __html: text };
  }
  return (
    <Grid item container direction="column">
      <Grid item container className={classes.productHeader} direction="column">
        <Grid item className={classes.productNameGrid}>
          <Typography variant="h5" className={classes.productName}>
            {arabic ? product?.arabicName : product?.name}
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            className={classes.productType}
            // dangerouslySetInnerHTML={createMarkup(post?.arabicDescription)}
          >
            {arabic ? product?.arabicTitle : product?.title}
          </Typography>
        </Grid>
        <Grid item className={classes.productNameGrid}>
          <Typography variant="h5" className={classes.productName}>
            {arabic
              ? ` رقم الموديل : ${product?.modelNumber}
`
              : ` Model Number : ${product?.modelNumber}`}
          </Typography>
        </Grid>
      </Grid>
      <Grid item container>
        <Carrousel product={product} />
      </Grid>
      <PricesSection product={product} />
      <QuantitySection
        product={product}
        increaseCounter={increaseCounter}
        decreaseCounter={decreaseCounter}
        counter={counter}
      />
      <OrderSection product={product} counter={counter} />
      <ProductDetails product={product} />
      <ProductSpecifications product={product} />
      {/* <HomePage /> */}
    </Grid>
  );
};
