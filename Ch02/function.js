/*
// 함수 선언
function greeting(name){ // 매개변수(parameter)
    console.log(`${name} 님, 안녕하세요?`);
}
// 함수 호출
// 두 함수에 들어간 인수(argument)는 모두 문자열이다
greeting("섹스킹"); // 인수 = 쌍다옴표 문자열
greeting(`홍길동`); // 인수 = 백틱 문자열
*/

// // 이름없는 함수/기능을 변수(let) 또는 상수(const)로 선언
// const greeting = function(name){
//     console.log(`${name}님, 안녕하세요?`);
// }
// // 변수(기능을 갖는) 호출
// greeting("섹스킹");

// // 이름 없는 함수를 선언과 동시에 실행
// (function (a, b){
//     console.log(`두 수의 합: ${a, b}`);
// })(100, 200);

// 화살표 함수 선언
// 함수를 간단하게 선언할 수 있다
// () => { ... }
let hi = () => {return 'hi'}; // 이름없는 함수 선언의 function을 제외
// 한 줄일 경우 {return } 생략 가능
let hello = () => `hello`;
console.log(hi());
console.log(hello());
// (매개변수) => { ... }
let sum = (a,b) => a+b;
console.log(sum(100, 200));