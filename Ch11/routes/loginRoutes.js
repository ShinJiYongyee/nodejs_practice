const express = require("express");
const router = express.Router();
const { 
    getLogin, 
    getRegister, 
    loginUser,
    registerUser
} = require("../controllers/loginController");

router.route("/").get(getLogin).post(loginUser);
router.route("/register").get(getRegister).post(registerUser);

module.exports = router;