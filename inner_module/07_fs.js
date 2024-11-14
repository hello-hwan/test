// 07_fs.js

const fs = require('fs');

const data = 'Hello, World!!';
//한글은 기본적으로 인코딩 타입을 utf-8로 설정
fs.writeFile('./sample.txt', data, 'utf8',(err)=>{
    //콜백함수를 지정하여 
    if(err){
        throw err;
    }
    console.log('파일쓰기 완료!');
}); 

fs.readFile('./sample.txt','utf16',(err,result)=>{
    // ./sample.txt를 위에서 사용하고 있어서 작업이 다 끝나고 사용을 할수가 있다.
    // utf8로 인코딩했으면 디코딩도 utf8로 해야됨. 
    // utf16le로 디코딩하면 이상한 값 나옴
    if(err){
        throw err;
    }
    console.log(result);
})

console.log(`작업종료`);