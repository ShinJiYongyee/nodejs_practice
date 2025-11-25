const jwt = require("jsonwebtoken");
require("dotenv").config();
const jwtSecret = process.env.JWT_SECRET;

const checkLogin = async (req, res, next) => {
    // 캐시에 저장된 값을 사용하지 않음
    // 서버 응답을 캐시에 저장하지 않음
    // 헤더 정보는 무조건 서버에서 검증
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    const token = req.cookies.token;

    if (!token) {
        return res.redirect('/');
    }

    try {
        const decoded = jwt.verify(token, jwtSecret);
        req.username = decoded.username;
        next();
    } catch (error) {
        return res.status(401).json({ message: "로그인이 필요합니다." });
    };
};

module.exports = checkLogin;