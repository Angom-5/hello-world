const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema({
  : {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model("Registration", registrationSchema);
