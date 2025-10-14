const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    console.log('요청 발생');
    res.status(200);
    res.send("hello Node");
});

app.get("/contacts", (req, res) =>{
    res.status(200).send("Contacts page");
});

app.get("/contacts/:id", (req, res) =>{
        console.log(`get ${req.params.id}`);
        res.status(200).send(`View Contact for ID : ${req.params.id}`);})
    .put("/contacts/:id", (req, res) =>{
        console.log(`put ${req.params.id}`);
        res.status(200).send(`View Contact for ID : ${req.params.id}`);});

app.listen(port, () => {
    console.log(`${port} 번 포트에서 서버 실행 중`);
});