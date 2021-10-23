const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const path = require('path');
const fs = require('fs');
const { UserInputError } = require('apollo-server');
const checkAuth = require('../../util/check-auth');
const {
  validateRegisterInput,
  validateLoginInput,
  validateUserUpdateInput
} = require('../../util/validators');
const { SECRET_KEY } = require('../../config');
const User = require('../../models/User');

function generateToken(user) {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      name: user.name
    },
    SECRET_KEY,
    { expiresIn: '1h' }
  );
}



module.exports = {
  Query: {
    async getAuthUser (_, { body }, context) {
      // if (!authUser) return null;
  
      // If user is authenticated, update it's isOnline field to true
      const user = checkAuth(context)
  
      return user;
    }
  },
  Mutation: {
    uploadFile: async (parent, {file}) => {
     
        const {createReadStream, filename, mimetype, encoding} =  await file

        const stream = createReadStream()
        const pathName = path.join(__dirname,`../../public/images/${filename}`)
        // fileStream.pipe(fs.createWriteStream(`./uploadedFiles/${filename}`))
        await stream.pipe(fs.createWriteStream(pathName))
        return {
          url: `http://localhost:4000/images/${filename}`,
        }
 
    },
    async login(_, { email, password }) {
      const { errors, valid } = validateLoginInput(email, password);
      if (!valid) {
        throw new UserInputError('Errors', { errors });

      }

      const user = await User.findOne({ email });
   
      if (!user) {
        errors.general = 'User not found';
        return {
          errors
        }
        throw new UserInputError('User not found', { errors });
      }

      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        errors.general = 'Wrong crendetials';
        console.log('Wrong crendetial');

        throw new UserInputError('Wrong crendetials', { errors });


      }

      const token = generateToken(user);
 
      return {
        ...user._doc,
        id: user._id,
        token
      };
    },

  async updateUser(
      _,{updateUserInput: {business}},context
    ){
      const { valid, errors } = validateUserUpdateInput(
        business
      );

      if (!valid) {
        throw new UserInputError('Errors', { errors });
      }

      const user = checkAuth(context)
      if(user) {
        console.log(user)
        return user
      }
    },

    async register(_,{registerInput: { name, email, mobile, password, confirmPassword }} ) {
      // Validate user data
      const { valid, errors } = validateRegisterInput(
        name,
        email,
        mobile,
        password,
        confirmPassword
      );
      if (!valid) {
        throw new UserInputError('Errors', { errors });
      }
      // TODO: Make sure user doesnt already exist
      const user = await User.findOne({ email });
      if (user) {
        throw new UserInputError('Email is taken', {
          errors: {
            email: 'This Email is taken'
          }
        });
      }
      // hash password and create an auth token
      password = await bcrypt.hash(password, 12);

      const newUser = new User({
        email,
        name,
        password
      });

      const res = await newUser.save();

      const token = generateToken(res);
      const createdAt =  new Date().toISOString();

      return {
        ...res._doc,
        id: res._id,
        token,
        createdAt
      };
    }
  }
};