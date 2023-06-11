import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";
import Image from "next/image";
import { useSelector } from "react-redux";

const useStyles = makeStyles(({ palette }) => ({
  category: {
    background: palette.primary.main,
    padding: "2px 10px",
    width: "100%",
    borderBottomLeftRadius: "10px",
    borderBottomRightRadius: "10px",
  },
  categories: {
    margin: "15px auto",
  },
  categoryText: {
    color: "#fff",
    fontSize: 15,
  },
  header: {
    color: palette.secondary.main,
  },
  img: {
    objectFit: "cover",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
  },
}));
const categories = [
  { nameEnglish: "Clothes", nameArabic: "ملابس", img: "/clothes.jpg" },
  { nameEnglish: "Care", nameArabic: "مستحضرات تجميل", img: "/care.jpg" },
  { nameEnglish: "Toys", nameArabic: "ألعاب", img: "/toys.jpg" },
];
export const Categories = () => {
  const classes = useStyles();
  const [direction, arabic] = useSelector(
    ({ direction: { direction, arabic } }) => [direction, arabic]
  );
  return (
    <>
      <Grid item container alignItems="center" justify="center">
        <Typography variant="h1" className={classes.header}>
          {arabic ? "الفئات" : "Categories"}
        </Typography>
      </Grid>
      <Grid
        item
        container
        alignItems="center"
        spacing={1}
        className={classes.categories}
        justify="center"
      >
        {categories.map(({ nameArabic, nameEnglish, img }, i) => (
          <Grid item key={i}>
            <Grid
              container
              direction="column"
              justify="space-between"
              alignItems="center"
            >
              <Image
                src={img}
                width={150}
                height={84}
                className={classes.img}
              />
              <Grid item className={classes.category}>
                <Typography className={classes.categoryText}>
                  {arabic ? nameArabic : nameEnglish}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
