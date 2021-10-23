const { gql } = require('apollo-server');

module.exports = gql`
  type Post {
    id: ID!
    body: String!
    createdAt: String!
    email: String!
  }
  type User {
    id: ID!
    email: String!
    token: String!
    name: String!
    mobile: String!
    business: String!
    createdAt: String!
  }
  type Customer {
    email: String!
    name: String!
    mobile: String!
    createdAt: String!
    author: User!
  }

  input CustomerInput {
    name: String!
    email: String!
    mobile: String!
    business: String!
  }

  input RegisterInput {
    name: String!
    password: String!
    confirmPassword: String!
    email: String!
    mobile: String!
  }
  input UpdateUserInput {
    business: String!
  }
  type File {
   url: String!
   filename: String!
   mimetype: String!
   encoding: String!
  }


  type Query {
    uploads: [File]
    getPosts: [Post]
    me: User
    getUsers: [User]
    getCustomers: [Customer]
    getAuthUser: User
    testMe: Boolean!
  }


  type Mutation {
    uploadFile(file: Upload!): File!
    register(registerInput: RegisterInput): User!
    addCustomer(customerInput: CustomerInput ): Customer!
    updateUser(updateUserInput: UpdateUserInput): User!
    login(email: String!, password: String!): User!
  }
`;