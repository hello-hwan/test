// 03_sort.js - 원본데이터 변경됨

let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort(); //원본 배열이 변경됨
console.log(fruits); // "Apple", "Banana", "Mango", "Orange"

let points = [40, 100, 1, 5, 25, 10];
points.sort();
console.log(points); // 1, 5, 10, 25, 40, 100

points.sort(function(a,b){
    return a-b;
}) // 숫자만 해당하는게 아니라 객체 정렬할때도 해당됨 - 객체의 내부에 여러개 필드값이 있어서 뭘 기준으로 정렬할지 결정할때
console.log(points);

let emps = [
    {eid : 200, name : "King"},
    {eid : 100, name : "Edward"},
    {eid : 300, name : "Han"}
];

emps.sort((pre,next)=>{
    return pre.eid - next.eid;
});

console.log(emps);