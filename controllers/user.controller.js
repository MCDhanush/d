const { response } = require("express");
const users = require("../modal/userModal.js");
// const userOtp = require("../modal/userOtp.js");
// const nodemailer = require("nodemailer");

exports.userregister = async (req, res) => {
  const { fname, email, password } = req.body;
  if (!fname || !email || !password) {
    res.status(400).json({ error: "Invalid Credentials" });
  }
  try {
    const preuser = await users.findOne({ email: email });
    if (preuser) {
      res.status(400).json({ error: "This user already exist" });
    } else {
      const userregister = new users({
        fname,
        email,
        password,
      });

      //   here password hasing

      const storeData = await userregister.save();
      res.status(200).json(storeData);
    }
  } catch (error) {
    res.status(400).json({ error: "Ivalid Credantials", error });
  }
};
