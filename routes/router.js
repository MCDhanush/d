const express = require("express");
const router = new express.Router();
const controllers = require("../controllers/user.controller.js");
router.use(express.json());
// Routes
router.post("/user/register", controllers.userregister);

module.exports = router;
