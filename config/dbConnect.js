const { default: mongoose } = require("mongoose");

const dbConnect = () => {
  try {
    const conn = mongoose.connect("mongodb://localhost:27017/TimeSea");
    console.log("Database connected successfully");
  } catch (error) {
    console.log("failed to connect");
  }
};

module.exports = dbConnect;
