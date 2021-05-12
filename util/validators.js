module.exports.validateUserUpdateInput = (
  business
)=>{
  const errors = {};
  if (business.trim() === '') {
    errors.business = 'Username must not be empty';
  }
  return {
    errors,
    valid: Object.keys(errors).length < 1
  };
};
module.exports.validateRegisterInput = (
    name,
    email,
    mobile,
    password,
    confirmPassword
  ) => {
    const errors = {};
    if (name.trim() === '') {
      errors.name = 'Username must not be empty';
    }
    if (mobile.trim() === '') {
      errors.mobile = 'mobile must not be empty';
    }
    if (email.trim() === '') {
      errors.email = 'Email must not be empty';
    } else {
      const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
      if (!email.match(regEx)) {
        errors.email = 'Email must be a valid email address';
      }
    }
    if (password === '') {
      errors.password = 'Password must not empty';
    } else if (password !== confirmPassword) {
      console.log('confirmPassword', confirmPassword);
      console.log('password', password);
      errors.confirmPassword = 'Passwords must match';
    }
  
    return {
      errors,
      valid: Object.keys(errors).length < 1
    };
  };
  
  module.exports.validateLoginInput = (name, password) => {
    const errors = {};
    if (name.trim() === '') {
      errors.name = 'Username must not be empty';
    }
    if (password.trim() === '') {
      errors.password = 'Password must not be empty';
    }
  
    return {
      errors,
      valid: Object.keys(errors).length < 1
    };
  };