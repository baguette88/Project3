const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String },
  description: { type: String, default: "Best Product ever!" },
  tags: [{ type: String }],
  category: { type: String, default: "Category!" },
  subcategory: { type: String, default: "SubCategory!" },
  price: { type: Number, default: "100" },
  reviews: [{ type: String }],
  inStock: { type: Boolean, default: true },
  quantity: [{type: Number, default: "0" }]
});

module.exports = mongoose.model("Product", productSchema);

//Removed the duplicate description keys