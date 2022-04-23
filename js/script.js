'use strict';

const deadline = '2023'

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
        if (windowCenter >= scrollOffset){
            arrow.style.transform = 'rotate(180deg)'
        }else{
            arrow.style.transform = ''
        }
        console.log(windowCenter)
        console.log(scrollOffset)
    }

    scrollAnim()
    
});

