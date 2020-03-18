// let timerId = setTimeout(sayHello, 3000);
// clearTimeout(timerId);  // для остановки сет таймаут (не будет работать сет тайм)

// let timerId = setInterval(sayHello, 3000);
// clearTimeout(timerId);


// function sayHello(){
//     console.log('HELOOOOOOO');
// }


// let timerId = setTimeout(function log(){    // рекурсивный вывод сет таймаут для того, чтобы ждать пока ф-я прогрузится и потом произойдет интервал
//     console.log("hello");
//     setTimeout(log, 2000);
// });

let btn = document.querySelector('.btn'),
    elem = document.querySelector('.box');

function myAnimation() {
    let pos = 0;

    let id = setInterval(frame, 10);

    function frame() {
        if (pos == 300){
            clearInterval(id);
        } else{
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);

let btnBlock = document.querySelector('.btn-block'),
    btns = document.getElementsByTagName('button');

// btnBlock.addEventListener('click', function(event){   // делигируем событие с родителя на его потомков
//     if (event.target && event.target.tagName == 'BUTTON'){
//         console.log("BIIITCH");
//     }
// });

// btnBlock.addEventListener('click', function(event){   // делигируем событие с родителя на его потомков
//     if (event.target && event.target.classList.contains('first')){
//         console.log("BIIITCH");
//     }
// });

btnBlock.addEventListener('click', function(event){   // делигируем событие с родителя на его потомков
    if (event.target && event.target.matches('button.first')){
        console.log("BIIITCH");
    }
});