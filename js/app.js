// app.js

// 현재 시간을 나타내는 Date 객체 생성
const currentDate = new Date();

// 목표 날짜(2023년 12월 24일 오후 4시)를 나타내는 Date 객체 생성
const targetDate = new Date(2023, 11, 24, 16, 0, 0);

// 두 날짜의 차이를 계산(미래시간 - 현재시간)
const timeDiff = targetDate - currentDate;

// 밀리초(ms)를 날짜, 시간, 분으로 변환
const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
const sec = Math.floor((timeDiff % (1000*60)) / 1000);

console.log(`남은 시간: ${days}일 ${hours}시간 ${minutes}분 ${sec}초`);


// 매초 표시되게 -> setInterval함수 -> 남은 시간 표시하기에 각각 표시