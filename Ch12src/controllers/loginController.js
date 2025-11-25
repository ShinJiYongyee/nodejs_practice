const asyncHandler = require('express-async-handler');
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

//@desc Get login page
//@route GET /
const getlogin = (req, res)=>{
    res.render("home");
};

const loginUser = asyncHandler(async(req, res)=>{
    const {username, password} = req.body;
    if(username === 'admin' && password === "1234"){
        res.send("Login sucess");
    }
    else {
        res.send("Login failed");
    }
});

//@route GET /register
const getRegister = (req, res)=>{
    res.render("register");
};

//@route POST /register
const registerUser = asyncHandler(async (req, res) => {
  const { username, password, password2 } = req.body;
  if (password === password2) {
    // bcrypt를 사용해서 비밀번호를 암호화합니다.
    const hashedPassword = await bcrypt.hash(password, 10);

    // 사용자 이름과 암호화된 비밀번호를 사용해서 새 사용자를 만듭니다.
    const user = await User.create({ username, password: hashedPassword });

    // 성공 메시지를 출력합니다.
    res.status(201).json({ message: "Register successful", user });

  } else {
    res.send("Register Failed");
  }
});


module.exports = {getRegister, registerUser, getlogin, loginUser};

