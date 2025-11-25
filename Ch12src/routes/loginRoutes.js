const express = require('express');
const router = express.Router();
const {
    getRegister, 
    getlogin, 
    loginUser,
    logout,
    registerUser
} = require("../controllers/loginController");

router.route("/").get(getlogin).post(loginUser);
router.route("/register").get(getRegister).post(registerUser);
router.route("/logout").get(logout);

module.exports = router;

