// app.js

function 남은시간(){
    const currentDate = new Date();
    const targetDate = new Date(2023, 11, 24, 16, 0, 0);
    const timeDiff = targetDate - currentDate;

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const sec = Math.floor((timeDiff % (1000*60)) / 1000);
    // console.log(`남은 시간: ${days}일 ${hours}시간 ${minutes}분 ${sec}초`);

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


Fancybox.bind('[data-fancybox="gallery"]', {
    // Your custom options for a specific gallery
});
  

// 글자 복사 기능
function copyToClipBoard() {
    // 복사할 글자 요소명
    var content = document.querySelector('.bank-number1');
    
    // 텍스트 내용에 대한 범위 생성
    var range = document.createRange();
    range.selectNode(content);
    
    // 텍스트 내용 선택
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    
    // 선택된 텍스트 복사
    document.execCommand('copy');
    
    // 선택 해제
    window.getSelection().removeAllRanges();
  }
  