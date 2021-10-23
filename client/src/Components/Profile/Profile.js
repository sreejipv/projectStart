import React from "react";
import { useMutation, ApolloProvider } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Banner from './Banner.js'
import TopHeader from "../TopHeader/index.js";
import { Box } from "@material-ui/core";
const UPLOAD_FILE = gql`
 mutation uploadFile($file: Upload!){
   uploadFile(file: $file){
     url
   }
 }
`;
const Profile = client => {
  const [uploadFile] = useMutation(UPLOAD_FILE, {
    onCompleted: data => console.log(data)
  });

  const upload = e => {
    const file = e.target.files[0];
    if(!file) return 
    uploadFile({variables: {file}})
    };
  return (
    <div>
      {/* <input type="file" required onChange={upload} />; */}
      <TopHeader/>
      <Banner businessName="Aura Cup" 
        businessDesc="Start the right acquisition conversations at your own pace. 
        Get free and instant access to 30,000+ 
        trusted buyers with total anonymity. 
        Say goodbye to brokers and meet your ideal buyer today."/>
        
        <Box textAlign="center">
          <p>Powered by</p>
          <p>MABUZ</p>
        </Box>
    </div>
  );
};

export default Profile;