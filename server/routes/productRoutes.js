const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const productController = require("../controllers/productController");

// Get all products
router.get("/", productController.getAllProducts);

module.exports = router;
