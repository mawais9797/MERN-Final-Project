// const express = require("express");
// const products = require("./data/products");

import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import cors from "cors";
import orderRoutes from "./routes/orderRoutes.js";

const app = express();
dotenv.config();

connectDB();
app.use(cors());

app.use(express.json());
console.log("user route");

app.use("/api/user", userRoutes);
app.use("/api/orders", orderRoutes);

// app.use("/api/addproduct", productRoutes);

app.use("/", productRoutes);
app.use("/api/products", productRoutes);
app.use("/api/products/:id", productRoutes);

app.use(notFound);
app.use(errorHandler);

// app.get("/", (req, res) => {
//   res.send("API is running...");
// });

// app.get("/api/products", (req, res) => {
//   res.json(products);
// });

// app.get("/api/products/:id", (req, res) => {
//   const product = products.find((p) => p._id === req.params.id);
//   //console.log(product);
//   res.json(product);
// });
const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Example app listening on port ${process.env.NODE_ENV} http://localhost:5000`
      .yellow.bold
  )
);

//Run app, then load http://localhost:port in a browser to see the output.
