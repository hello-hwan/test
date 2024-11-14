//calculator.js
// 간단한 사칙연산 기능을 가진 모듈
const defaultNum = 1;

function add(x,y){
    return x + y;
}

function minus(x,y){
    return x- y ;
}

function multi(x,y){
    return x * y ;
}

function divide(x,y){
    return x / y ;
}

// 해당 모듈안에서는 4칙연산 전부 있지만 외부에서 접근하면 add, multi 두개밖에 못씀
module.exports = { // 객체값을 가짐 -대괄호x 
    add, // "add" : add => key와 값이 같으면 그냥 add로 써도 변수, 함수로 인식함
    "mul" : multi // key와 값이 다르면 변수는 mul, 함수는 multi로 인식함
}; // 자바 스크립트는 import 하면 연결해서 사용하는게 아니라 독립된 공간을 갖고있다.