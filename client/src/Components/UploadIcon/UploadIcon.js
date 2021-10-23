import React from "react";
import { ReactComponent as Camera } from "./assets/camera.svg";
import { Box } from "@material-ui/core";

const UploadIcon = ({ imageTag }) => {
  return (
    <Box display="flex" justifyContent="center">
      <Box
        justifyContent="center"
        display="flex"
        flexDirection="column"
        borderRadius="101px"
        fontSize="13px"
        width="100px"
        height="100px"
        bgcolor="#D8D8D8"
        border="3px solid #fff"
      >
        <Box>
          <Camera />
        </Box>
        <Box lineHeight="16px">Upload {imageTag} </Box>
      </Box>
    </Box>
  );
};

export default UploadIcon;
