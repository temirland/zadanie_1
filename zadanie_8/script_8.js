let btn = document.querySelectorAll('button'),
    wrap = document.querySelector('.wrapper'),
    link = document.querySelector('a');

// btn[0].onclick = function(){
//     alert('AAAAAAAAAAAAAAA');
// }

// btn[0].onclick = function(){
//     alert('AAAAAAAAAAAAAAA второй раз');
// }

// btn[0].addEventListener('click', function(event){
//     // console.log(event);
//     // let target = event.target;
//     // target.style.display = 'none';
//     console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
// });


// wrap.addEventListener('click', function(){
//     console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
// });

link.addEventListener('click', function(event){
    event.preventDefault();             // отменяет стандартное действие (в данном случе переход по ссылке)
    console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
});


btn.forEach(function(item){
    item.addEventListener('mouseleave', function(){
        console.log('Вышли!');
    });
});


// btn[0].addEventListener('mouseenter', function(){
//     alert('Вы навели на первую кнопку');
// });