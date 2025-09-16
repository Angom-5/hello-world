const mongoose = require("mongoose");

const stockoutFormSchema = new mongoose.Schema({
  pdtName: {
    type: String,
    required: true,
  },
  pdtDescription: {
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

module.exports = mongoose.model("User", stockoutFormSchema);