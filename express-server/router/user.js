// router/user.js - 계정관련 기능 추가
const express = require('express'); // 독립된 공간이라서 app.js랑 공유안됨
const router  = express.Router();

// /user(app.js에서 설정) + / => /user/
router.get('/', (req,res)=>{ // 라우터 안에서는 그냥루트로 두고 진행 -> 권한부여가 쉽다.
    res.send('회원 정보 조회');
});

// /user(app.js에서 설정) + /insert => /user/insert
router.post('/insert', (req,res)=>{
    res.send('회원등록');
});

module.exports = router;
//여기가 종료, 그 뒤에 작성하면 코드가 안넘어감



