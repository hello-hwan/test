//01_console_class.js
const fs = require('fs');
const {Console} = require('console');

// 파일 위치
const logOutput = fs.createWriteStream('./logs/stdout.log');
const errOutput = fs.createWriteStream('./logs/stderr.log');

//
const logger = new Console({stdout: logOutput, stderr: errOutput});

let count = 5;
logger.log('count : %d', count);
logger.error(`count : ${++count}`);