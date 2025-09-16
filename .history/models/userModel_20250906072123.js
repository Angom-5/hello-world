const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true 
  },

  email: {
    type: String,
    required: true,
    unique: true,
    trim
  },
});

module.exports = mongoose.model("Registration", registrationSchema);
