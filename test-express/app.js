const express = require('express'); //express 모듈 호출
const app = express(); // 

// 서버가 제공하는 서비스
app.get('/', (req,res)=>{ // request, response
    res.send('Server Connect'); // 서버가 클라이언트로 제공하는 내용
});

app.listen(3000, ()=>{ // 서버가 실제로 실행되는 작업, 비어있는 포트를 아무거나 선택 + 콜백함수
    console.log('서버가 실행됩니다.');
    console.log('http://localhost:3000');
})




