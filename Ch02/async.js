// 동기 처리 = 코드가 작성된 순서대로 처리하는 방식
// 비동기 처리 = 소요 시간을 고려하여 작업의 순서를 조절하는 처리 방식
function displayA(){
    console.log("A");
}
// callback 함수를 이용한 비동기 처리
//callback 함수 = 함수를 매개변수로 받아 나중에 호출하는 함수 
function displayB(callback){ 
    // callback 방식으로 구현된 setTimeout함수
    // console.log를 2000 밀리초 후에 수행
    setTimeout(()=>{
        console.log("B");
        callback(); // 인자로 받은 함수를 이 부분에서 실행
    }, 2000);
}
function displayC(){
    console.log("C");
}
displayA();
displayB(displayC);
