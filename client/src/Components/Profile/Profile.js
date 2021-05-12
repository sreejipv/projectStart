import React from "react";
import { useMutation, ApolloProvider } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
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
      <input type="file" required onChange={upload} />;
    </div>
  );
};

export default Profile;