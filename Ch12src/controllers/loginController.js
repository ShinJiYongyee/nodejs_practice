const asyncHandler = require('express-async-handler');
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;

//@desc Get login page
//@route GET /
const getlogin = (req, res) => {
  res.render("home");
};

//@route GET /logout
const logout = (req, res) => {
  res.clearCookie("token");
  res.redirect("/");
};

const loginUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  // 사용자 로그인 처리(아이디와 패스워드 확인)
  // 비동기 처리 = 값을 가져올 동안 다른 작업 정지
  const user = await User.findOne({ username });
  // 사용자 검색 및 비밀번호 검증
  if (!user) {
    return res.status(401).json({ message: "일치하는 사용자가 없습니다." });
  }
  const isMatch = await bcrypt.compare(password, user.password);

  // 토큰 발급
  const token = jwt.sign({ id: user._id, username: user.username }, jwtSecret);
  res.cookie("token", token, { httpOnly: true });
  res.redirect("/contacts");

});

//@route GET /register
const getRegister = (req, res) => {
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


module.exports = { getRegister, registerUser, getlogin, logout, loginUser };

