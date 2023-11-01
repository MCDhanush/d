const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set("strictQuery", false);

connectDB = async () => {
  try {
    await mongoose
      .connect(
        "mongodb+srv://my-backend:JUljXavMgbYdeDwc@cluster0.cbb5lb5.mongodb.net/chennai-events?retryWrites=true&w=majority"
      )
      .then((data) => {
        console.log(`Databse is connected ${data.connection.host}`);
      });
  } catch (err) {
    console.log("Error occured", err);
  }
};

module.exports = connectDB;
