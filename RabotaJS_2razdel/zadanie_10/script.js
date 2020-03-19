let box = document.querySelector('.box'),
    btn = document.querySelector('button');

// let width = box.clientWidth,   // clientWidth - свойство, поэтому нет скобок
//     height = box.clientHeight;

// let width = box.offsetWidth,   
//     height = box.offsetHeight;

let width = box.scrollWidth,   
    height = box.scrollHeight;

console.log(width);
console.log(height);
console.log(box.getBoundingClientRect().left);  // это метод поэтому () в конце. Выводит объект (ключ-знач), можно вывести значение по ключу через точку

console.log(document.documentElement.clientWidth);
console.log(document.documentElement.clientHeight);
console.log(document.documentElement.scrollTop);



// btn.addEventListener('click', function(){
//     box.style.maxHeight = box.scrollHeight + 'px';
// });

btn.addEventListener('click', function(){
    // console.log(box.scrollTop);            // scrollTop - сколько пикселей было прокручено (осталось сверху)
    box.scrollTop = 0;   // можно изменять значения только у scrollTop и scrollLeft
});

scrollBy(0, 200);  // метод поэтому (). Сдвинуть на 200px вниз и 0px вправо от текущей позиции
scrollTo(0, 200);  // переместит нас в облать с координатами (0, 200)

