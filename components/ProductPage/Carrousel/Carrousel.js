import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Typography, Grid, useMediaQuery } from "@material-ui/core";
import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const useStyles = makeStyles(({ palette }) => ({
  slider: {},
  img: {
    border: `1px solid ${palette.primary.main} !important`,
    borderRadius: "6px",
    margin: "0 auto !important",
  },
  btn: {
    border: `1px solid ${palette.primary.main} !important`,
    background: "#fff",
    color: palette.secondary.main,
    fontWeight: "600",
    fontSize: "30px",
    padding: "0 10px",
    borderRadius: "7px",
    "&:hover": {
      backgroundColor: palette.secondary.main,
      color: palette.primary.main,
    },
  },
  slide: {
    padding: "0 20px",
  },
}));
export const Carrousel = ({ product }) => {
  const [src, setSrc] = useState(0);
  const [clicked, setClicked] = useState(false);
  const direction = useSelector(({ direction }) => direction.direction);

  const intervalShow = () => {
    setTimeout(() => {
      // if (src === images.length - 1) {
      //   setSrc(0);
      // } else {
      if (src === product?.images?.length - 1) {
        setSrc(0);
      } else {
        setSrc(src + 1);
      }

      // }
    }, 2000);
  };
  useEffect(() => {
    !clicked && intervalShow();

    return () => {
      clearTimeout(intervalShow);
    };
  }, [src, clicked]);

  const classes = useStyles({ direction, product });
  const md = useMediaQuery("max-width : 960px");
  const slideClicked = (i) => {
    setClicked(true);

    setSrc(i);
  };

  return (
    <>
      <Grid container alignItems="center" justify="space-between">
        <Grid item xs={9}>
          {/* <img src={images[src]} style={{ width: 570, height: 390 }} /> */}
          <Image
            src={`${process.env.NEXT_PUBLIC_ROOT_URL}${product?.images[src]?.url}`}
            width={570}
            height={390}
          />
        </Grid>
        <Grid item xs={3} container justify="center">
          <CarouselProvider
            naturalSlideWidth={160}
            naturalSlideHeight={110}
            totalSlides={product?.images.length}
            visibleSlides={
              product?.images?.length > 2 ? 3 : product?.images?.length
            }
            step={1}
            orientation="vertical"
            infinite
            style={{ width: "100%" }}
            interval={2000}
            playDirection={"forward"}
            isPlaying={product?.images.length > 1}
          >
            <Grid item container justify="center">
              <ButtonNext className={classes.btn}>˄</ButtonNext>
            </Grid>
            <Slider
              style={{ padding: "10px 0" }}
              classNameTrayWrap={classes.slider}
            >
              <Grid item container direction="column" justify="center">
                {product?.images.map(({ url }, i) => (
                  <Slide
                    index={i}
                    key={i}
                    style={{
                      paddingBottom: "110px",
                      margin: "12px 0",
                    }}
                    innerClassName={classes.slide}
                    onClick={() => slideClicked(i)}
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_ROOT_URL}${url}`}
                      width={160}
                      height={110}
                      className={classes.img}
                    />
                  </Slide>
                ))}
              </Grid>
            </Slider>
            <Grid item container justify="center">
              <ButtonBack className={classes.btn}>˅</ButtonBack>
            </Grid>
          </CarouselProvider>
        </Grid>
      </Grid>
    </>
  );
};
