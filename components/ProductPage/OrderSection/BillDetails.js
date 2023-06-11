import React, { useState } from "react";
import { useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

import { Form } from "./Form";

const useStyles = makeStyles((theme) => ({
  actionsRoot: {},
  contentRoot: {
    padding: theme.spacing(2),
  },
  rootTitle: {
    margin: 0,
    padding: theme.spacing(2),
  },
  rightCloseButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  leftCloseButton: {
    position: "absolute",
    left: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}));

export const BillDetails = ({ closeDialog, open, product, counter }) => {
  const [direction, arabic] = useSelector(
    ({ direction: { direction, arabic } }) => [direction, arabic]
  );
  const classes = useStyles({ arabic });
  const handleClose = () => {
    closeDialog();
  };
  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      fullWidth
    >
      <MuiDialogTitle
        id="customized-dialog-title"
        onClose={handleClose}
        disableTypography
        className={classes.rootTitle}
      >
        <Typography variant="h5">
          {arabic ? "تفاصيل الفاتورة" : "Bill Details"}
        </Typography>

        <IconButton
          aria-label="close"
          className={
            arabic ? classes.leftCloseButton : classes.rightCloseButton
          }
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
      </MuiDialogTitle>
      <MuiDialogContent dividers className={classes.contentRoot}>
        <Form product={product} counter={counter} handleClose={handleClose} />
      </MuiDialogContent>
    </Dialog>
  );
};
