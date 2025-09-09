let likePizza = true;
// Promise 객체 = 처리 성공시/실패시 반환값을 설정
// 성/패 여부만 판단, 객체가 명령을 실행하지 않는다
const pizza = new Promise((resolve, reject) => {
    if(likePizza)
        resolve(`피자 주문`);
    else
        reject(`피자를 주문하지 않습니다`);
});
pizza
.then(result => console.log(result))    // 성공시 반환값 처리
.catch(err => console.log(err));        // 실패시 반환값 처리