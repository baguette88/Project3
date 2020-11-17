const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  celebrated: { type: Boolean, default: false },
  description: { type: String, default: "Best Product ever!" },
  likes: { type: Number, default: 0 },
  tags: [{ type: String }],
});

module.exports = mongoose.model("Product", productSchema);
