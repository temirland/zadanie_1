window.addEventListener('DOMContentLoaded', function(){    // начать сразу после прогрузки ДОМ-а. не ждать картинки и тд

    'use strict';

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a){
        for (let i = a; i < tabContent.length; i++){
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b){
        if (tabContent[b].classList.contains('hide')){
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event){
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')){
            for (let i = 0; i < tab.length; i++){
                if (target == tab[i]){
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    // Timer

    let deadline = '2020-04-01';

    function getTimeRemaining(endtime){
        let t = Date.parse(endtime) - Date.parse(new Date()),      // parse превращает любую дату в кол-во миллисекунд. new Date - время прямо сейчас
            seconds = Math.floor((t/1000) % 60),  // Math.floor() - получаем только целы числа
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000*60*60)));
            // hours = Math.floor((t/1000/60/60) % 24),
            // days = Math.floor((t/(1000*60*60*24)));

            return{             // создаем новый объект return
                'total' : t,
                'hours' : hours,
                'minutes' : minutes,
                'seconds' : seconds
            };


    }


    function setClock(id, endtime){
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);
        

        function updateClock(){
            let t = getTimeRemaining(endtime);
            if (t.hours < 10 && t.hours > 0){
                hours.textContent = '0' + t.hours;
            }else if(t.hours <= 0){
                hours.textContent = '00';
            }else{
                hours.textContent = t.hours;
            }

            if (t.minutes < 10 && t.minutes > 0){
                minutes.textContent = '0' + t.minutes;
            }else if(t.minutes <= 0){
                minutes.textContent = '00';
            }else{
                minutes.textContent = t.minutes;
            }

            if (t.seconds < 10 && t.seconds > 0){
                seconds.textContent = '0' + t.seconds;
            }else if(t.seconds <= 0){
                seconds.textContent = '00';
            }else{
                seconds.textContent = t.seconds;
            }

            if (t.total <= 0){
                clearInterval(timeInterval);
            }

        }
        
    }

    setClock('timer', deadline);

    // Modal

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        descriptionBtn = document.querySelector('.description-btn');

    function knowMoreBtn(btnClass){
        btnClass.addEventListener('click', function(){
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        });

        close.addEventListener('click', function(){
            overlay.style.display = 'none';
            more.classList.remove('more-splash');
            document.body.style.overflow = '';
        });
    }

    knowMoreBtn(more);
    knowMoreBtn(descriptionBtn);


    class Options {
        constructor(height, width, bg, fontSize, textAlign){
            this.height = height;
            this.width = width;
            this.bg = bg;
            this.fontSize = fontSize;
            this.textAlign = textAlign;
        }
        createNewDiv(){
            let elem = document.createElement('div');
            document.body.appendChild(elem);
            let params = `height: ${this.height}px; width: ${this.width}px; background-color: ${this.bg}; font-size: ${this.fontSize}px; text-align: ${this.textAlign};`;
            elem.style.cssText = params;
        }
    }
    let item = new Options(200, 200, "white", 24, "center");

    item.createNewDiv();
    


});