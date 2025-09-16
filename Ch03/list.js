// fs 모듈 불러오기
const fs  = require("fs"); 

// 현재 경로(./)상의 파일 목록을 배열로 읽어오기

// 동기화 방식으로 디렉토리 내 파일 목록 읽어오기
let files1 = fs.readdirSync("./");
console.log(files1);
console.log(files1[0]);

console.log("-------------절취선------------");

// 비동기화(콜백) 방식으로 디렉토리 내 파일 목록 읽어오기
// 예외처리 필수
// 매개변수: 에러 또는 정상적 출력을 전달
let files2 = fs.readdir('./', (err, data) => {
        if(err){
            console.log(err);
        }
        else{
            console.log(data);
        }
 });
// 이 출력이 콜백 함수의 종료보다 먼저 실행되어 결과를 출력하지 않는다
console.log(`files2: ${files2}`);   