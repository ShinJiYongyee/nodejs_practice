// app = express에서 제일 많이 쓰는 서버 이름
const express = require("express");     
const path = require("path");

const app = express();
const port = 3000;

// 클라이언트에 응답 보내기 

app.get("/", (req, res) => {
    console.log('요청 발생');

    // 문자열 보내기
    // res.status(200).send("Hello Node");

    // json 형식 객체 보내기
    // res.status(200).json({
    //     message : "Hello Node",
    //     Header : req.headers
    // });
});

app.get('/home', (req, res) => {
    // 파일 보내기
    res.sendFile(path.join(__dirname, "/home.html"));
    // + 연산자가 매개변수로 전달되어 엉뚱한 주소로 안내할 수 있다
    // res.sendFile(__dirname + "/home.html");
});

app.get("/contacts", (req, res) => {
    res.status(200).send("Contacts Page");
});

app.post("/contacts", (req, res) => {
    // POST: 매개변수를 body tag 내에서 암호화하여 전달
    res.status(201).send("Create Contacts");
});

app.get("/contacts/:id", (req, res) => {
    // GET: url에 매개변수를 포함해서 전달
    // 전달된 매개변수 id를 사용
    res.status(200).send(`ID: ${req.params.id}`);
});

// 서버에서 전달된 데이터 수정
app.put("/contacts/:id", (req, res)=>{
    res.status(200).send(`Update ID: ${req.params.id}`);
});

// 서버에서 전달된 데이터 삭제
app.delete("/contacts/:id", (req, res) => {
    res.status(200).send(`Delete ID: ${req.params.id}`);
});

app.listen(port, ()=>{
    console.log(`${port}에서 서버 구동 중`);
});