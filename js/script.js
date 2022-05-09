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
    arrow = document.querySelector('.arrow-down');

function scrollTo(elem){
    window.scroll({
        left: 0,
        top: elem.offsetTop,
        behavior: 'smooth'
    })
};

arrow.addEventListener('click', () => {
    scrollTo(timerWrapper)
});
    

window.addEventListener('scroll', () => {
    function scrollAnim() {
        let windowCenter = window.innerHeight / 2 + window.scrollY,
            scrollOffset = timerWrapper.scrollTop + timerWrapper.scrollHeight;
        if (windowCenter >= scrollOffset) {
            arrow.style.transform = 'rotate(180deg)'
            arrow.addEventListener('click', () => {
                scrollTo(document.querySelector('.content'))
            });
        } else {
            arrow.style.transform = ''
        }

    }

    scrollAnim()

});
const loader = document.querySelector('.wrapper__loader');
window.addEventListener('load', () => {
    loader.classList.add('hide')
    setTimeout(() => {
        loader.remove();
    }, 1000);
});

const btnPlay = document.querySelector('.video-btn'),
    text2 = document.querySelector('.content__text2'),
    text = document.querySelector('.content__text'),
    icons = document.querySelector('.left__icons'),
    icons2 = document.querySelector('.left__icons2'),
    iconsItems = document.querySelector('.icons2'),
    videoBtnCont = document.querySelector('.btn__container'),
    btnVideo = document.querySelector('.video-btn'),
    wholeCont = document.querySelector('.content__container'),
    video = document.querySelector('video');

let count = 0
video.volume = 0.4;

btnPlay.addEventListener('click', () => {
    text2.classList.toggle('hide');
    icons2.classList.toggle('hide');
    icons.classList.toggle('hide');
    text.classList.toggle('hide');
    if (count == 0) {
        count++;
        moveTo((document.documentElement.offsetWidth / 2 - text2.offsetWidth / 2) + 'px', video.offsetTop / 2 - text2.offsetHeight / 2 + 'px', text2);
        moveTo((document.documentElement.offsetWidth - ((document.documentElement.offsetWidth - video.clientWidth) / 4)) - 28 + 'px', '80%', icons2);
        moveTo((document.documentElement.offsetWidth - ((document.documentElement.offsetWidth - video.clientWidth) / 4)) - videoBtnCont.offsetWidth / 2 + 'px', video.offsetTop / 2 - videoBtnCont.offsetHeight / 2 + 'px', videoBtnCont);
    
        btnVideo.innerHTML = '<img src="img/pause.svg" alt="">';       
        video.style.opacity = '100%';
        video.play();
    } else {
        count--;

        moveToStartAll();

        video.style.opacity = '0%';
        video.pause();
        btnVideo.innerHTML = '<img src="img/Group 1.svg" alt="">';
    }
});

function moveTo(x, y, elem){
    elem.style.left = x;
    elem.style.top = y;
};

function moveToStartAll(){
    moveTo(text.getBoundingClientRect().x + text.offsetWidth / 2 + 'px', text.getBoundingClientRect().y + 'px', text2);
    moveTo(icons.getBoundingClientRect().x + 'px', icons.getBoundingClientRect().y + 'px', icons2);
    moveTo(49 + '%', 66 + '%', videoBtnCont);    
}
moveToStartAll();

video.addEventListener('ended', () => {
    text2.classList.toggle('hide');
    icons2.classList.toggle('hide');
    icons.classList.toggle('hide');
    text.classList.toggle('hide');
    moveToStartAll();
    count--;
    video.style.opacity = '0%';
    btnVideo.innerHTML = '<img src="img/Group 1.svg" alt="">';
});
