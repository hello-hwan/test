// 07_Destructuring.js
// 1) Object -대부분
let person = {
    firstName : "John",
    lastName : "Doe",
    age : 37,
    email : "john@gmail.com",
    country : "USA"
};

let {lastName, email} = person; // 단순변수가 아닌 객체 내부의 필드값을 가져오는 변수
// {}로 변수 선언하면, 반드시 안에는 필드를 구성하는 필드명을 정확히 써주어야한다.
console.log(lastName);
console.log(email);

function getFullName({firstName, lastName}){
    console.log( `${lastName}, ${firstName}`);
}

getFullName(person);
// 2) Array

let scores = [70, 80, 90];
let [a,b,c] = scores; // 배열은 인덱스라서 그냥 순서만 중요 
console.log([a,b]); // 무조건 순서대로 70, 80들어오고 90은 버려짐
// 무조건 전부다 받은 후에 골라서 사용할 것. 

console.log(a);
console.log(b);
console.log(c);



