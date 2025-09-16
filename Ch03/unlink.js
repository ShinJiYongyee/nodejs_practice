const fs = require("fs");

// 파일 지우기

// 동기화 방식
let filename1 = "example.txt";
if(fs.existsSync(filename1)){
    fs.unlinkSync(filename1);
    console.log("example deleted");
}
else{
    console.log(`file ${filename1} does not exist`);
}

// 비동기화 방식
let filename2 = "example_generated.txt"
if(fs.existsSync(filename2)){
    fs.unlink(filename2, (err) => {
        if(err){
            console.log(err);
        }
        console.log("file deleted");
    });
}
else{
    console.log(`file ${filename2} does not exist`);
}