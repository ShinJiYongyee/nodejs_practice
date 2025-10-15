<<<<<<< HEAD
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
=======
const express = require('express');
const app = express();
const port = 3000;
const contactRouter = require("./contactRouter.js"); // export한 모듈 사용
const aboutRouter = require("./aboutRouter.js");

app.use(express.json());

app.use("/users", contactRouter); // 특정 경로로 접속할 때에 한해 미들웨어 사용
app.use("/about", aboutRouter);

app.listen(port, () => {
    console.log(`server running at 3000`);
});
>>>>>>> c90642aa57cbbdb918ebeaa75430ea3fbdbcfb42
