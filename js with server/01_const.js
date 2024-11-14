//const.js , 상수, 문자, 함수표현식
const user = {
    "id" : "Hong",
    "age" : 25
}; // const 선언을 하더라도, 객체는 참조기 때문에 내부 속성값은 변경됨, 심지어 속성 추가도됨

user.id = "Kang";
user.age = 20;
user.ssn = "981015";

user= {}; // const 선언된 객체는 재할당이 불가능

console.log(user);