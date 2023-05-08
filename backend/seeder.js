import mongoose from "mongoose";
import dotenv from "dotenv";
// import colors, { cyan } from "colors";
import colors from "colors";
import users from "./data/users.js";
import products from "./data/products.js";
import User from "./models/userModel.js";
import Product from "./models/productMode.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/db.js";

const { cyan, red } = colors;
dotenv.config();

//connectDB();
// console.log(users);
const importData = async () => {
  try {
    await connectDB();
    //await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });
    await Product.insertMany(sampleProducts);
    console.log("Data Imported", red.inverse);
    process.exit(0); // middleware
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1); // middleware
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    console.log("Data Destroyed! ".red.inverse);
    process.exit(0);
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
