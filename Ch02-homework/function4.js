function fetchData(callback){
    console.log("데이터 요청 중...");

    setTimeout(() => {
        const data = {id: 1, name: "홍길동"};
        callback(data);     
    }, 2000);
}
function displayData(result){
    console.log("가져온 데이터:", result);
}
fetchData(displayData);