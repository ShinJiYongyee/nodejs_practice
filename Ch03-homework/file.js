// quiz-2.js 코드에서 사용하고 있는 file.js 모듈을 작성하세요. 
// file.js 모듈에서 가져온 writeData 함수는 
// 파일 경로와 내용을 지정하면 해당 파일에 내용을 기록합니다.
// quiz-2.js 에서 사용할 file.js 모듈을 작성하고, 모듈 내보내기를 하세요
// 힌트) 모듈 내보내기는 modele.exports = writeData; 를 사용한다.

const fs = require("fs");

const writeData = (fileName, data) => {
    fs.writeFile(fileName, data, (err) => {
        if(err){
            console.log(err);
        }
        console.log(`${fileName} created`);
    });
}

module.exports = writeData;