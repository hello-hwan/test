// 08_parameters.js
// 1) Default parameter
function say(message){
    if(message != undefined){// null은 개발자가 값을 초기화, undefined는 값이 명확하지 않을때
        console.log(message)
    }else{
        console.log('매개변수가 넘어오지 않았습니다.');
    }
}
say('Hello!!');
say();

function printMsg(message = '매개변수가 넘어오지 않았습니다.'){
    console.log(message);
}
printMsg('Hello!!');
printMsg();

// 2) Rest parameter 파라미터가 몇개인지 모를때
const plus = function(x,y,...rests){ // 변수 두개는 반드시 받고 추가적으로 받는 것은 rest에서 처리하겠다는 의미 
    let result = x+y;
    for(let rest of rests){ // let 자꾸 빠져서 오류뜸
        result += rest;
    }
    return result;
}
console.log(plus(1,2,3,4,5,6,7)); //28
console.log(plus(1,2,3,4)); //10
console.log(plus(1,2)); //3




