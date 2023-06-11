import React from "react";
import { useSelector } from "react-redux";
import Head from "next/head";
import { Typography, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import Image from "next/image";
// Configure JSS
import { wrapper } from "../store/store";

import { NavBar } from "components/NavBar/NavBar";
import { Footer } from "components/Footer/Footer";
import { withTheme } from "../src/theme";
import { fetchDirection } from "store/actions/directionAction";

const useStyles = makeStyles(({ palette }) => ({
  main: {
    marginTop: 50,
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
    minHeight: "100vh",
  },
  whatsAppIconGrid: {
    position: "fixed",
    left: "50px",
    bottom: "50px",
  },
  whatsAppIcon: {
    padding: 10,
    width: 70,
    height: 70,
    backgroundColor: "#f2f2f2",
    zIndex: 5,
    borderRadius: "50%",
  },
  wrapper: {
    position: "relative",
    backgroundColor:"#f5f5f5",

  },
}));
function MyApp({ Component, pageProps }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const direction = useSelector(({ direction }) => direction.direction);
  React.useEffect(() => {
    // Remove the server-side injected CSS.

    let direction = localStorage.getItem("lang");
    // direction = direction === "rtl" ? "rtl" : "ltr";
    document.body.dir = direction;
    dispatch(fetchDirection(direction));
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, [direction]);
  return (
    <React.Fragment>
      {/* <Head>
        <title>
          {direction === "ltr"
            ? "Lokkta Store buy more , pay less!"
            : "لقطة ستور  اشترى  كل احتياجاتك بأقل الاسعار"}
        </title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head> */}
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <Grid container className={classes.wrapper} direction="column">
        <NavBar />
        <Grid item direction="column" className={classes.main} container>
          <Component {...pageProps} />
        </Grid>
        <Footer />
      </Grid>
    </React.Fragment>
  );
}

export default wrapper.withRedux(withTheme(MyApp));
