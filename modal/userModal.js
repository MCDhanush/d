const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const emailRegexPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const userSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      //   return emailRegexPattern.test(value);  this or next line
      if (!validator.isEmail(value)) {
        throw new Error("Not valid");
      }
    },
    message: "Please enter a valid email",
  },
  password: {
    type: String,
    required: true,
    minlenght: 6,
  },
});

//  hash password
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
  }
  next();
});

// creating modal
const users = new mongoose.model("users", userSchema);

module.exports = users;
