import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Typography, Grid, useMediaQuery } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import { changeNumberToArabic } from "utils/helperFunc";
import { useSelector } from "react-redux";

const StyledTableCell = withStyles((theme) => ({
  body: {
    fontSize: 15,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  tableHeader: {
    fontSize: 24,
    border: "1px solid #dee2e6",
  },
  "& .MuiTableCell-root": {
    padding: 12,
  },
  nameRow: {
    border: "1px solid #dee2e6",
  },
  table: {
    border: "1px solid #dee2e6",
  },
});

function createData(name, value) {
  return { name, value };
}
const rows = [
  createData("شفاف", "اللون"),
  createData("350 ML and 450 ML", "السعة"),
  createData("Borosilicate glass, silicone", "المواد الرئيسية"),
  createData("PAVINA®", "التصميم"),
];

export const ProductSpecifications = () => {
  const classes = useStyles();
  const [direction, arabic] = useSelector(
    ({ direction: { direction, arabic } }) => [direction, arabic]
  );
  return (
    <TableContainer>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow style={{ width: "100%" }}>
            <StyledTableCell
              align={arabic ? "right" : "left"}
              colSpan={12}
              className={classes.tableHeader}
            >
              {arabic ? "المواصفات" : "Specifications"}
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.value}>
              <StyledTableCell align={arabic ? "right" : "left"}>
                {row.value}
              </StyledTableCell>
              <StyledTableCell
                align={arabic ? "right" : "left"}
                className={classes.nameRow}
              >
                {row.name}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
