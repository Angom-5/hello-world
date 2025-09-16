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
    type: Number,
    required: true,
  },
  costPrice: {
    type: Number,
    required: true,
  },
  pdtPrice: {
    type: Number,
    required: true,
    unique: true,
    trim: true,
  },
  supplier: {
    type: String,
    required: true,
  },
  outDate: {
    type: D,
    required: true,
  },
  quality: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("User", stockoutFormSchema);