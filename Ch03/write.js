const fs = require("fs");

// 파일에 내용 쓰기

// 동기화 방식으로 덮어 쓰기
let data1 = "written text";
fs.writeFileSync("./example.txt", data1, "utf-8");

// 비동기화(콜백) 방식으로 덮어 쓰기
// 에러 시 쓰지 않으므로 정상 처리 시 매개변수 data 생략
let data2 = "written by writeFile\n";
fs.writeFile("./example_generated.txt", data2, "utf-8", (err) => {
    if(err){
        console.log(err);
    } 
});
// 파일 내용 추가
let data3 = "added text";
fs.writeFile("./example_generated.txt", data3,{flag:'a'}, (err) => {
    if(err){
        console.log(err);
    } 
});
fs.appendFile("./example.txt", "\nappended text", (err) => {
    if(err) {
        console.log(err);
    }
    console.log("text appended");
});