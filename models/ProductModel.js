const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product name can't be empty "],
  },

  company: {
    type: String,
    required: [true, "Company name can't be empty "],
  },

  price: {
    type: Number,
    required: [true, "Price can't be empty "],
  },

  colors: {
    type: Array,
    required: [true, "Colors can't be empty "],
  },

  image: {
    type: String,
    required: [true, "Image URL can't be empty "],
  },

  category: {
    type: String,
    required: [true, "Category can't be empty "],
  },

  isFeatured: {
    type: Boolean,
    required: [true, "IsFeatured can't be empty "],
  },
});

module.exports = mongoose.model("Product", productSchema);
