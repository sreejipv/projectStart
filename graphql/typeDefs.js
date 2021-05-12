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
    getAuthUser: User
    testMe: Boolean!
  }


  type Mutation {
    uploadFile(file: Upload!): File!
    register(registerInput: RegisterInput): User!
    updateUser(updateUserInput: UpdateUserInput): User!
    login(email: String!, password: String!): User!
  }
`;