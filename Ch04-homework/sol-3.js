const http = require("http");

const server = http.createServer((req, res) => {

    // 1번 문제
    // res.writeHead(200, {'content-type': 'text/plain'});
    // res.write('Hello, world!', 'utf-8');

    // 2번 문제
    const{method, url} = req;
    
    if(method == 'GET' && url =="/home"){
        res.writeHead(200, {'content-type': 'text/plain'});
        res.write('Welcome home', 'utf-8');
    }
    else if(method=="GET" && url == "/about"){
        res.writeHead(200, {'content-type': 'text/plain'});
        res.write('About us', 'utf-8');
    }else{
        res.writeHead(404, {'content-type': 'text/plain'});
        res.write('wrong address');
    }

    res.end();
});

server.listen(8080, () => {
    console.log("8080번 포트에서 서버 실행 중");
});