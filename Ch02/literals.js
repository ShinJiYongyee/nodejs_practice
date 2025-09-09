// let을 사용한 변수 선언, var과 동일하나 let을 주로 쓴다
// const를 통해 상수를 선언할 시 나중에 바꿀 수 없다
// javascript는 자료의 자료형을 따로 선언하지 않는다.
let num1 = 10; 
let num2 = 20;
// 연결 연산자를 사용한 출력
console.log(num1 + "과 " + num2 + "를 더하면 " + (num1 + num2) + "입니다");
// 백틱 기호를 활용한 템플릿 리터럴을 사용한 출력
console.log(`${num1}과 ${num2}를 더하면 ${num1 + num2}입니다.`);
// 터미널에서 node literals로 실행