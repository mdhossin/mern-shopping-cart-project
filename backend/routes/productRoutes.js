const express = require("express");
const {
  getProducts,
  getProductById,
  createProduct,
} = require("../controller/productController");
const router = express.Router();

router.post("/products", createProduct);

router.get("/products", getProducts);
router.get("/products/:id", getProductById);

module.exports = router;
