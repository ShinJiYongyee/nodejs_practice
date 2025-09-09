// const order = (coffee) => {
//     console.log(`${coffee} 주문접수`);
// }
// const display = (result) =>{
//     console.log(`${result} 완료`);
// }
// order(`아메리카노`);

const order = (coffee, callback) => {
    console.log(`${coffee} 주문 접수`);
    console.log(`${coffee} 제조 중`);
    setTimeout(() => {
       callback(coffee); // 콜백 되는 함수의 매개변수 전달은 여기서 이루어진다.
    }, 3000);
}
const display = (result) => {
    console.log(`${result} 완료`);
}
order(`아메리카노`, display);