const express = require("express");
const dbConnect = require("./config/dbConnect");
const methodOverrid = require("method-override");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", "./views");

dbConnect();

//정적 파일 폴더(public) 등록
app.use(express.static("./public"));

//method-override 미들웨어 등록(PUT, DELETE 처리) 
app.use(methodOverrid("_method"));

//바디파서 미들웨어 등록
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//라우터 처리 미들웨어 등록
app.use("/", require("./routes/loginRoutes"));
app.use("/contacts", require("./routes/contactRoutes"));

app.listen(port, () => {
  console.log(`${port}번 포트에서 서버 실행 중`);
});
