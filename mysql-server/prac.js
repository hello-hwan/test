//sql.js
const customerList = `쿼리문`;

module.exports = {
    customerList
};

//mapper.js
const mysql = require('mysql');
const sql = require('./sql.js');

const pool = mysql.createPool({
    host : `아이피`,
    port : `3306`,
    user : `dev01`,
    password : `비번`,
    database : `dev`,
    connectionLimit :10 
});

const query = (alias, values)=>{
    return new Promise((resolve,reject)=>{
        let excuteSql = sql[alias];
        console.log(excuteSql);
        pool.query(excuteSql,values,(err,results)=>{
            if(err){
                console.log(err);
                reject({err});
            }else{
                resolve(results);
            }
        })
    })
}

module.exports={
    query
};

