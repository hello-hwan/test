// 펼침연산자 : Spread Operator

let arr1 = [4,5,6];
let arr2 = [1,2,3];
// 기존
let arr3 = [];
arr1.forEach(val => arr3.push(val));
arr2.forEach(val => arr3.push(val));
console.log(arr3);
//펼침연산자 활용 => 배열이 가진 값을 하나로 합치는 경우에 많이 씀
let newArr = [...arr1, ...arr2]; // 배열이 가진값 전부다 펼쳐줌 , 해달 배열이 가진 값을 전부다 펼쳐줌
console.log(newArr);

let str = "CD"; // 문자를 전부다 하나씩 펼쳐줌 - 배열생성
//forEach 는 array객체가 가진 내장함수다.
let strAry = [...str];

console.log(strAry);
console.log(str[0]); // 배열로 반환되지는 않아도 인덱스로 접근 가능하다.




