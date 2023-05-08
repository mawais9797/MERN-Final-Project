import express from "express";
// import asyncHandler from "express-async-handler";
// import Product from "../models/productMode.js";
const router = express.Router();
import {
  getProducts,
  getProductById,
  addProduct,
} from "../controllers/productController.js";
console.log("product Route");

router.route("/addproduct").post(addProduct);
router.route("/").get(getProducts);
router.route("/:id").get(getProductById);

export default router;

// router.get(
//   "/",
//   asyncHandler(async (req, res) => {
//     const products = await Product.find({});
//     res.send(products);
//   })
// );

// // router.get(
// //   "/api/products",
// //   asyncHandler(async (req, res) => {
// //     const products = await Product.find({});
// //   //   res.send(products);
// //   // })
// // );

// router.get(
//   "/:id",
//   asyncHandler(async (req, res) => {
//     const product = await Product.findById(req.params.id);
//     if (product) {
//       res.json(product);
//     } else {
//       res.status(404);
//       throw new Error("Product not Found");
//     }
//   })
// );

// export default router;
