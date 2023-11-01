const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set("strictQuery", false);

connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL).then((data) => {
      console.log(`Databse is connected ${data.connection.host}`);
    });
  } catch (err) {
    console.log("Error occured", err);
  }
};

module.exports = connectDB;
