import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import { Typography } from "@material-ui/core";




export default function Member() {
  return (
  <>
  <Box maxWidth={300}>
    <Card>
            <Box p={2} pl={2} display="flex">
                <Box>
                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                </Box>
                <Box pl={1}>
                    <Box fontWeight="800" >Bill gates</Box>
                    <Box pt="4px">billu@gates.com</Box>
                    <Box pt="4px">+91 985523566</Box>
                </Box> 
            </Box>
    </Card>
  </Box>

  </>
  );
}
