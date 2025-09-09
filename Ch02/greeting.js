// 가져올 모듈의 위치를 찾아 변수 가져오기
const {user, user1, user2} = require("./user");     
const hello = require("./hello");
// 함수 호출
hello(user);
// 모듈 내 복수의 변수를 객체로 받아오기
const users = require("./user");
// 리스트로 출력
console.log(users);