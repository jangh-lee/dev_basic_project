//http 모듈 가져오기
let http = require('http');

//웹 서버 객체 생성
let server = http.createServer();

//웹 서버를 8080포트로 오픈하여 client의 요청을 대기, 콜백함수로 console.log 시작
let port = 8080;
server.listen(port, function() {
  console.log('웹 서버 시작! 포트 : %d', port);
});

//클라이언트 연결 이벤트
server.on('connection', fucntion(socket) {
  let addr = socket.address();
  console.log('클라이언트 접속 : %s, %d', addr.address, addr.port);
});


// 클라이언트 요청 이벤트 처리, html로 응답 표시
server.on('request', function(req, res) {
  console.log('클라이언트의 요청');
  console.dir(req);
  
  res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
  res.write("<!DOCTYPE html>");
  res.write("<html>");
  res.write("  <head>");
  res.write("    <title>응답 페이지 </title>");
  res.write("  </head>");
  res.write("  <body>");
  res.write("    <h1>응답 본문입니다. </h1>");
  res.write("  </body>");
  res.write("</html>");
  res.end();
});

//서버 종료 이벤트
server.on('close', function(){
  console.log('서버 종료');
});

