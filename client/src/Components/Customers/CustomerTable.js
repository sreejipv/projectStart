import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { useQuery } from '@apollo/client';
import { GET_CUSTOMERS } from "../../graphql/customer";

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



function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow hover style={{cursor: 'pointer'}} className={classes.root}>
        <TableCell cursor="pointer" component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="left">{row.mobile}</TableCell>
        <TableCell align="left">{row.email}</TableCell>
        <TableCell align="left">{row.tags}</TableCell>
        <TableCell align="left">{row.action}</TableCell>
      </TableRow>
  
    </React.Fragment>
  );
}


export default function CustomerTable() {
  const { data, error, loading } = useQuery(GET_CUSTOMERS); 
  console.log(data, 'data')

  const customers = data && data.getCustomers 
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
        {/* <Row  row={} /> */}
          {customers && customers.map((customer)=><Row  row={customer} />)}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
