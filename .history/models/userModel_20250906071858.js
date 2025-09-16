const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: 
  },
  email: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model("Registration", registrationSchema);
