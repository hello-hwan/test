// middleApp.js
const express = require('express');
const cors = require('cors');
//11-14
const session = require('express-session');

const app = express();

//모든 요청에 응답
//app.use(cors()); // cors를 등록만 하면 모든 요청에 응답
// cors에 아무런 조건을 안 두면 모든 요청에 응답한다.
// 결제 api를 사용하면 토큰을 발급해서 그 토큰으로 확인한다.
// express랑 vue두개의 서버로 만든다.

//지정한 요청에 대해서만 응답
const corsOptions = {
    origin :'http://192.168.0.5:5500', // vscode 5000번 포트 , 프로토콜 + url + 포트 : origin
    optionSuccessStatus :200 //성공시 200
}
app.use(cors(corsOptions));

// application/x-www-form-urlencoded - 통신의 가장 기본 content-type, method에 따라서
// 멀티미디어(크기가 초과), 제이슨 파일(body필요)은 get방식으로 못넘김 위에 있는 타입으로 넘겨야됨
app.use(express.urlencoded({extended :false})); // json은 express.JSON

app.post('/info', (req,res)=>{
    res.send(`keyword:${req.body.search}`);
});

app.listen(3000, ()=>{
    console.log('http://localhost:3000');
});

//11-14
let sessionSetting = session({
    //secret:'secret key', // 암호화 키
    secret:'#@#R!EDxadD', // 의미없는것이 더 낫다
    resave : false, // 자원소모가 있어서 false로 한다.
    saveUninitialized : true, // login 유무에 따라 세션에 정보저장 하기전에도 세션을 열어둘 것인가.
    // 로그인 기록이 남아있으면 그것으로도 쓸 일이 많아서 true로 한다.
    cookie: { //cookie 기반으로 클라이언트도 가져가는 정보가 있다.
        // 브라우저에 있는 쿠키정보는 보안안됨
        httpOnly : true, // 접근을 막음
        secure : false, // 보안을 좀 더 강화함
        maxAge : 60000 // 쿠키의 유효기간 : 기본값은 짧음, 만료되면 자동삭제
    }
});

app.use(sessionSetting); // express-session 미들웨어 등록 -> 안하면Cannot set properties of undefined

app.post('/login',(req,res)=>{
    const {id, pwd} =req.body; 
    // {id : 'Hong', pwd : '1234'}, 바디는 객체를 가짐.
    req.session.user = id; // session에 값을 저장할건데, 어떤 형태로 저장할거냐? user로 저장하겠다.
    req.session.pwd = pwd;
    req.session.save(function(err){ // session(속성)은 변수가 아니라서 반드시 save 해줘야됨
        if(err) throw err; // 에러처리해라.
        res.redirect('/'); // main으로 돌아가라.
    })
})

app.get('/', (req,res)=>{
    res.send(req.session); // req.session에 가진 모든 값을 다 클라이언트로 보내줘라.
});

app.get('/logout', (req,res)=>{
    req.session.destroy();
    res.redirect('/');
});



