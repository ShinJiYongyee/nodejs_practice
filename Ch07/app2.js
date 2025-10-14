const express = require('express');
const app = express();
const port = 3000;

// 미들웨어 정의
const logger = (req, res, next) =>{
    console.log(`User logged`);
    next();
};

// 일반 미들웨어 등록
app.use(logger);
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.route('/')
.get((req, res) => {
    console.log('hello node');
    res.status(200).send(`hello node`);
});

// 라우터 미들웨어 등록
app.use("/contacts", require("./routes/contactRoutes"));
// 오류 미들웨어 등록

// 서버 실행
app.listen(port, () => {
    console.log(`server running at port ${port}`);
});