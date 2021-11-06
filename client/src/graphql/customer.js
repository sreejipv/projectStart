import gql from "graphql-tag";

/**
 * Gets authenticated user
 */
export const GET_CUSTOMERS = gql`
  query {
    getCustomers {
      name,
      email,
      mobile
    }
  }
`;
export const ADD_CUSTOMER = gql`
  mutation($input: CustomerInput!) {
    addCustomer(customerInput: $input) {
      name
    }
  }
`;