const express = require('express');
const app = express();
const port = 3000;

// app.get("/", (req, res) => {
//     console.log("요청 발생");
//     res.status(200).send("hello Node");
// });

// 미들웨어 등록
// 먼저 처리될 모듈부터 순서대로 등록해야 정상 작동
// json 파싱, 쿼리 스트링 해석 모듈은 라우팅 전에 준비해야 한다
// json 파싱을 위한 모듈
app.use(express.json());
// 쿼리 스트링 해석에 qs 모듈 사용
app.use(express.urlencoded({ extended : true }));
// root 경로에서 시작하여 사용할 모듈을 정의
app.use("/", require("./routes/contactRoutes"));

app.listen(port, () => {
    console.log(`${port}번 포트에서 서버 실행 중`);
});
