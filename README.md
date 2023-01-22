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
사이드 프로젝트 코어타임 진행
    - 사이트(https://www.monstercat.com/music) 퍼블리싱중 슬라이드배너 관련 js에서 여러가지 막힘이 있었다(DOM API 조작).
    - 이에따라 부족하다고 느끼는 부분들을 2023-01-26일 12시까지 진행하기로 했다.
        1. 아직 미완성된 퍼블리싱 진행
        2. 수업시간에 강사님이 내주신 work.html을 다시한번 풀어보기(DOM 조작)
        3. JS개념에 대해서 이해가 아직 잘 되지 않는다고 느끼는 부분 각자 맡아서 공부한뒤 설명할 수 있도록 공부해오기
            구현서 - axios
            이주람 - DOM
            김나실 - 반복문
            장영승 - 함수
        
19:00 ~ 23:30
work.html 풀이 완료

---------------------------------------------------------------

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

---------------------------------------------------------------

## 2023-01-21

콜백함수, 프로미스 복습
비동기 처리를 따로 연습하지 않았기 때문에 비동기적으로 데이터 통신을 할 때 이해할 수 있도록 복습 진행

---------------------------------------------------------------

## 2023-01-22

async&await
반복문 총정리
화살표함수(arrowfunction)

다음주 페어시간에 공유할 내용들에 대하여 공부
아는 내용이지만 아는건 확실하게, 헷갈리고 몰랐던 부분들 짚어가면서 정리했다
특히 화살표함수에서는 this바인딩이 그냥 함수와는 다르기 때문에
무작정 화살표함수를 쓰면 안된다라는 사실을 깨달음(함수 정의같은건 화살표함수를 사용하지 않음)