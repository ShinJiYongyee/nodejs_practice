// 실행 순서대로 await를 붙여 위에서부터 차례대로 진행되도록 강제
async function init() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    console.log(users);
}

// // 실행 순서를 강제하지 않아 세 줄의 코드가 순서대로 동작하지 않는다 -> 에러
// function init(){
//     const response =  fetch("https://jsonplaceholder.typicode.com/users");
//     const users =  response.json();
//     console.log(users);
// }

init();