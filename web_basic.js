//http 모듈 가져오기
let http = require('http');

//웹 서버 객체 생성
let server = http.createServer();

//웹 서버를 8080포트로 오픈하여 client의 요청을 대기, 콜백함수로 console.log 시작
let port = 8080;
server.listen(port, function() {
  console.log('웹 서버 시작! 포트 : %d', port);
});
