// 프로젝트 파일 작성할 폴더생성
//npm init, npm install (express)
// 보통 시작점은 app.js로 만들어둠
const fs = require('fs'); // 파일시스템 모듈:  data.json을 처리 
const express = require('express'); // 1. 모듈 생성
const server = express(); //2 . 객체생성

const userRouter = require('./router/user.js'); // 2-1 라우터 모듈 등록 - 
server.use('/user', userRouter); // 대표경로 지정 - user.js 안에서는 루트경로로 지정, 여기서 한번더 지정

// 3-1 경로등록 경로를 여러개 등록할수 있음
server.use('/img', express.static('./images')); // 폴더이름은 images지만 경로는 img로 등록됨 - images 쓰면 실행안됨
// express.static : 경로에 있는거 통째로 들고옴 -> 폴더 있으면 폴더를 경로로 써서 안에있는 파일도 들고올수있음

// 3-2 에러 처리
server.use(function(err,req,res,next){ // 상태코드는 500번 - 서버내부에러
    res.status(500).json({statusCode : res.statusCode,
                          errMessage : err.message});
});

server.get('/error', (req,res,next)=>{
    next(new Error('Process Fail! Check Date!'));
});


// 2-2 미들웨어 등록 - express 기반
server.use(express.json()); // express의 json파싱 기능 등록 : 모든 라우팅에서 정상동작

// 5. DB설정
// DB가 아니라 파일이라서 동기식으로 해야 읽기전에 출력하는거 막을수있음
// 실제로는 DB를 별도 파일로 처리하는게 많음
const jsonFile = fs.readFileSync('data.json');
// 단순 문자열(String)이라서 객체와 배열로 변환.
// parse : 제이슨을 객체, 배열로 변환시킬때 쓰는 메소드 fetch안에 있는 then(res => res.json() <- 이거랑 동일 )
const jsonData = JSON.parse(jsonFile);

// crud : 문자, target : 객체, 등록-수정할때 사용하는거 , where 객체, where절
const query = (crud, target, where = null)=>{
    let result = null;

    let emps = jsonData;
    switch(crud){
    // 조회
    case 'SELECT' :
      result = (where == null) ? emps :  emps.filter(emp => {
        return findEmp(emp, where);
      });
      break;
    
    // 등록 Content-type 필요
    case 'INSERT' :
      emps.push(target);
      break;
    // 수정 Content-type 필요
    case 'UPDATE' :
      emps.forEach(emp => {
        if(findEmp(emp, where)){
          for(let field in target){ // for in : 객체를 순환, for of : 배열을 순환하는 함수
            emp[field] = target[field];
          }
        }
      });
      break;
    // 삭제
    case 'DELETE' :
      let selected = null;
      emps.forEach((emp, idx) => {
        if(findEmp(emp, where)){
          selected = idx;
        }
      }); // 반복문에서 삭제하면 오류 발생
  
      emps.splice(selected, 1);
      break;
    }
    return result;
  };
  
  function findEmp(emp, where){
    let fieldNum = 0; // 총 검색조건 갯수
    let selected = 0; // true인 검색조건 갯수
    for(let field in where){
      fieldNum++;
      if(emp[field] == where[field]){
        selected++;
      }
    }
    return (fieldNum == selected); // 검색조건과 true갯수가 같아야만 리턴
  }

server.listen(3000, ()=>{
    console.log('Server Start');
    console.log('http://localhost:3000'); // 서버 오픈후에 정상적으로 실행되는지 확인해볼것.
}); //3. 서버오픈 -포트번호는 아무거나, ()=>{ 서버 실행했을때 할 작업 } 

// 4. 루트경로 - 누구나 접근할수 있도록 GET 메소드 사용 (메인페이지)
server.get('/', (req,res)=>{
    //res.send('Server Connect!'); // send : 다양한 데이터 타입으로 응답을 전송, 전송하면 끝
    // 서버당 하나만 터미널 실행, 포트 충돌나면 오류뜸
    res.sendFile('여름방학특강.html', {root : __dirname});
});

//data.json 파일
//전체조회 : GET , url=emps ('http://localhost:3000/emps')
server.get('/emps',(req,res)=>{
    //res.send(jsonData);
    res.send(query('SELECT'));
});

//단건조회 : GET , url=emps/:id (express에서는 콜론으로 구분) ('http://localhost:3000/emps/10')
//- 값을 받는 위치 지정 - :id= 스프링의 pathvariable 경로 변수)
server.get('/emps/:id', (req,res)=>{ //'/emps/:id/:pwd/:name'
    //res.send('Emp Info');
    /*
    req.params => pathvariable
    req.body   => JSON
    req.query  => QueryString
    */
    res.send(query('SELECT', null, {id: req.params.id}));
});

//등록 : POST , url=emps
//chrome boomerang extension 두번째 꺼 크롬에 추가, 실행후 new request,  포스트맨은 설치후 사용가능해서 패스
server.post('/emps',(req,res)=>{
    console.log(req.body);
    //res.send('Emp Insert');
    res.send(query('INSERT', req.body));
});

//수정 : PUT , url=emps/:id
server.put('/emps/:id', (req,res)=>{
    //res.send('Emp Update');
    res.send(query('UPDATE', req.body, {id : req.params.id}));
});

//삭제 : DELETE , url=emps/:id
server.delete('/emps/:id', (req,res)=>{
    res.send(query('DELETE', null, {id : req.params.id}));
})
/*
Content-type 

1) application/x-www-form-urlencoded
=> QueryString(질의문자열) : key=value&key=value&...
=> req.query 속성: GET
=> req.body 속성 : POST

2) application/json
=> JSON : {객체} or [배열]
=> req.body

3) pathvariable = Content-type이 없다. 그냥 url 구성요소로 인식
=> req.params 속성

--multipart form-data 인코딩없이 보낼때
*/