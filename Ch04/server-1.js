const http = require("http");

// 서버 생성
// request와 response 객체를 매개변술로 받는 콜백 함수
const server = http.createServer((req, res) => {
    console.log(req.method);    // 요청 메소드 확인

    // 서버에서 클라이언트에 넘겨 주는 응답 객체

    // 응답 헤더: 응답의 종류 결정
    // setHeader: 상태 코드를 포함하지 않는 헤더
    res.setHeader("Content-Type", "text/plain");
    // writeHead: 상태 코드를 포함하는 헤더    
    res.writeHead(200, {'content-type' : 'text/plain'});
    res.write("Hello\n");       // 응답 본문
    res.write("hello2", "utf-8");
    res.end();                  // 응답 종료
});

// 서버 구동
// 서버가 클라이언트의 요청을 받을 수 있도록 계속 접속을 대기하는 함수
// Daemon process(백그라운드에서 계속 실행되는 프로세스)
// 사용하는 포트 번호를 인자로 전달
server.listen(3000, () => {
    console.log("3000번 포트에서 서버 실행 중");
});
