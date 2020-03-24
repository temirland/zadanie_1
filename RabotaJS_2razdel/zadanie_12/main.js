let name = "Ivan",
    age = 30,
    mail = 'ex@mail.ru';

// document.write('User ' + name + ' ' + age + ' year old. His email adress: ' + mail);
document.write(`User ${name} ${age} year old. His email adress: ${mail}`);  // Интерполяция 


function makeArray(){
    var items = []

    for (let i = 0; i < 10; i++){    // усли бы был var, то вывелось бы 10 10 10
        var item = function(){       // при использовании let или const для каждой итерации создается своя переменная
            console.log(i);
        };
        items.push(item);       // Массив будет состоять из функций, которыйе выводят i
    }
    return items;
}

var arr = makeArray();

arr[1]();       // Круглые скобки для того, чтобы вызвать функцию
arr[3]();
arr[7]();


                        // Стрелочная ф-я
let fun = () => {           // в () передаются аргументы
    console.log(this);      // Своего контекста вызова ф-я не имеет
};

// Особенности срелочной ф-ции
// 1) Она анонимна, не можем задать ей имя. Можем только поместить в переменную
// 2) Не сможем управлять обработчиками событий
// 3) Не сможем запускать ф-ю внутри себя (сделать рекурсию)

// fun();

let obj = {
    number: 5,
    sayNumber: function(){
        let say = () => {       // нет своего контекста, пэтому берет кнтекст у своего родителя (у ф-ции sayNumber)
            console.log(this);
        };
        say();
    }
};

// Чаще всего стрелочные ф-ции используются в обработчиках событий, setInterval, setTimeout и в AJAX

obj.sayNumber();



let btn = document.querySelector('button');

btn.addEventListener('click', function(){
    let show = () => {
        console.log(this);        // берет контекст у родителя (function). А у него контекст это - кнопка
    };
    show();
});


// function calcOrDouble(number, basis){
//     basis = basis || 2;               // ES5 // если есть basis то ок, если нет то 2
//     console.log(number*basis);
// }

function calcOrDouble(number, basis = 2){    // ES6                          
    console.log(number*basis);
}
calcOrDouble(3, 5);
calcOrDouble(6);


class Rectangle {       // Названия классов всегда с большой буквы
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
    calcArea(){
        return this.height * this.width;
    }
}

const square = new Rectangle(10, 10);

console.log(square.calcArea());


let video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wp', 'lj', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook']; // Spread оператор - разворачивает массив (в другом)

console.log(internet);

function log(a, b, c){
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(a + b + c);
    

}
let numbers = [2, 5, 7];
log(...numbers);