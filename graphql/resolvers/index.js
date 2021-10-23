const postsResolvers = require('./posts');
const usersResolvers = require('./users');
const customersResolvers = require('./customers');

module.exports = {
  Query: {
    ...postsResolvers.Query,
    ...usersResolvers.Query,
    ...customersResolvers.Query
  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...customersResolvers.Mutation
  }
};