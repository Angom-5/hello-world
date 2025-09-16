const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true 
  },
  email: {
    type: String,
    : true,
  },
});

module.exports = mongoose.model("Registration", registrationSchema);
