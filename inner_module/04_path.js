//04_path.js
console.log(__filename); // 단순경로는 모듈 사용안해도 전혀 상관없다
console.log(__dirname);

const path = require('path'); //패스 기반으로 디렉토리 정보같은거 가져올때
// 이메일로 확장자 .js인 파일 못보내도록 할수있다.
console.log('폴더정보', path.dirname(__filename));
console.log('실제 파일명: %s', path.basename(__filename));
console.log('확장자 : %s', path.extname(__filename));
console.log('경로구분자 : %s', path.sep);