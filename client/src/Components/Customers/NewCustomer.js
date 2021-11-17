import React, { useState } from "react";
import { Box, Button, makeStyles } from "@material-ui/core";
import { ADD_CUSTOMER, GET_CUSTOMERS } from "../../graphql/customer";
import { useMutation } from "@apollo/react-hooks";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import { isRequired } from "../../Utility/Form";

const useStyles = makeStyles({
  dashboard: {
    maxWidth: "1020px",
  },
});

const NewCustomer = ({ handleModal }) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isSubmit, setIsSubmit] = useState(false)

  const [addCustomer, { data, loading, error }] =
    useMutation(ADD_CUSTOMER,{
      refetchQueries: [{query: GET_CUSTOMERS }
      ],
    });

  const { name, email, phone, business } = values;

  function changeHandler(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  const handleSubmit = async (e) => {
    setIsSubmit(true)
    e.preventDefault();
    if(!isRequired(name) || !isRequired(email) || !isRequired(phone)){
      try {
        const response = await addCustomer({
          variables: {
            input: {
              name: name,
              email: email,
              mobile: phone,
              business: business,
            },
          },
          
        },handleModal());
      } catch (error) {
        console.log(error);
        if (error) {
          alert("im wrong");
        }
      }
    }
     

  };
  console.log(data);

  return (
    <Box
      position="absolute"
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
      <Box width="100%" justifyContent="center" display="flex">
        <Paper elevation={1} className={classes.paper}>
          <Box maxWidth="700px" p={4} mb={3}>
            <form className={classes.root} noValidate autoComplete="off">
               
              <Box width="100%" display="flex" flexDirection="column">
                <TextField
                required
                  size="small"
                  value={name}
                  name="name"
                  label="Name"
                  variant="standard"
                  error={isSubmit && (name === '')}
                  
                  onChange={(e) => changeHandler(e)}
                />
              </Box>

              <Box pb={3} />
              <Box width="100%" display="flex" flexDirection="column">
                <TextField
                required
                  size="small"
                  value={email}
                  name="email"
                  label="Email"
                  variant="standard"
                  onChange={(e) => changeHandler(e)}
                />
              </Box>
              <Box pt={3} />

              <Box display="flex">
                <Box width="50%" display="flex" flexDirection="column">
                  <TextField
                  required
                    size="small"
                    name="business"
                    value={business}
                    label="Business"
                    variant="standard"
                    onChange={(e) => changeHandler(e)}
                  />
                </Box>
                <Box pl={3} />
                <Box width="50%" display="flex" flexDirection="column">
                  <TextField
                    size="small"
                    name="phone"
                    label="Phone"
                    variant="standard"
                    onChange={(e) => changeHandler(e)}
                  />
                </Box>
              </Box>
              <Box pt={3} />

              <Box display="flex" justifyContent="flex-end">
                <Button
                  variant="outlined"
                  onClick={() => {
                    handleModal("test");
                  }}
                  color="primary"
                >
                  Cancel
                </Button>
                <Box pl={3} />
                <Button
                  variant="contained"
                  type="submit"

                  onClick={(e)=>handleSubmit(e)}
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
