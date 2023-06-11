import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, useMediaQuery } from "@material-ui/core";
import Image from "next/image";
import Link from "next/link";
const useStyles = makeStyles(({ palette }) => ({
  footer: {
    padding: "30px",
    color: "#b2cc24",
    background: "#000",
    bottom: 0,
    left: 0,
  },
  footerContent: {
    padding: "0 15px",
    margin: "0 auto",
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
  social: {
    margin: "20px 0",
  },
  logos: {
    padding: "0 15px",
  },
  socialImageGrid: {
    marginLeft: 5,
  },
  linkGrid: {
    margin: "10px 0",
  },
  link: {
    fontSize: 18,
    color: palette.primary.main,
    "@media (max-width:960px)": {
      fontSize: 14,
    },
  },
}));
export const Footer = () => {
  const classes = useStyles();
  const md = useMediaQuery("(max-width:960px)");

  return (
    <Grid item container className={classes.footer}>
      {/* <Grid item container className={classes.footerContent}>
        <Grid item xs={6}>
          <Grid
            container
            className={classes.logos}
            direction="column"
            justify="center"
          >
            <Grid item container justify="center" alignItems="center">
              <Image
                src="/logoTransparent.png"
                width={162}
                height={90}
                layout="fixed"
              />
            </Grid>

            <Grid
              item
              container
              alignItems="center"
              className={classes.social}
              justify="center"
            >
              {new Array(3).fill(1).map((val, i) => (
                <Grid item key={i} className={classes.socialImageGrid}>
                  <Image
                    src="/instagram.svg"
                    width={md ? 30 : 40}
                    height={md ? 30 : 40}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid container direction="column">
            {[
              "عن لقطة",
              "سياسة الخصوصية",
              "الشروط والأحكام",
              "سياسة إرجاع السلع والدفع",
            ].map((val, i) => (
              <Grid item key={i} className={classes.linkGrid}>
                <Link href="/">
                  <Typography className={classes.link}>{val}</Typography>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid> */}
    </Grid>
  );
};
