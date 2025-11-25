const express = require('express');
const router = express.Router();
const {
    getRegister, 
    getlogin, 
    loginUser,
    registerUser} = require("../controllers/loginController");

router.route("/").get(getlogin).post(loginUser);
router.route("/register").get(getRegister).post(registerUser);

module.exports = router;

