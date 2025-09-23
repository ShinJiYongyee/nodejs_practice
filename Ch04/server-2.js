const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    // 응답 데이터의 헤더(컨텐츠 자료형) 설정
    res.setHeader("Content-Type", "text/html");
    // 읽기 전용 스트림 객체 생성
    const readStream = fs.createReadStream(__dirname + "/index.html", "utf-8"); 
    //html 데이터를 읽어 pipe라인을 따라 스트림 객체를 response에 삽입
    readStream.pipe(res);

});

server.listen(3000, () =>{
    console.log(`3000번 포트에서 서버 실행 중`);
});