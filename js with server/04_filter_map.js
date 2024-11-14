// 04_filter_map.js -- 원본데이터는 안건드림

let persons = [
    {name : "유재석", point : 78, city : "서울"},
    {name : "김종국", point : 92, city : "서울"},
    {name : "양세찬", point : 76, city : "제주"},
    {name : "하하", point : 81, city : "서울"},
];

// 1) filter, 원본배열이 가지는 데이터 타입과 같음, 배열의 크기가 줄어들 가능성 있음
let scores = persons.filter(function(val,idx){
    return val.point > 80;
});
console.log(scores);

// 2) map, 원본배열과 데이터 타입이 다를수 있음, 배열의 크기는 동일 - 
// 새로운 객체를 만들어서 리턴할 것 return val 이렇게 하면 원본파일이 수정됨
let newList = persons.map(function(val,idx){
    val.no = (idx+1) * 100;
    return val; // 기존 주소는 그대로 가져오면서 추가로 삽입됨
    // 배열이 아예 바뀌어 버림
});

/*
let newList = persons.map(function(val,idx){ // 콜백 함수 - 함수내부에서 호출 -> 함수결과x , 함수 그 자체가 넘어감
    return {
        no : ((idx+1) * 100),
        name : val.name,
        city : val.city
    }// 새로운 배열이 가지는 값 - 기존에 있는 건 안건드리고 새로운 객체를 만들어서 추가로 배열 생성
});
*/
// 콜백함수 : filter , map, sort, ajax 등등 함수 자체를 넘겨주는거
console.log(newList);
console.log(persons);

