const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-");

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


//aunthentication
//defaulty this thing uses username and password but you can change that by using the things in the {} eg
//defaultily
// signupSchema.plugin(passportLocalMongoose);

//then..
signupSchema.plugin(passportLocalMongoose, {
  usernameField: "email" //use the name of the field you want to choose
});
module.exports = mongoose.model("User", signupSchema);
//In the "" what you want to call the action in your database
//make it singular cause mongo DB adds the 's'
