// express 모듈을 불러옵니다. express는 Node.js에서 가장 많이 사용되는 웹 프레임워크 중 하나입니다.
const express = require('express');

var cors = require('cors')

// express 애플리케이션 객체를 생성합니다.
const app = express();

// 웹 서버가 리스닝할 포트 번호를 정의합니다. 여기서는 3000번 포트를 사용합니다.
const port = 3000;

app.use(cors())
 

// CORS란?
// CORS(Cross-Origin Resource Sharing)는 웹 사이트가 다른 웹 사이트의 리소스를 요청할 때 발생하는 문제를 해결하기 위한 방법이에요.
// 예를 들어, 당신의 웹 사이트가 abc.com이고, 다른 웹 사이트 xyz.com에 있는 데이터를 가져오려고 하면 브라우저는 보안 때문에 이를 막아요. 왜냐하면 서로 다른 도메인에서 데이터를 주고받는 것이 보안에 위협이 될 수 있기 때문이죠.


// 포트가 충돌이 날 경우에는 임의로 아무거나 설정가능
// const port = 8800;












// HTTP GET 요청을 처리할 라우트를 정의합니다. 
// 사용자가 '/' 경로로 요청을 보내면, 'Hello World' 문자열을 응답으로 보냅니다.
app.get('/', function (req, res) {
  res.send('Hello World'); // 응답으로 'Hello World'를 보냅니다.
});


// // read 대신 json 써도됨.
// app.get('/dog', function (req, res) {
//   res.json({'sound':'멍멍'}); // 응답으로 'Hello World'를 보냅니다.
// });

// app.get('/cat', function (req, res) {
//   res.json({'sound': '야옹'}); // 응답으로 'Hello World'를 보냅니다.
// });


// JSON의 특징
// 간단한 구조: 데이터를 키-값 쌍으로 나타내요. 예를 들어, {"sound": "야옹"} 이런 식이죠.

// app.get('/user/:id', function (req, res) {
//   const q = req.params
//   console.log(q); 

//   res.json({'sound': '짹짹'});

// });



// app.get('/user/:id', function (req, res) {
//   const q = req.params
//   console.log(q.id); 

//   res.json({'userid': q.id}); 
// });



// query 방식
// app.get('/user/:id', (req, res) =>{
// const q = req.query
// console.log(q)

// res.json({'userid': q.id});
// })

// http://localhost:3000/user/asdf?q=imcoding&name=im&gender=male
// { q: 'imcoding', name: 'im', gender: 'male' }




// app.get('/user/:id', (req, res) =>{
//   const q = req.query
//   console.log(q.q)
//   console.log(q.name)
//   res.json({'userid': q.name});
//   })


//   요약
// params: 경로의 일부로 사용되며, req.params를 통해 접근합니다. 주로 리소스를 식별하는 데 사용됩니다.
// query: 경로의 끝에 ?로 시작하여 &로 구분된 키-값 쌍으로 추가되며, req.query를 통해 접근합니다. 다양한 검색 조건이나 옵션을 전달하는 데 사용됩니다.



// // POST 방식

// app.post('/user/:id', (req, res) => {
//   const p = req.params;
//   console.log(p)
//   const b = req.body;
//   console.log(b);
//   res.send({ 'message': 'User created successfully' });
// });




//  <중요>
// // 클라이언트가 /sound/:name 경로로 GET 요청을 보냅니다.
// // 서버는 URL에서 name 매개변수를 추출합니다.
// // 서버는 추출한 name 매개변수를 콘솔에 출력합니다.
// // 서버는 JSON 응답 {'sound': '멍멍'}을 클라이언트에게 보냅니다.
// app.get('/sound/:name', (req, res) => {
//   const {name} = req.params
//   console.log(name)


//   res.json({'sound':'멍멍'})

// }  )




app.get('/sound/:name', (req, res) => {
  const { name } = req.params
  
  if(name == "dog") {
    res.json({'sound':'멍멍'})
  } else if(name == "cat"){
    res.json({'sound':'야옹',})
  } else if(name == "bird"){
    res.json({'sound':'짹짹'})
  } else {
    res.json({'sound':'알수 없음'})
  }
})

// 고양이 이미지도 넣고 싶다면  res.json({'sound':'야옹','img':'주소'})







// 애플리케이션이 지정한 포트에서 리스닝을 시작합니다. 
// 리스닝이 시작되면 콘솔에 메시지를 출력합니다.
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`); // 포트에서 리스닝 중임을 알리는 메시지를 출력합니다.
});


// port : 선착장 같은 개념! 1번 선착장, 2번 선착장
