//execute_module.js
 // ./ 같은경로에 있는 파일 ../ -> 상위
const cal = require(`./calculator.js`); // exports 전부를 하나의 변수로 담아서 사용, exports 한것만 사용가능
const {add, mul} = require(`./calculator`);
console.log(add(10,5));
console.log(mul(10,5));

let result = cal.add(10,5);
console.log(result);

result = add(20,50);
console.log(result);