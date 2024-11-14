// mapper 인터페이스
const mysql = require('mysql'); // mysql 연결하는 모듈
// sql.js에 있는 module.exports 안에 있는 것들 다 불러오겠다.
// 현재는 customerList만 있으니까 그거만 불러올수있음
const sql = require('./sql.js'); 

// db와 어플리케이션이 연결되면 커넥션이라고 한다.
// server <-> db 쿼리문을 주고 받는 통로 : connection
// connection pool : db와 연결하는 connection을 모아두는 곳 (원래는 필요하면 연결, 아니면 끊음)
// => 클라이언트가 요청해도 몇개까지는 계속 db몫으로 남겨두고(connection pool) 나머지 중에서 연결해줌

//커넥션 연결
const pool = mysql.createPool({ // 경로를 구성하는 항목들 결정
    host : `localhost`, // ip 주소
    port : `3306`, // port번호 -고정
    user : `dev01`, // 계정
    password : `1234`, // 비밀번호
    database : `dev`, // 계정당 데이터베이스가 여러개라서 그중에 뭘쓴건지
    connectionLimit :10 // 내가 선점하고자 하는 connection pool, 만약 안되면 적게 5개라도 선점해둠, 독점은 안됨
}); // connection pool을 만들어두고 연결한다.

// 선택한 쿼리문을 실행할 객체 - 함수형태, 비동기작업이라서 Promise로
const query = (alias, values)=>{ // alias : customerList : sql.js 안에 등록해놓은 const customerList를 찾아감
    return new Promise((resolve,reject)=>{// Promise에서 작업결과를 기다렸다가 결과를 받게되면 성공, 실패를 처리해줘야됨
        let excuteSql = sql[alias]; // sql파일안에 있는 등록되어있는 쿼리문 출력
        console.log(excuteSql);

        // pool.query(sql,values, (err,result)=>{}) 실행했을때 에러가 나면 에러, 결과가 나오면 result로 반환
        pool.query(excuteSql,values,(err,results)=>{ // sql문, 값을 받아줄 values
            //실제로 실행한 결과를 반환
            if(err){
                console.log(err);
                reject({err}); // 실패 호출
            }else{
                resolve(results); //성공 호출
            }
        });
    }); // await랑 비슷
}

/*
마지막 시간에 배운거
값을 받을때
const query = (alias, values)=>{
    return new Promise((resolve,reject)=>{
        let excuteSql = sql[alias]; //01. sql['customerInfo']
        console.log(excuteSql);
        //02. values가 받은 값을 처리
        pool.query(excuteSql,values,(err,results)=>{ 
            if(err){
                console.log(err);
                reject({err}); 
            }else{
                resolve(results);
            }
        });
    });
}
*/

module.exports = {
    query
};