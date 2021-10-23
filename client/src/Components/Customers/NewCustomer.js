import React from 'react';
import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import { ADD_CUSTOMER, GET_AUTH_USER } from "../../graphql/user";
import { useQuery, useMutation } from "@apollo/react-hooks";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";


const useStyles = makeStyles({
  dashboard: {
    maxWidth: '1020px'
  }
});

const NewCustomer = ({handleModal}) => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(true);

  const [addCustomer, { error: customerError, data: customerData }] =
    useMutation(ADD_CUSTOMER);

  // const { name, email, phone, tags, } = values;

    // // console.log(email);
    // function changeHandler(e) {
    //   const { name, value } = e.target;
    //   setValues({ ...values, [name]: value });
    // }

  const handleSubmit = async () => {
    try {
      const response = await addCustomer({
        variables: {
          input: {
            name: "ramasasan",
            email: "kmmmmmmoo@gmail.com",
            mobile: "9898989898",
            business: "qweqwe123",
            author: "qweqwe123",
          },
        },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
      if (error) {
        alert("im wrong");
      }

    }
  };


  return (
    <Box position="absolute" 
        display="flex"
        flexDirection="column"
        justifyContent="center"
        width="100%"
        left="0"
        right="0"
        bottom="0"
        top="0"
        zIndex="9999"
        bgcolor="rgb(255 255 255 / 89%)"
        >
      <Box width="100%"
      justifyContent="center"
        display="flex">
      <Paper elevation={1} className={classes.paper}>
        <Box maxWidth="700px" p={4} mb={3}>
          <form className={classes.root} noValidate autoComplete="off">
            <Box width="100%" display="flex" flexDirection="column">
              <Box pb={2}>Name</Box>
              <TextField
                size="small"
                id="Name"
                value=""
                variant="outlined"
                placeholder="John Smith"
              />
            </Box>

            <Box pb={3} />
            <Box display="flex">
              <Box width="50%" display="flex" flexDirection="column">
                <Box pb={2}>Email</Box>
                <TextField
                  size="small"
                  id="Email"
                  variant="outlined"
                  placeholder="John Smith"
                />
              </Box>
              <Box pl={3} />
              <Box width="50%" display="flex" flexDirection="column">
                <Box pb={2}>Phone</Box>
                <TextField
                  size="small"
                  id="phone"
                  variant="outlined"
                  placeholder="Eg: 9496326525"
                />
              </Box>
            </Box>
            <Box pt={3} />

            <Box display="flex" justifyContent="flex-end">
              <Button variant="outlined" onClick={()=>{handleModal('test')}} color="primary">
                Cancel
              </Button>
              <Box pl={3} />
              <Button
                variant="contained"
                onClick={handleSubmit}
                color="primary"
              >
                Add Customer
              </Button>
            </Box>
          </form>
        </Box>
      </Paper>
      </Box>
    </Box>

  );
};

export default NewCustomer;