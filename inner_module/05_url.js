// 05_url.js
const url = require('url');

let whatwg= new URL('https://user:pass@sub.expamle.com:8080/p/a/t/h?query=string#hash');
// URL 객체로 주소창의 내용에 쉽게 접근
console.log(whatwg);
let datas = whatwg.searchParams; //데이터 타입 : URLSearchParams,  forEach 사용가능
datas.forEach((val,key)=>{
    console.log(key,val);
})

// searchParams : fetch사용할때 필요 주소창에 ?뒤에 붙으면 데이터, 그 형식이 searchParams
// content-type : apllicaion/x-www-form-urlencoded
// content-type : application/json
// content-type : multipart/form-data
/*
URL {
  href: 'https://user:pass@sub.expamle.com:8080/p/a/t/h?query=string#hash',
  origin: 'https://sub.expamle.com:8080',
  protocol: 'https:',
  username: 'user',
  password: 'pass',
  host: 'sub.expamle.com:8080',
  hostname: 'sub.expamle.com',
  port: '8080',
  pathname: '/p/a/t/h',
  search: '?query=string',
  searchParams: URLSearchParams { 'query' => 'string' },
  hash: '#hash'
}
  */