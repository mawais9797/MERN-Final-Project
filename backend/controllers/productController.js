import asyncHandler from "express-async-handler";
import Product from "../models/productMode.js";

//@desc Fetch all products
// @route GET /api/products

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});

  res.json(products);
});
console.log("addProduct before");
const addProduct = asyncHandler(async (req, res) => {
  const {
    user,
    name,
    image,
    brand,
    category,
    description,
    rating,
    reviews,
    price,
   stock,
  } = req.body;
  console.log("hello product");
  const product = await Product.create({
    user,
    name,
    image,
    brand,
    category,
    description,
    rating,
    reviews,
    price,
    stock,
  });

  if (product) {
    res.status(201).json({
      _id: product._id,
      user: product.user,
      name: product.name,
      image: product.image,
      brand: product.brand,
      category: product.category,
      description: product.description,
      rating: product.rating,
      numReviews: product.reviews,
      price: product.price,
      countInStock: product.stock,
    });
    console.log('Product saved')
  } else {
    res.status(400);
    throw new Error("Invalid Product data");
  }

  res.json(products);
});

//@desc Fetch Single product
// @route GET / api/products/:id
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

export { getProducts, getProductById, addProduct };
