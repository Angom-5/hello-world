const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const signupSchema = new mongoose.Schema({
  fName: {
    type: String,
    required: true,
  },
  lName: {
    type: String,
    required: true,
  },
  fullName: {
  type: String,
    required: true,
    default: function () {
      return `${this.fName} ${this.lName}`;
    }
  },
  role: {
    type: String,
    required: true
  },
  telephone: {
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
    required: true
  }
});


//aunthentication
//defaulty this thing uses username and password but you can change that by using the things in the {} eg
//defaultily
// signupSchema.plugin(passportLocalMongoose);

//then..
signupSchema.plugin(passportLocalMongoose, {
  usernameField: "email" //use the name of the field you want to choose
});
module.exports = mongoose.model("userModel", signupSchema);
//In the "" what you want to call the action in your database
//make it singular cause mongo DB adds the 's'
