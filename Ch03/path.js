// path 모듈 가져오기
const path = require("path");   

// 임의의 문자열을 연결하여 경로 완성
const fullPath = path.join( 'C:\\', 'some', 'work', 'ex.txt');
console.log(`임의의 경로: ${fullPath}`);

// 현재 파일의 절대 경로 추출
console.log(`파일 절대경로: ${__filename}`);

// 파일명을 제외한 현재 파일의 경로 추출하기
console.log(`파일명을 제외한 절대경로1: ${path.dirname(__filename)}`);
console.log(`파일명을 제외한 절대경로2: ${__dirname}`);

// 경로를 제외한 파일 이름 추출하기
console.log(`파일명: ${path.basename(__filename)}`);

// 확장자만 추출하기
console.log(`확장자: ${path.extname(__filename)}`);

// 경로를 객체로 반환
let parsePath = path.parse(__filename);
console.log(parsePath);
// 객체화된 경로 내 속성에 key - value 접근
console.log(parsePath.name);
console.log(parsePath[`name`]);