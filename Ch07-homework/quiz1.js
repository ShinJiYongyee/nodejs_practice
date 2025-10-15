const express = require("express");
const router = express.Router();

const users = [
    {id:1, name:"Kim"},
    {id:2, name:"Lee"},
    {id:3, name:"Park"},
];

router.get("/", (req,res) => {
    res.status(200).json(users);
});

module.exports = router;    
// 이 파일을 require로 가져올 때 router.get(...)객체를 반환하도록 설정

