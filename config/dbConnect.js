// const { default: mongoose } = require("mongoose");
// const dotenv = require("dotenv").config();
// const dbConnect = () => {
//   try {
//     const conn = mongoose.connect(process.env.MONGO_DB_URL);
//     console.log("Database connected successfully");
//   } catch (error) {
//     console.log("failed to connect");
//   }
// };

// module.exports = dbConnect;

const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL, {});
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed: ", error);
    process.exit(1);
  }
};

module.exports = dbConnect;
