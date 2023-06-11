import React from "react";
import { LinearProgress } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";

const useStyles = makeStyles(({ palette }) => ({}));
const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: "1.6em",
    borderRadius: 10,
    margin: "1em 0",
    width: "100%",
    // border: "1px solid #a2a2a2",
    transform: ({ arabic }) => arabic && "rotate(180deg)",
  },
  colorPrimary: {
    backgroundColor: theme.palette.primary.main,
  },
  bar: {
    borderRadius: 5,
    backgroundColor: theme.palette.secondary.main,
    borderRadius: 10,
  },
}))(LinearProgress);
export const LinearProgressBar = ({ value }) => {
  const arabic = useSelector(({ direction }) => direction.arabic);
  const classes = useStyles({ arabic });
  return (
    <BorderLinearProgress variant="determinate" value={value} arabic={arabic} />
  );
};
