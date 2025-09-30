// app = express에서 제일 많이 쓰는 서버 이름
const express = require("express");     
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    console.log('요청 발생');
    res.status(200).send("Hello Node");
});

app.listen(port, ()=>{
    console.log(`${port}에서 서버 구동 중`);
});