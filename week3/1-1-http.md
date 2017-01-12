<!-- page_number: true -->
# ![30%](images/img_white.png) 
# HTTP의 기초
<p align='center'>
CodeSquad Master <br>
Hoyoung Jung
</p>

---
<!-- page_number: true -->
# HTTP 

## HyperText Transfer Protocol, 초본문전송규약?

WWW 상에서 정보를 주고받을 수 있는 프로토콜이다. 주로 HTML 문서를 주고받는 데에 쓰인다. TCP와 UDP를 사용하며, 80번 포트를 사용한다.

![70%](images/w301.png)

---
<!-- page_number: true -->
# Web Client와 Server

![](images/w3-1.GIF)

엄청난 추상화가 되어 있는 그림


---
<!-- page_number: true -->
클라이언트: 주로 웹 브라우저로 항상 요청만 한다. 

서버: 클라이언트의 요청에 대해 적당한 문서를 제공해 준다. 

프록시: 클라이언트와 서버 사이에 존재. 무언가 일을 해 준다. 
	
* 캐싱, 필터링, 로드 밸런싱, 인증, 로깅 등의 다양한 기능을 수행  


---
<!-- page_number: true -->
 # HTTP의 특징
 - 간단
 - 확장 가능
 - 상태가 없다. = stateless
 - <b>세션은 존재 = 쿠키를 이용해</b>
 - HTTP1 --> HTTP/1.1 --> HTTP/2 로 발전 

---
<!-- page_number: true -->
# 실습1: node.js 서버 실행해 보기 

```javascript
//server.js
var http = require('http');
var url = require('url');

http.createServer(function (request, response) {
   console.log("url: " + url.parse(request.url).pathname);
   response.writeHead(200, {'Content-Type': 'text/html'});
   response.end('<h1>Hello World<h1>\n');
}).listen(8000);

console.log('Server running at http://127.0.0.1:8000/');

```

```bash
$ node server.js 
```

---
<!-- page_number: true -->

# node.js가 없는 경우 && mac 이라면 
```bash
$ git clone http://github.com/code-squad/white-common
$ cd white-common/week3
$ python -m SimpleHttpServer 8000
```

---
<!-- page_number: true -->

1. 웹 브라우저로 열어 보기

2. curl로 열어보기
```bash
$ curl 127.0.0.1:8000
```

---
<!-- page_number: true -->
telnet으로 열어 보기
$ telnet 127.0.0.1 8000
GET / HTTP/1.0 <kbd>enter</kbd>
Host: localhost:8000 <kbd>enter</kbd>
<kbd>enter</kbd> 한 번 더 누르기 

$ telnet 127.0.0.1 8000
GET /squad/ HTTP/1.0 <kbd>enter</kbd>
Host: localhost:8000 <kbd>enter</kbd>
<kbd>enter</kbd> 한 번 더 누르기 

---
<!-- page_number: true -->

```html 
HTTP/1.0 200 OK
Server: SimpleHTTP/0.6 Python/2.7.10
Date: Thu, 12 Jan 2017 07:57:37 GMT
Content-type: text/html
Content-Length: 161
Last-Modified: Thu, 12 Jan 2017 07:48:02 GMT

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Simple HTML Page</title>
  </head>
  <body>
    <h1>2nd Page: Squad</h1>
  </body>
</html>
Connection closed by foreign host.
```

---
<!-- page_number: true -->

웹 브라우저로 다시 열어 봅시다. 

개발자 도구의 네트워크 탭을 열고 새로 고침을 해 봅시다.


---
<!-- page_number: true -->
# HTTP 동작방식2

![](images/w302.png)

* 실제로는 DNS 서버가 개입한다. 

---
<!-- page_number: true -->
# HTTP Request 메시지의 구조

![](images/w303.png)


---
<!-- page_number: true -->
# HTTP Response 메시지의 구조

![](images/w304.png)

