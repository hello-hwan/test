//02_timers.js

const timeout = setTimeout(()=>{
    let today = new Date(987654321000); // 기본은 Date는 매개변수없이 현재 날짜, 숫자로 적으면 1/1000초 단위
    // 만약에 숫자로 날짜 정보 받았으면 Date함수에 그냥 집어넣어라.
    let year = today.getFullYear();
    //'0'붙이는 이유는 항상 두자리로 출력
    //slice -숫자 자르기, 음수일경우 뒤에서 짜름 그렇게 하면 무조건 두자리로 나옴
    let  month = ('0' + (today.getMonth()+1)).slice(-2);
    let day = ('0' + today.getDay()).slice(-2);

    let hour = ('0' + today.getHours()).slice(-2);
    let minute = ('0' + today.getMinutes()).slice(-2);

    let current = `${year}년 ${month}월 ${day}일 ${hour}시 ${minute}분`;
    console.log(current);
},2000);

let count = 0;
const interval = setInterval(()=>{ // 얘는 무한대로 실행됨,그래서 작업 스케쥴러로 쓰는게 낫다. 단위는 1/1000 초 
    console.log('interval %d',count++);
    if(count >= 3){
        clearInterval(interval); // id 없이는 못끝냄 - 인터벌중에 어떤건지 알수가 없어서
    }
}, 1000)

const immediate = setImmediate(()=>{
    console.log(`즉시 실행 요청`); // 얘는 즉시가 아니라 마지막 프로세스가 끝나는 시점에 실행(마지막 코드 실행 후에)
})

console.log(`마지막 코드`);