const express = require("express");
const router = express.Router();

const { body } = require("express-validator");
const validate = require("../middlewares/validator.middleware");
const authController = require("../controllers/auth.controller");

router.post("/register", body("email").isEmail(), body("password").isLength({ min: 6 }), validate, authController.register);

router.post("/login", authController.login);

module.exports = router;
