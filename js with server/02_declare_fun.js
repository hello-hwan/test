// 02_declare_fun.js
// 1) 함수선언문 => var, 동일한 이름으로 함수 재선언 가능, 오류 안남(대신 제대로 가져왔는지 확인안됨)
// 함수 선언문은 모두 밑에 모아둠
/* // 함수 호이스팅 
var plus = function(x,y,z){ //위에 함수랑 같음, 자바스크립트 함수는 데이터로 취급
    return x+y+z;
}
    */

function plus(x,y){
    return (x+y);
}
console.log(plus(1,2,3));
function plus(x,y,z){
    return (x+y+z);
}

console.log(plus(1,2));
console.log(plus(1,2,3));

// 2) 함수표현식 => let, const 변수를 선언하고, const는 아무도 함수를 수정하지 못하도록 막아둠 (객체와는 달리 내부도 수정 못함)
// 그리고 선언된 후에만 사용가능
const printMsg = function(keyword){
    return "result : " + keyword;
}

// 3) 화살표 함수 =>    () => {}             자바에서는 ()->{} 람다식?
// 매개변수가 하나면 () 생략가능, 실행코드가 한줄이면 {}생략, return으로 처리
// 화살표 함수에서 this를 사용하지 못한다라고 생각할 것 - 함수, 메소드에 따라 주체가 달라짐
// 함수에서 this 사용하면 그냥 window를 가리킴, 아무의미가 없다
// node의 경우는 this가 global을 가리킴, 아무의미없음
// let obj = {id = "Hong", getMsg = function(){return this.id}} 메소드의 경우 this가 객체를 가리킨다 -사용가능

let array = [1,2,3,4,5];
//array.forEach((val)=>{console.log(val);});
array.forEach( val => console.log(val) );

array.forEach( (val, idx, array)=> {
    let msg = `${idx} : ${val} of ${array}`; // 백틱 - 템플릿 리터럴 띄어씌기도 잘됨
    console.log(msg)
})

const multi = (x,y) => x*y;
console.log(multi(10,5));