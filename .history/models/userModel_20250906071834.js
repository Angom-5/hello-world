const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema({
  firstName: {
    type: String,
    requied: true,
    
  },
  email: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model("Registration", registrationSchema);
