const mongoose = require("mongoose");
const passport = require("passport");

const signupSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  telephone: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
});


//aunthentisization
//defaulty this thing uses username and password for signup but you can change tha
signupSchema.plugin(passportLocalMongoose, {
  usernameField: email //use
});
module.exports = mongoose.model("User", signupSchema);
//In the "" what you want to call the action in your database
//make it singular cause mongo DB adds the 's'
