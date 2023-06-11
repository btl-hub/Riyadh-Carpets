import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Button } from "@material-ui/core";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";

import { changeDirection } from "store/actions/directionAction";

const useStyles = makeStyles(({ palette }) => ({
  navbar: {
    height: "120px",
    position: "sticky",
    width: "100%",
    top: "0",
    left: "0",
    backgroundColor: "#fff",
    zIndex: 2,
    padding: "20px",
  },
  navbarItems: {
    margin: "0 auto",
    padding: "0 15px",
    "@media (min-width: 576px)": {
      maxWidth: "540px",
    },
    "@media (min-width:768px)": {
      maxWidth: "720px",
    },
    "@media (min-width:960px)": {
      maxWidth: "996px",
    },
    "@media (min-width:1200px)": {
      maxWidth: "800px",
    },
  },
  img: {
    cursor: "pointer",
    marginBottom: "30px !important",
  },
  ukBtn: {
    marginBottom: "30px !important",
  },
  imgFlag: {
    objectFit: "cover",
  },
}));
export const NavBar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const router = useRouter();
  // const router = useRouter()
  // const { direction } = useSelector((state) => state.direction);
  // console.log("direction");
  const arabic = useSelector(({ direction }) => direction.arabic);
  // const change = async () => {
  //   await dispatch(changeDirection(arabic));
  //   router.reload();
  // };

  // console.log(direction);
  return (
    <Grid className={classes.navbar}>
      <Grid
        item
        container
        className={classes.navbarItems}
        justify="space-between"
      >
        <Grid item className={classes.imgContainer}>
          <Link href="/">
            <Image
              src="/logoTransparent.png"
              width={210}
              height={124}
              className={classes.img}
            />
          </Link>
        </Grid>
        {/* <Button onClick={change} className={classes.ukBtn}>

          <Typography variant="h3" style={{ color: "#24a9e2" }}>
            {arabic ? "English" : "عربي"}
          </Typography>
        </Button> */}
      </Grid>
    </Grid>
  );
};
