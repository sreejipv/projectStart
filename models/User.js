const mongoose = require("mongoose");
const user = new mongoose.Schema({
    name: String,
    email: String,
    mobile: String,
    business: String,
    password: String,
    confirmPassword: String,
    role: String,
})

module.exports = mongoose.model("User", user); 