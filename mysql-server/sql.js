// mapper.xml이랑 동일한 역할 
//sql.js - sql문을 모아둘 파일, ` ` 백틱사용 - 줄바꿈 가능
//전체조회
const customerList = //customerList를 exports에 넣을거임
`select id 
        , name 
        , email 
        , phone 
        , address 
 from customers 
 order by id`;

//단건조회
const customerInfo =
`select id 
        , name 
        , email 
        , phone 
        , address 
 from customers 
 where id = ?`; // 아이디가 들어가는 단일값 타입은 숫자

//등록 -SET 절에는 객체타입을 넣는다.
const customerInsert=
`insert into customers
 set ?`; // ?에다가 { name = "Hong", phone = "010-1234-5678" }
// 이름=m, 전화번호=1, 성=s 쌍으로 필요 => 타입은 객체로 만들어서 넣어야됨

/*
mysql에서는 insert문에 values 대신 set으로 할수도 있다.
insert into dev.customers
set name = "Hong", phone = "010-1234-5678";
*/

//수정 - SET절에는 객체타입을 넣는다
const customerUpdate=
`update customers
set ?
where id = ?`; 

//[ { "Hong", phone = "010-1234-5678" }(첫번째값), 1(두번째값)]
//set절에는 객체, id값에는 숫자 =>여러개의 데이터타입=> 배열로 담아야됨

//삭제
const customerDelete=
`delete from customers
where id =?`; // 단일값

// 모듈 : 하나의 파일을 여러개로 쪼개서 각각 독립된 공간으로 인식
// app, mapper에 const 변수로 mysql을 만들어 두고 모듈로 넣어도
// 충돌안남 => 파일이 분리(공간이 완전히 별개)


/*
1) ?의 갯수 => 1개: 단일 값, 2개이상 : 무조건 배열

2) ?앞에 컬럼의 유무 
=> 컬럼명 id(name, phone, email) = ? : 기본 데이터 값 문자,숫자,날짜등
=> 컬럼 없으면 set ? : 무조건 객체
*/

module.exports={
    customerList // 전체조회 
    , customerInfo
    , customerInsert
    , customerUpdate
    , customerDelete
};

