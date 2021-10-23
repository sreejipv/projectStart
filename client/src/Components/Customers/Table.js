import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

function createData(customer, Phone, email, tags, action, notes) {
  return {
    customer,
    Phone,
    email,
    tags,
    action,
    notes: [
      { date: "2020-01-05", customerId: "11091700", amount: 3 },
      { date: "2020-01-02", customerId: "Anonymous", amount: 1 },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow hover style={{cursor: 'pointer'}} className={classes.root}>
       
     

        <TableCell cursor="pointer" component="th" scope="row">
          {row.customer}
        </TableCell>
        <TableCell align="left">{row.Phone}</TableCell>
        <TableCell align="left">{row.email}</TableCell>
        <TableCell align="left">{row.tags}</TableCell>
        <TableCell align="left">{row.action}</TableCell>
      </TableRow>
  
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData("Bill Gates", 999999999, "billgates@kallanmar.com", "Call"),
  createData("Bill Gates", 999999999, "billgates@kallanmar.com", "Call"),
  createData("Bill Gates", 999999999, "billgates@kallanmar.com", "Call"),
  createData("Bill Gates", 999999999, "billgates@kallanmar.com", "Call"),
  createData("Bill Gates", 999999999, "billgates@kallanmar.com", "Call"),
];

export default function CustomerTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
          
            <TableCell>Customer</TableCell>
            <TableCell align="left">Phone</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left"></TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
