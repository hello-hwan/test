//03_process_os.js
const process = require('process'); // require없이도 쓸 수 있지만, 명시적으로 표시되는게 좋아서 쓸것.
const os = require('os');

//console.log(process.env); //APPDATA : 임시저장, JAVA_HOME: 환경변수 경로, OS : 운영체제
//Path:JAVA_HOME 경로로 되어 있어야 jdk 버전을 옮기거나 할때 좋다. 
console.log(process.env.JAVA_HOME);

console.log(os.cpus()); // CPU 코어 정보
console.log(os.tmpdir()); //임시 저장 경로