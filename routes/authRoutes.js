const express = require("express");
const { register, login } = require("../controllers/authController.js");

//router object
const router = express.Router();

//routes
// REGISTER || POST
router.post("/register", register);

// LOGIN || POST
router.post("/login", login);

//export
module.exports = router;
