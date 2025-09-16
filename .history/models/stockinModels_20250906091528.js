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
  quantity: {
    type: String,
    required: true,
  },
  costPrice: {
    type: String,
    required: true,
  },
  pdtPrice: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  supplier: {
    type: String,
    required: true,
  },
  outDate: {
    type: String,
    required: true,
  },
  quality: {
    type: String,
    required: true,
  },
  col: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("User", stockoutFormSchema);