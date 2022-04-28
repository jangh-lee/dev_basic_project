//http 모듈 가져오기
let http = require('http');

//웹 서버 객체 생성
let server = http.createServer();

//웹 서버를 8080포트로 오픈하여 client의 요청을 대기, 콜백함수로 console.log 시작
let port = 8080;
let host = '172.16.0.48';
server.listen(port, host, '5000', function() {
  console.log('웹 서버 시작! 포트 : %s, %d', host, port);
});


// port : listen하는 포트번호
// host : 접속을 허용할 ip 정보
// '5000' : backlog로 동시에 접속할 수 있는 연결 수
// function : 콜백함수 가능
