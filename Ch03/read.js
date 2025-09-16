const fs = require("fs");

// 파일 읽어오기

// 동기화 방식으로 읽어오기
let example = fs.readFileSync("example.txt", "utf-8");
console.log(example);

console.log("-----절취선-----");

// 비동기화(콜백) 방식으로 읽어오기
fs.readFile("example.txt", "utf-8", (err, data) => {
    if(err){
        console.error(err);
    }
    console.log(data);
});