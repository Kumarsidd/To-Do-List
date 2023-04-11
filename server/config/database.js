const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const connectDB = () => {
  try {
    mongoose.connect(process.env.MONGODB_URL);
    console.log("connected to db");
  } catch (error) {
    console.log("error " + error);
  }
};
module.exports = connectDB;
