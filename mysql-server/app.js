//app.js
const express  = require('express');
const app = express();
const mysql = require('./mapper.js');

// content-type : application/json
app.use(express.json());

app.listen(3000, ()=>{
    console.log('Server Start!!');
    console.log('http://localhost:3000');
});

//전체조회 - 경로는 동일, 메소드로 구분
// 나중에 회원이면'/members', 상품이면 '/products'
app.get('/customers',async (req,res)=>{ //조회 :get
    let list = await mysql.query('customerList'); // promise는 비동기 작업, 그래서 await async로 동기적으로 반환
    res.send(list);
});

//단건조회 '/customers/1', 하나만 와도 select는 배열안에 객체넣어서 넘어옴
app.get('/customers/:id', async (req,res)=>{
    //경로가 가진 1을 처리하는게 req.params고 여기서 id를 처리함
    let selected = req.params.id; 
    let info = (await mysql.query('customerInfo',selected))[0];
    // await 를 다 감싸서, 배열중에 첫번째 값만 가져오겠다.
    // 배열을 깨서 그안에 객체를 끄집어낸다.
    res.send(info);
});

//등록 - sql,js 쿼리문에 set ? 라서 무조건 객체로 넘겨줘야됨
app.post('/customers', async (req,res)=>{
    //req.body 속성 - application/x-www-form-urlencoded or application/json
    // app.use(express.json()); 이거라서 무조건 제이슨
    let newObj = req.body; // 얘는 boomerang raw에 적은 그대로 들어감
    console.log(newObj);
    let info = await mysql.query('customerInsert',newObj);
    res.send(info)
});


/*
boomerang에 등록된 값
{
  "fieldCount": 0,
  "affectedRows": 1, => 영향받은 행 숫자
  "insertId": 62, => 추가된 ID 숫자
  "serverStatus": 2, => 서버 상태
  "warningCount": 0,
  "message": "",
  "protocol41": true,
  "changedRows": 0  => 변경된 행 숫자
}
*/


//수정
app.put('/customers/:id',(req,res)=>{
    
});

//삭제 단건조회랑 필요한 ?는 똑같고 쿼리만 다름
app.delete('/customers/:id',async (req,res)=>{
    let selected = req.params.id; 
    let info = await mysql.query('customerDelete',selected);
    res.send(info);
});

/*
삭제 되고 난 후에 boomerang에서 실행된 값
{
  "fieldCount": 0,
  "affectedRows": 1, => 영향받은 행 숫자
  "insertId": 0,
  "serverStatus": 2, => 이거는 서버가 실행되었다는 뜻
  "warningCount": 0,
  "message": "",
  "protocol41": true,
  "changedRows": 0 => 바뀐 행 숫자
}
*/
//주석 추가