import React, { useContext, useEffect, useState } from "react";
import { Box, Button, makeStyles, Typography } from "@material-ui/core";

import { ADD_CUSTOMER, GET_AUTH_USER } from "../../graphql/user";

import { useQuery, useMutation } from "@apollo/react-hooks";
import Paper from "@material-ui/core/Paper";
import Hidden from "@material-ui/core/Hidden";
// import { useSpring, animated } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support

import AuthContext from "../../Context/auth/authContext";
import MainLayout from "../../Layout/MainLayout";
import NavBar from "../../Components/NavBar/NavBar";
import CustomerTable from "../../Components/Customers/Table";
import NewCustomer from "../../Components/Customers/NewCustomer";
import TableMobile from "../../Components/Customers/TableMobile";

const useStyles = makeStyles({
  dashboard: {
    maxWidth: "1020px",
    margin: '0 auto',
  },
});
const Customers = (props) => {
  const classes = useStyles();

  const [checked, setChecked] = useState(true);
  const [open, setOpen] = useState(false);

  const context = useContext(AuthContext);


  const { loading, loadUser, error, data: authData } = useQuery(GET_AUTH_USER);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  const handleOpen = (data) => {
    console.log(data)
    setOpen(!open);
  };


  console.log("typeof(handleSubmit)", typeof handleSubmit);

  return (
    <Box display="flex">
      <NavBar />
      <MainLayout>
        <Box className={classes.dashboard}>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Box>
              <Typography variant="h4" component="h2">
                Customers
              </Typography>
            </Box>
            
            <Box>
              <Button
                variant="contained"
                onClick={handleOpen}
                color="primary"
              >
                Add Customer
              </Button>
              
              {open && <NewCustomer handleModal={handleOpen} />}

            </Box>
          </Box>

          <Box mt={8}></Box>

          <Box>
            <Hidden xsDown>
              <CustomerTable />
            </Hidden>

            <Hidden smUp>
              <TableMobile />
            </Hidden>
          </Box>

          <Box></Box>
        </Box>
      </MainLayout>
    </Box>
  );
};

Customers.propTypes = {};

export default Customers;
