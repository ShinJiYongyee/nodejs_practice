// Ch03 폴더에 mine 폴더가 있는지 확인한 후 없다면 새로 만드는 코드를 작성
// 힌트) existSync 함수, mkdir 함수의 콜백 함수를 사용

const fs = require("fs");

let folderName = "./mine";
if(fs.existsSync(folderName)){
    console.log(`folder ${folderName} already exists`);
}else{
    fs.mkdir(folderName, (err) => {
        if(err){console.error(err);}
        console.log("folder created");
    });
}