import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";
import Image from "next/image";
import { useSelector } from "react-redux";

import { Card } from "./Card/Card";
import { Categories } from "./Categories/Categories";
const useStyles = makeStyles(({ palette }) => ({
  homePageContainer: {
    padding: "20px 0",
  },
  header: {
    color: palette.secondary.main,
  },
}));
export const HomePage = () => {
  const classes = useStyles();
  const [direction, arabic] = useSelector(
    ({ direction: { direction, arabic } }) => [direction, arabic]
  );
  return (
    // <Grid direction="column" container>
    //   <Grid
    //     className={classes.homePageContainer}
    //     item
    //     container
    //     direction="column"
    //   >
    //     <Categories />

    //     <Grid item container alignItems="center" justify="center">
    //       <Typography variant="h1" className={classes.header}>
    //         {arabic ? "لقطات حالية" : "Running Lokta"}
    //       </Typography>
    //     </Grid>
    //     <Grid item container direction="column">
    //       {/* {availableProducts.length && (
    //         <>
    //           {availableProducts.map((product, i) => (
    //             <Grid item key={i} container>
    //               <Card product={product} />
    //             </Grid>
    //           ))}
    //         </>
    //       )} */}
    //     </Grid>
    //   </Grid>
    //   <Grid
    //     className={classes.homePageContainer}
    //     item
    //     container
    //     direction="column"
    //   >
    //     <Grid item container alignItems="center" justify="center">
    //       <Typography variant="h1" className={classes.header}>
    //         {arabic ? "لقطات فاتتك" : "Closed Lokta"}
    //       </Typography>
    //     </Grid>
    //     <Grid item container direction="column">
    //       {/* {endedProducts.length && (
    //         <>
    //           {endedProducts?.map((product, i) => (
    //             <Grid item key={i} container>
    //               <Card closed product={product} />
    //             </Grid>
    //           ))}
    //         </>
    //       )} */}
    //     </Grid>
    //   </Grid>
    // </Grid>
    <></>
  );
};
