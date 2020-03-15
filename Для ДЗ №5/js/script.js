let menuItem = document.querySelectorAll('.menu-item'),
    menu = document.querySelector('.menu'),
    title = document.getElementById('title'),
    column = document.querySelectorAll('.column'),
    adv = document.querySelector('.column>.adv'),
    answerPrompt = document.getElementById('prompt');


menu.insertBefore(menuItem[2], menuItem[1]);  // вставить 3й эл. перед 2ым

let li = document.createElement('li');

li.classList.add('menu-item');
li.textContent = 'Пятый пункт';
menu.appendChild(li);

// menuItem[1].style.color = 'red';
document.body.style.background = 'url(img/apple_true.jpg) center no-repeat';

title.innerHTML = 'Мы продаем только подлинную технику Apple';

column[1].removeChild(adv);

let answer = prompt('Ваше отношение к технике Apple?','');

answerPrompt.textContent = answer;