--- 
<!-- page_number: true -->
Good Luck! :star::star::star:
![50%](https://octodex.github.com/images/femalecodertocat.png)


---
<!-- page_number: true -->
# 브라우저의 동작
- 최초에는 HTML 을 가져옴
- HTML에서 CSS, js, 이미지에 대한 링크 정보를 추출
- 추출한 정보의 URL을 이용 새로운 요청을 보냄 
- 모든 웹 자원을 받아와서 렌더링 시작 
- 1.1 은 파이프라인, 2.0은 병렬처리로 성능개선 

---
<!-- page_number: true -->
# 웹의 구성요소
HTTP
HTML
URL

---
<!-- page_number: true -->
# URI = URL + URN

# URL: Uniform Resource Locator
리소스를 식별하는 주소 
> 스킴:사용자이름:비밀번호@호스트:포트/경로;패러미터?쿼리#프래그먼트 
```
https://honux77:pw1234@github.com:443/honux77/MMT?file=sum.py#30
```
- 쿼리: 편의상 =과 &를 사용한다. 
- 프래그먼트: 클라이언트만 사용 

---
<!-- page_number: true -->
# 포맷
MIME (Multipurpose Internel Mail Extensions) 타입으로 포맷을 분류 
원래는 전자 우편을 위한 표준 
```
Content-Type: text/plain
text/html
text/css
image/jpeg
image/png
audio/mpeg
audio/ogg
audio/*
video/mp4
application/octet-stream
multipart/mixed
```
- https://developer.mozilla.org/ko/docs/Web/HTTP/Basics_of_HTTP/MIME_types 


---
<!-- page_number: true -->
# TCP의 3-way Handshake
![](images/w305.png) 


---
<!-- page_number: true -->
# HTTP method
![](images/w306.png) 
주로 많이 사용: GET, POST

---
<!-- page_number: true -->
# GET VS Post
- GET은 URL 뒤에 쿼리스트링으로 패러미터를 전달
- POST는 요청 바디에 숨겨져 보내짐 
- form을 이용해서 대용량 파일을 전송하면?
- 구글 주소창에서 검색을 하면? 

---
<!-- page_number: true -->
# 추가로 알아야 하는 것들
- TCP / IP
- 소켓 통신
- 네트워크 기본 지식 
- 그림으로 배우는 HTTP & Network Basic 정도는 꼭 보자!


---
<!-- page_number: true -->

HTTP 응답 코드 

|상태코드 | 응답 | 의미 |
|------|------|--|
|200 | OK | 정상적인 처리|
|302| See Other | 주로 리다이렉트 용도|
|404| Not Found | 리소스가 없다 |
|403| Forbidden | 권한 없음 |
|500| Internal Server Error | 서버 내부 오류 |
|502| Bad Gateway | 중간 계층 오류 |
|503| Service Unavailable | 서비스 제공불가 |


---
<!-- page_number: true -->
# 로그인 상태란 어떤 상태일까? 

---
<!-- page_number: true -->
# 사용자 식별 - 인증을 위한 방법
- IP 추적
- HTTP Authentication
- URL에 식별자 포함
- Cookie 

---
<!-- page_number: true -->
# 쿠키 

![](images/w307.png)

---
<!-- page_number: true -->
# session

![](images/w308.png)


---
<!-- page_number: true -->
# Thanks :smirk:
![30%](http://xaharts.org/funny/i/gitopuss/github-octocat_yes-we-code.jpg)

---
<!-- page_number: true -->
# 더 공부하기
- www3.ntu.edu.sg/home/ehchua/programming/webprogramming/HTTP_Basics.html
- https://developer.mozilla.org/ko/docs/Web/HTTP/Overview 
- https://howdns.works/ep1/ 
- http://www.slideshare.net/deview/d2-campus-http 
-  http://www.kyobobook.co.kr/product/detailViewKor.laf?mallGb=KOR&ejkGb=KOR&barcode=9788931447897


---
<!-- page_number: true -->
# 쉬어가는 페이지 

CRLF - http://ohgyun.com/554
