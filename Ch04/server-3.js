const http = require("http");

const server = http.createServer((req, res) => {

    const{method, url} = req;

    // 응답 데이터의 헤더(컨텐츠 자료형) 설정
    res.setHeader("Content-Type", "text/html");
    
    if(method ==="GET" && url === "/home"){
        res.statusCode = 200;
        res.end("Home");
    }
    else if(method ==="GET" && url === "/about"){
        res.statusCode = 200;
        res.end("About");
    }
    else{
        res.statusCode = 404;
        res.end("Not found");
    }

});

server.listen(3000, () =>{
    console.log(`3000번 포트에서 서버 실행 중`);
});