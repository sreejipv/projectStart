import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const userQueryGQL = gql`
  query {
    getAuthUser {
      id
      username
      email
    }
  }
`;

export const useUserQuery = () => useQuery(userQueryGQL);
