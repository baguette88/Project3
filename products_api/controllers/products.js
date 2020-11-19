const express = require("express");
const products = express.Router();

const Product = require("../models/products.js");

// index
products.get("/", (req, res) => {
  Product.find({}, (error, foundProducts) => {
    if (error) {
      res.status(400).json({ error: error.message });
    }
    res.status(200).json(foundProducts);
  });
});

// create
products.post("/", async (req, res) => {
  Product.create(req.body, (error, createdProduct) => {
    if (error) {
      res.status(400).json({ error: error.message });
    }
    res.status(200).json(createdProduct);
  });
});

// delete
products.delete("/:id", (req, res) => {
  Product.findByIdAndRemove(req.params.id, (error, deletedProduct) => {
    if (error) {
      res.status(400).json({ error: error.message });
    }
    res.status(200).json(deletedProduct);
  });
});

// update
products.put("/:id", (req, res) => {
  Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (error, updatedProduct) => {
      if (error) {
        res.status(400).json({ error: error.message });
      }
      res.status(200).json(updatedProduct);
    }
  );
});

module.exports = products;
