// app.js

function 남은시간(){
    const currentDate = new Date();
    const targetDate = new Date(2023, 11, 24, 16, 0, 0);
    const timeDiff = targetDate - currentDate;

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const sec = Math.floor((timeDiff % (1000*60)) / 1000);
    console.log(`남은 시간: ${days}일 ${hours}시간 ${minutes}분 ${sec}초`);

    // HTML에 표시
    let day = document.querySelector('.time-info .day');
    let h = document.querySelector('.time-info .hour');
    let m = document.querySelector('.time-info .min');
    let s = document.querySelector('.time-info .sec');

    day.innerHTML = days;
    h.innerHTML = hours;
    m.innerHTML = minutes;
    s.innerHTML = sec;

}


setInterval(남은시간, 1000);


