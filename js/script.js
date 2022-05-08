'use strict';

const deadline = new Date().getFullYear() + 1;
const infoDate = document.querySelector('.time__info');
infoDate.textContent = `until ${deadline}:`;

function countDate(end) {
    const t = Date.parse(end) - Date.parse(new Date()),
        days = Math.floor(t / (1000 * 60 * 60 * 24)),
        hours = Math.floor(t / (1000 * 60 * 60) % 24),
        minutes = Math.floor(t / (1000 * 60) % 60),
        seconds = Math.floor(t / (1000) % 60);
    return {
        'totalSeconds': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds,
    }
};

function setTime() {

    const t = countDate(deadline),
        days = document.querySelector('#days'),
        hours = document.querySelector('#hours'),
        minutes = document.querySelector('#minutes'),
        seconds = document.querySelector('#seconds'),
        setI = setInterval(updateTime, 1000);

    updateTime();
    function updateTime() {
        const t = countDate(deadline);
        days.innerHTML = showZero(t.days);
        hours.innerHTML = showZero(t.hours);
        minutes.innerHTML = showZero(t.minutes);
        seconds.innerHTML = showZero(t.seconds);

        if (t.totalSeconds <= 0) {
            clearInterval(setI);
        }
    };
    function showZero(num) {
        if (num <= 9 && num >= 0) {
            return `0${num}`
        } else {
            return num
        }
    };

}
setTime()

const timerWrapper = document.querySelector('.timer__wrapper'),
    arrow = document.querySelector('.arrow-down')

window.addEventListener('scroll', () => {
    function scrollAnim() {
        let windowCenter = window.innerHeight / 2 + window.scrollY,
            scrollOffset = timerWrapper.scrollTop + timerWrapper.scrollHeight;
        if (windowCenter >= scrollOffset) {
            arrow.style.transform = 'rotate(180deg)'
        } else {
            arrow.style.transform = ''
        }

    }

    scrollAnim()

});

const btnPlay = document.querySelector('.video-btn');
const bbb = document.querySelector('.content__text2'),
    text = document.querySelector('.content__text'),
    icons = document.querySelector('.left__icons'),
    icons2 = document.querySelector('.left__icons2'),
    iii = document.querySelector('.icons2'),
    videoBtn = document.querySelector('.btn__container'),
    VVV = document.querySelector('.video-btn'),
    wholeCont = document.querySelector('.content__container'),
    video = document.querySelector('video');

let count = 0
video.volume = 0.4;
btnPlay.addEventListener('click', () => {
    if (count == 0) {
        count++;
        bbb.classList.remove('hide');
        icons2.classList.remove('hide');

        icons.classList.add('hide');
        text.classList.add('hide');
        console.dir(video);
        bbb.classList.add('ctn');
        bbb.style.left = (document.documentElement.offsetWidth / 2 - bbb.offsetWidth / 2) + 'px';
        bbb.style.top = video.offsetTop / 2 - bbb.offsetHeight / 2 + 'px';

        icons2.style.left =  (document.documentElement.offsetWidth - ((document.documentElement.offsetWidth - video.clientWidth) / 4)) - 28 + 'px';
        console.dir(icons2)
        icons2.style.top = '80%';
        iii.classList.add('ctn3');
        VVV.classList.remove('video-btn');
        VVV.classList.add('btnbtnbtn');
        VVV.innerHTML = '<?xml version="1.0" ?><svg fill="none" height="27" viewBox="0 0 20 27" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 25.9H4.5C3 25.9 1.70001 24.705 1.70001 23.1117V4.68841C1.70001 3.19463 2.9 1.90002 4.5 1.90002H5C6.5 1.90002 7.79999 3.09505 7.79999 4.68841V23.1117C7.79999 24.705 6.5 25.9 5 25.9Z" stroke="#fff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/><path d="M15.5 25.9H15C13.5 25.9 12.2 24.705 12.2 23.1117V4.68841C12.2 3.19463 13.4 1.90002 15 1.90002H15.5C17 1.90002 18.3 3.09505 18.3 4.68841V23.1117C18.2 24.705 17 25.9 15.5 25.9Z" stroke="#fff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/></svg>'
        
        videoBtn.style.left = (document.documentElement.offsetWidth - ((document.documentElement.offsetWidth - video.clientWidth) / 4)) - videoBtn.offsetWidth / 2 + 'px';
        videoBtn.style.top = video.offsetTop / 2 - videoBtn.offsetHeight / 2 + 'px';
        
        video.style.opacity = '100%';
        video.play();


    } else {
        count--;
        bbb.classList.add('hide');
        text.classList.remove('hide');
        bbb.classList.remove('ctn');
        bbb.style.left = text.getBoundingClientRect().x + text.offsetWidth / 2 + 'px';
        bbb.style.top = text.getBoundingClientRect().y + 'px';

        icons.classList.remove('hide');
        icons2.classList.add('hide');
        icons2.style.left = icons.getBoundingClientRect().x + 'px';
        icons2.style.top = icons.getBoundingClientRect().y + 'px';
        iii.classList.remove('ctn3')

        videoBtn.style.left = wholeCont.getBoundingClientRect().x + wholeCont.offsetWidth / 2 - videoBtn.clientWidth / 2 + 'px';
        videoBtn.style.top = wholeCont.getBoundingClientRect().y + wholeCont.offsetHeight + 'px';

        video.style.opacity = '0%';
        video.pause();
        VVV.classList.add('video-btn');
        VVV.classList.remove('btnbtnbtn');
        VVV.innerHTML = '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="16" cy="16" r="15" stroke="white" stroke-width="2"/> <path d="M23.491 16.0234L12.4997 22.5468L12.3459 9.76637L23.491 16.0234Z" fill="#C4C4C4" stroke="white" stroke-width="2"/> </svg>';
    }


});

bbb.style.left = text.getBoundingClientRect().x + text.offsetWidth / 2 + 'px';
bbb.style.top = text.getBoundingClientRect().y + 'px';

icons2.style.left = icons.getBoundingClientRect().x + 'px';
icons2.style.top = icons.getBoundingClientRect().y + 'px';

videoBtn.style.left = wholeCont.getBoundingClientRect().x + wholeCont.offsetWidth / 2 - videoBtn.clientWidth / 2 + 'px';
videoBtn.style.top = wholeCont.getBoundingClientRect().y + wholeCont.offsetHeight + 'px';




