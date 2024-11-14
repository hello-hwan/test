// 06_cypto.js

const crypto = require('crypto');
const data = 'pw1234';

let encData = crypto.createHash('sha512') //암호화 알고리즘 sha256은 해커
                    .update(data)
                    .digest('hex'); //출력 길이 base64: 64글자  , hex는 더 길게
// salt 기법 - 의미없는 랜덤값을 섞어버림 조금 더 강력한 보안
// 회원가입시 crypto 모듈로 단방향 암호화
console.log(encData);

// crypto.pbkdf2(password, salt, iterations 몇번 암호화할건지, keylen, digest, callback)