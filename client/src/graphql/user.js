import gql from "graphql-tag";

/**
 * Gets authenticated user
 */
export const GET_AUTH_USER = gql`
  query {
    getAuthUser {
      id,
      name
    }
  }
`;


export const GET_TESTED = gql`
  query {
    testMe
  }
`;


/**
 * Sign up user
 */

export const SIGN_UP = gql`
  mutation($input: RegisterInput!) {
    register(registerInput: $input) {
      token
    }
  }
`;


export const LOG_IN = gql`
  mutation($email: String!, $password: String!) {
    login(email:$email , password:$password ) {
      token
    }
  }
`;
