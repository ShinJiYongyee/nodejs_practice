const express = require('express');
const app = express();
const port = 3000;

// body 본문의 json 파싱
app.use(express.json());

// list 생성
// 서버를 끄면 초기화된다
let nextID = 4;

let users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Carol' },
];

// 전체 데이터 조회
app.get('/users', (req, res) => {
    res.json(users);
});

// 특정 ID의 데이터 조회
app.get("/users/:id", (req, res) => {
    // 주소에 포함된 변수(문자열) id를 숫자로 변환해 할당
    const id = Number(req.params.id);
    // user가 보유한 id가 인자로 받은 id와 같을 경우 
    // user변수에 해당 id값의 user 저장
    const user = users.find(user => user.id == id);
    if(!user){
        return res.status(404).send({error : 'user not found'});
    }
    res.json(user);
});

// user 추가
app.post('/users', (req, res) => {
    // 공백을 trim()으로 삭제한 문자열 데이터의 name을 꺼내 할당
    const name = (req.body?.name).trim();
    if(!name){
        return res.status(404).json({error : 'name required'});
    }

    // 데이터를 json형식으로 선언, 할당
    const user = {id: nextID++, name};
    // 데이터 전송
    users.push(user);
    res.status(201).json(user);
});

// user 삭제
app.delete('/users/:id', (req, res) => {
    const index = users.findIndex(user => user.id == req.params.id);
    if(index === -1){
        return res.status(404).json({error: 'user not found'});
    }
    // splice: 배열에서 index부터 시작해 n개의 값을 추출
    // 특정 [값]을 저장하는 함수
    // [0]을 저장할 시 삭제
    const users_d = users.splice(index, 1)[0];
    res.json({users_d});
});

// 서버 구축
app.listen(port, () => {
    console.log(`${port}번 포트에서 서버 실행 중`);
});