const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true 
  },
  last
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
});

module.exports = mongoose.model("Registration", registrationSchema);
