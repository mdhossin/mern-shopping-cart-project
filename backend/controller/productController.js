const Product = require("../models/Product");

const createProduct = async (req, res) => {
  const { name, description, price, countInStock, imageUrl } = req.body;

  try {
    await Product.create({
      name,
      description,
      price,
      countInStock,
      imageUrl,
    });
  } catch (error) {
    console.error(error);
  }

  res.status(200).json({ message: "Product created successfully." });
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      res.status(400).json({ message: "No product found" });
    }

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
};
