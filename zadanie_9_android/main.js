// touchstart    касание
// touchmove     движение
// touchend      отрыв пальца
// touchenter    вошел в предел эл-та
// touchleave    вышел за пределы эл-та
// touchcancel   когда палец не регистрируется в браузере (ведем по экрану и выходим за его пределы)

window.addEventListener('DOMContentLoaded', function(){
    let box = document.querySelector('.box');

    box.addEventListener('touchstart', function(e){
        e.preventDefault();
        // console.log("Red box: touchstart");
        // console.log(e.target);
        // console.log(e.touches[0].target);
        // console.log(e.changedTouches);
        // console.log(e.targetTouches);
    });

    box.addEventListener('touchmove', function(e){
        e.preventDefault();
        console.log("Red box: " + e.touches[0].pageX);
    });

    // box.addEventListener('touchend', function(e){
    //     e.preventDefault();
    //     console.log("Red box: touchend");
    // });


    // new RegExp('pattern', 'flags');   Регулярные выражения
    // /pattern/    

    // let ans = prompt("Type your name");

    // let reg = /n/gi;

    // // console.log(ans.search(reg));  
    // //  console.log(ans.match(reg));
    // console.log(reg.test(ans));

    // флаги
    // i  (флаг регистра) вне зависимости от регистра первое совпадение
    // g  (флаг глобальности) все совпадения
    // m  (флаг многострочности)


    // классы символов
    // \d   числа    \D  не число
    // \w   буква    \W  не буква
    // \s   пробелы  \S

    // let pass = prompt('vvedite parol');

    // console.log(pass.replace(/./g, "*"));  // . (точка - все символы) заменяем на *
    // alert('12-34-56'.replace(/-/g, ':'));


    // let ans = prompt("Введите число");

    // let reg = /\d/g;
 
    // console.log(ans.match(reg));


    let str = 'my name is /r2d2';

    // console.log(str.match(/\w\d\w\d/i));

    // чтобы найти слэш (/)  надо его экранировать обратным слэшом (\/)
    console.log(str.match(/\//i));
});


