import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, useMediaQuery } from "@material-ui/core";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

import { LinearProgressBar } from "../../LinearProgressBar/LinearProgressBar";
import { changeNumberToArabic } from "utils/helperFunc";
const useStyles = makeStyles(({ palette }) => ({
  card: {
    padding: ({ closed }) => (closed ? "20px 0 20px 10px" : "20px 0 20px 5px"),
    margin: "15px 15px 0 15px",
    boxShadow: `0 0 8px -1px ${palette.primary.main}`,
    borderRadius: "10px",
    "@media (max-width:960px)": {
      padding: ({ closed }) =>
        closed ? "10px 0 10px 10px" : "10px 0 10px 0px",
    },
    cursor: "pointer",
  },
  product: {
    padding: " 0 15px 0 20px",
    "@media (max-width:960px)": {
      padding: "0 10px",
    },
  },
  productTitle: {
    fontWeight: ({ closed }) => (closed ? "400" : "600"),
    lineHeight: "1.2",
    fontSize: ({ closed }) => closed && "15px",
    color: ({ closed }) => closed && "#2f6bb5",
  },
  productTitleGrid: {
    margin: ({ closed }) => closed && "10px 0",
  },
  oldPrice: {
    color: "#6a6a6a",
    textDecoration: "line-through",
    fontSize: "1.5em",
    lineHeight: "1.5",
  },
  newPrice: {
    color: palette.primary.main,
    fontSize: "1.7em",
    fontWeight: 600,
  },
  prices: {
    margin: "10px 0",
  },
  available: {
    color: "#767676",
    fontSize: "1.8em",
    fontWeight: 600,
  },
  availableNumber: {
    color: palette.primary.main,
    fontWeight: 600,
  },
  soldNumber: {
    color: palette.secondary.main,
    fontWeight: 600,
  },
  items: {
    margin: "10px 0",
  },
  imgContainer: {
    padding: ({ md }) => !md && "0 20px 0 15px",
    margin: ({ md }) => md && "0 auto",
  },
}));
export const Card = ({ closed, product }) => {
  const md = useMediaQuery("(max-width:960px)");
  const classes = useStyles({ md, closed });
  const arabic = useSelector(({ direction }) => direction.arabic);
  console.log(`${process.env.NEXT_PUBLIC_ROOT_URL}${product?.images[0]?.url}`);
  return (
    <Link href={closed ? "#" : `/product/${product?.id}`}>
      <Grid
        container
        className={classes.card}
        wrap="nowrap"
        direction={md ? "column" : "row"}
      >
        <Grid
          item
          className={classes.imgContainer}
          md={closed ? 6 : 4}
          container
          justify="center"
        >
          <Image
            src={
              product?.images
                ? `${process.env.NEXT_PUBLIC_ROOT_URL}${product?.images[0]?.url}`
                : "/product.jpg"
            }
            width={closed ? 258 : 213}
            height={closed ? 186 : 154}
            layout="fixed"
            className={classes.img}
          />
        </Grid>
        <Grid
          item
          container
          direction="column"
          className={classes.product}
          md={closed ? 6 : 8}
        >
          <Grid item className={classes.productTitleGrid}>
            <Typography variant="h5" className={classes.productTitle}>
              {product ? (arabic ? product?.arabicTitle : product?.title) : 0}
            </Typography>
          </Grid>
          <Grid
            item
            container
            alignItems="center"
            justify="space-between"
            className={classes.prices}
          >
            <Grid item>
              <Typography className={classes.newPrice}>
                {product
                  ? arabic
                    ? `${changeNumberToArabic(
                        +product?.price
                      )}                 جنيه مصري
                  `
                    : `${+product?.price} Egyptian Pound`
                  : 0}
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.oldPrice}>
                {product
                  ? arabic
                    ? `${changeNumberToArabic(
                        +product?.priceBefore
                      )}                 جنيه مصري
                  `
                    : `${+product?.priceBefore} Egyptian Pound`
                  : 0}
              </Typography>
            </Grid>
          </Grid>
          {!closed && (
            <>
              <Grid
                item
                container
                alignItems="center"
                justify="space-between"
                className={classes.items}
              >
                <Grid item>
                  <Typography className={classes.available}>
                    {product ? (arabic ? " العناصر المباعة" : "Sold ") : 0}{" "}
                    <span className={classes.soldNumber}>
                      {product
                        ? arabic
                          ? changeNumberToArabic(+product?.soldQuantity)
                          : +product?.soldQuantity
                        : 0}
                    </span>
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography className={classes.available}>
                    {product ? (arabic ? " المتاح " : "Available ") : 0} :
                    <span className={classes.availableNumber}>
                      {product
                        ? arabic
                          ? changeNumberToArabic(+product?.availableQuantity)
                          : +product?.availableQuantity
                        : 0}
                    </span>
                  </Typography>
                </Grid>
              </Grid>
              <LinearProgressBar
                value={
                  (+product?.soldQuantity /
                    (+product?.soldQuantity + +product?.availableQuantity)) *
                  100
                }
              />
            </>
          )}
        </Grid>
      </Grid>
    </Link>
  );
};
