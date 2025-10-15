const express = require('express');
const app = express();
const port = 3000;
const contactRouter = require("./quiz1.js"); // export한 모듈 사용
const aboutRouter = require("./quiz2.js");

app.use(express.json());

app.use("/users", contactRouter); // 특정 경로로 접속할 때에 한해 미들웨어 사용
app.use("/about", aboutRouter);

app.listen(port, () => {
    console.log(`server running at 3000`);
});