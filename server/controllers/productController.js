const Product = require("../models/Product");

const productController = {
  // Get all products
  getAllProducts: async (req, res) => {
    console.log("getAllProducts controller called");
    try {
      const products = await Product.find({}, "-__v");
      console.log("products fetched", products);
      res.json(products);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error fetching products", error: error.message });
    }
  },

  // Get single product by ID
  getProductById: async (req, res) => {
    try {
      const product = await Product.findOne({ id: req.params.id }, "-__v");
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.json(product);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error fetching product", error: error.message });
    }
  },
};

module.exports = productController;
