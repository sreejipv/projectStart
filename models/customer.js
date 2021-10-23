const mongoose = require("mongoose");
const customer = new mongoose.Schema({
    name: String,
    email: String,
    mobile: String,
    business: String,
    file: String,
    confirmPassword: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }
})

module.exports = mongoose.model("Customer", customer); 