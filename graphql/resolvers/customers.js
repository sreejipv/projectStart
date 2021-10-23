const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { UserInputError } = require('apollo-server');

const path = require('path');
const fs = require('fs');
const checkAuth = require('../../util/check-auth');
const {validateCustomerInput} = require('../../util/validators');
const Customer = require('../../models/Customer');
const User = require('../../models/User');





module.exports = {
  Query: {
    async getCustomers(_, {body}, context) {
      try {

        const user = userId =>{
          return User.findById(userId)
          .then(user => {
            return {...user._doc, 
                id: user._id,
              business: user.business }
          })
          .catch(err=>{
            throw err;
          })
        }
        const userData = checkAuth(context)

        const customers = await Customer.find();
        return customers.map((customer)=>{
          return {...customer._doc, _id: customer.id, author: user.bind(this, userData.id) }
        });
      } catch (err) {
        throw new Error(err);
      }
    }
  },

    Mutation: {
        async addCustomer(_,{customerInput: {name, email, mobile, business}}, context){
          const user = checkAuth(context)
          console.log(user, 'user customerpage')
            const { valid, errors } = validateCustomerInput(
                name,
                email,
                mobile,
                business
              );
              if (!valid) {
                throw new UserInputError('Errors', { errors });
              }

              const customer = await Customer.findOne({ mobile });
              if (customer) {
                throw new UserInputError('Customer available', {
                  errors: {
                    email: 'This Email is taken'
                  }
                });
              }

              const newCustomer = new Customer({
                name,
                email,
                mobile,
                business,
                author :user.id
              });

              const res = await newCustomer.save();
              const createdAt =  new Date().toISOString();

              return {
                ...res._doc,
                createdAt
              };


        }
    }
}