// Ch03 폴더 내 확장자가 ".txt" 인 파일의 개수를 구하는 코드를 작성하시오.
// 힌트)
// 1. reddir 함술를 사용해서 폴더에 있는 파일들을 배열 형태로 받습니다.
// 2. 배열을 처움부터 끝까지 순환하면서 다음 과정을 반복합니다.
// 3. 파일마다 확장자를 추출하고 .txt인지 확인합니다.
// 4. 확장자가 ".txt"이면 카운터를 추가하고, 아니라면 다음 파일로 넘어갑니다.

const fs = require("fs");
const path = require("path");

let count = 0;

let files = fs.readdirSync("./");

// console.log(files);

for (file of files){
    // console.log(file);
    let ext = path.extname(file);
    // console.log(`extention of ${file} is ${ext}`);
    if(ext == ".txt"){
        count++;
    }
}

console.log(`txt 파일 수 : ${count}`);
