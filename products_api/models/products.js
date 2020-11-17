const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  image: { type: Image },
  description: { type: String, default: "Best Product ever!" },
  tags: [{ type: String }],
  category: { type: String, default: "Category!" },
  subcategory: { type: String, default: "SubCategory!" },
  description: { type: String, default: "Description!" },
  price: { type: Number, default: "100" },
  reviews: [{ type: String }],
  inStock: { type: Boolean, default: true },
});

module.exports = mongoose.model("Product", productSchema);
