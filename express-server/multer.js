// 파일 업로드할때 사용하는 모듈(미디어파일)
// multer 사용시 한글깨짐, latin1 -> 이거를 utf8로 바꾸는 코드가 필요.
// filename안에다가 file.originalname = Buffer.from(file.originalname, 'latin1').toString('utf8') 이 한줄 맨 위에 추가
const multer = require('multer');
const path = require('path');

const express = require('express');
const app = express();

const storage = multer.diskStorage({ // 멀터 저장
  destination : function(req, file, cb){ // 저장소 : req.body-리퀘스트 바디, file-사용자가 넘겨준파일, cb-저장경로
    cb(null, 'uploads/'); // 프로젝트 파일안에 폴더 만들어서 거기에 저장하겠다.
  },
  filename : function(req, file, cb){ // 파일이름이 중복되어도 구분해야된다. 파일이름 앞에 시간 붙음
    file.originalname = Buffer.from(file.originalname, 'latin1').toString('utf8'); //한글로 바꾸는 코드, 인터넷검색
    cb(null, new Date().valueOf() + path.basename(file.originalname)); // 시간 - (밀리, 마이크로 초 )기반으로 식별
  }
});

const upload = multer({ storage : storage });
// 라우팅
// req의 내부를 깨서 미디어 파일은 멀터가 처리( 받아서 저장-upload.(single)또는 (array)-최대값있음 )
// 나머지는 개발자가 콜백함수로 처리 (req,res)=>{}
app.post('/profile', upload.single('avatar'), (req, res)=>{ // name속성 : avatar
  console.log(req.file);
  console.log(req.body);
});

// upload.array-최대 ('photos', 12) 12개까지 )
app.post('/photos', upload.array('photos', 12), (req,res)=>{ // name속성 : photos
  for(let file of req.files){
    console.log(file);
  }
});

app.listen(5000, ()=>{
  console.log('Server Start!!');
});




