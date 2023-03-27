# YoungSeung

## 2023-01-17

리액트 복습(https://www.youtube.com/watch?v=6GECT2Jrr_g) 유튜브 참조

복습내용
React는 CSR(Client Side Rendering), SPA (Single Page ApPlication) 의 대표적인 예시
SPA이기 때문에 React에는 하나의 html만 존재한다. (public폴더 안의 index.html)
index.html의 <div id="root"></div> 를 통해 컴포넌트를 보여준다.
index.js는 App.js를 index.html의 root에 전달(랜더링)해준다.
App.js에서는 라우팅 설정을 해준다.
(경로를설정해주는것, html의 a태그 처럼 <Link to="">를 사용)

## 2023-01-19

13:00 ~ 17:30
사이드 프로젝트 코어타임 진행 - 사이트(https://www.monstercat.com/music) 퍼블리싱중 슬라이드배너 관련 js에서 여러가지 막힘이 있었다(DOM API 조작). - 이에따라 부족하다고 느끼는 부분들을 2023-01-26일 12시까지 진행하기로 했다. 1. 아직 미완성된 퍼블리싱 진행 2. 수업시간에 강사님이 내주신 work.html을 다시한번 풀어보기(DOM 조작) 3. JS개념에 대해서 이해가 아직 잘 되지 않는다고 느끼는 부분 각자 맡아서 공부한뒤 설명할 수 있도록 공부해오기
구현서 - axios
이주람 - DOM
김나실 - 반복문
장영승 - 함수

19:00 ~ 23:30
work.html 풀이 완료

---

다 알고있던 부분들이 몇주동안 하지 않았더니 기억이 나지않는다. 아는부분이라고 넘기지 않고 꾸준히, 지속적으로 공부해야 한다는 것을 다시한번 느꼈다.
반성하는 의미로 바로 work.html을 바로 끝내버렸다.

## 2023-01-20

코어타임 진행
리액트 개념에 대하여 정리
리액트 폴더의 구조 및 기능(index.html, index.js, App.js 등등)
CSR, SSR의 차이

코드페스티벌 문제 풀이(11번~30번)
백준 코테문제 풀이를 한동안 꾸준히 풀었던지라 문제들이 어렵진 않지만
사용하지 않았던 js문법들에 대해 다시 정리하면서 풀이진행

리액트 예제 직접 만들기(https://blog.naver.com/sw_maestro/222873554931)
항상 느끼지만 개념적인 부분을 계속 이해하려고 하기보다 한번 해보는것이 실력향상에 큰 도움이 됨
아직 배우지 않은 useState, 변수 넘기기? 등등 간단한 예제를 통해 예습 복습 및 예습 진행

---

## 2023-01-21

콜백함수, 프로미스 복습
비동기 처리를 따로 연습하지 않았기 때문에 비동기적으로 데이터 통신을 할 때 이해할 수 있도록 복습 진행

---

## 2023-01-22

async&await
반복문 총정리
화살표함수(arrowfunction)

다음주 페어시간에 공유할 내용들에 대하여 공부
아는 내용이지만 아는건 확실하게, 헷갈리고 몰랐던 부분들 짚어가면서 정리했다
특히 화살표함수에서는 this바인딩이 그냥 함수와는 다르기 때문에
무작정 화살표함수를 쓰면 안된다라는 사실을 깨달음(함수 정의같은건 화살표함수를 사용하지 않음)

---

## 2023-01-23

배열 내장함수, 고차함수 문제&풀이 / 구조분해할당

배열은 평소에도 많이사용했기때문에 크게 어려운 부분은 없었다.
배열 고차함수쪽은 findIndex말고는 잘 사용은 안했던거같은데
문제 내보고 풀어보면서 맵과 필터를 다시한번 사용하면서 다시 익혀보았다.

---

## 2023-01-24

Monstercat 퍼블리싱
LATEST RELEASE, OUR BRANDS 이미지 정도 제외하곤 전부 진행하였다.
특히 슬라이드배너부분을 DOM 활용을 하여 조금 다른 방식으로 만들었는데,
생각보다 너무 잘된거같아 굉장히 뿌듯하다.
역시 개념하나하나 보면서 이해하는거보다 그냥 직접 부딫히면서 안되는 부분을
계속 잡고늘어지면서 해결하는것이 실력향상에 큰 도움이 된거같다.

---

## 2023-01-25

axios, DOM 조작

axios는 서버로부터 데이터를 받아오기 위해 사용하는데 이해가 잘 되지않는다.
많이 다뤄보지 않아서겠지만, https://axios-http.com/kr/docs/intro 강사님이 말씀해주신
페이지를 봐도 뭔가 와닿는 느낌이 오질 않는다. 반복적으로 보고 어느정도 이해가되면
직접 예제를 통해 데이터를 받아와봐야겠다

DOM은 어제 퍼블리싱 하면서도 많은 도움이 됐지만, 반복적으로 하지 않으면 잊혀질까봐
동적인 요소들을 어떻게 조작을하여 만들 수 있는지 계속 생각해보고있다.

---

## 2023-03-23

useInfiniteQuery, intersection-observer를 활용하여 무한스크롤링을 구현했다.
기존에 TodayDiary(오늘의 일기) 토이프로젝트에서도 구현한 경험이 있었지만,
그 때는 useEffect를활용하여 observer가 해당 태그를 감지할 때 axios요청을
하도록 설계하였는데 useInfiniteQuery를 사용할경우, 두번째 매개변수로 콜백함수를 받는데,
pageParam이라는 속성을 활용하여 초기 값을 설정해주고, axios요청을 한뒤에,
getNextPageParam을 통해 다음 페이지를 불러올 수 있도록 설정이 가능하다.
이외에 getPreviousParam을 통해 이전 페이지를 불러오는것도 가능하고 확실히
react-query를 사용하니 한층 편해지는게 느껴진다

## 2023-03-26

영화API 마무리
처음으로 git활용 협업을 해보았다. 처음엔 conflict도 굉장히 많고 git에대한 어려움이 많이
있었는데 몇번 그과정을 거치다보니 생각보다 할만했다. 완벽했던 프로젝트는 아니지만, 최종프로젝트를
하기위한 준비는 어느정도 된거같다
