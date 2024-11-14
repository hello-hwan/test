// 05_reduce.js
let points = [40, 100, 1, 5, 25, 10];
let sum = points.reduce((total, currentVal)=>{
    // total:누적값, currentVal : 현재값, reduce는 초기값 설정가능
    console.log(currentVal);
    return total + currentVal; // 0 + 40 ... + 10
}, 0 ); // 0은 초기값 - total은 시작이 undefined

console.log(sum);

let total = 0;
for (let point of points){
    total = total + point;
}
console.log(total);
