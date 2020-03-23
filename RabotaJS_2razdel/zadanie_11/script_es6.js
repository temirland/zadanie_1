// Прописано на стандарте ES6

// this - контекст вызова



// class User {            // Задаем класс User (не фунция)
//     constructor(name, id) {   // constructor - базовые настройки нашего класса
//         this.name  = name;
//         this.id = id;
//         this.human = true;
//     }
//     hello(){   // метод hello
//         console.log(`Hellooooo! ${this.name}`)

//     }
//     exit(){   // метод exit
//         console.log(`Пользователь! ${this.name} вышел`)

//     }
// }


// let ivan = new User("Ivan", 25);   // Создаем объекты
// let alex = new User("Alex", 20);

// console.log(ivan);
// console.log(alex);


// ivan.hello();
// alex.hello();





// function showThis(){     // незнает в каком контексте себя выполнить, и выполняется в объекте Window
//     console.log(this);
// }

// showThis();


// function showThis(a, b){   // Контекст функции внутри другой не поменяется, все также контекст бутет объектом Window
//     console.log(this);      // rкак бомж и его кот (оба никуда не привязаны)
//     function sum(){
//         console.log(this);
//         return this.a + this.b;
//     }
//     console.log(sum());
// }

// showThis(4, 5);
// showThis(5, 5);


// function showThis(a, b){   
//     console.log(this);      
//     function sum(){
//         console.log(this);
//         return a + b;   // Замыкание функций. если в себе не найдет a и b, то начнет искать во внешней среде
//     }
//     console.log(sum());
// }

// showThis(4, 5);
// showThis(5, 5);

// "use strict"    // В новом стандарте (при появлении use strict) когда ф-ции незнают где себя выполнить они получают не Window, а undrfined (не могут найт свой контекст вызова)
// function showThis(a, b){   
//     console.log(this);      
//     function sum(){
//         console.log(this);
//         return a + b;   // Замыкание функций. если в себе не найдет a и b, то начнет искать во внешней среде
//     }
//     console.log(sum());
// }

// showThis(4, 5);
// showThis(5, 5);


// let obj = {
//     a: 20,
//     b: 15,
//     sum: function(){        // Функция в объекте это - метод. А контекст этой функции объект 
//         console.log(this);      
//     }
// };
// obj.sum();

                                      // т.е кода мы писали "console.log(`Hellooooo! ${this.name}`)", то мы обращались к объекту User (ivan, alex) и брали у него свойство 'name'
//     class User {            
    //     constructor(name, id) {   
    //         this.name  = name;
    //         this.id = id;
    //         this.human = true;
    //     }
    //     hello(){   // метод hello
    //         console.log(`Hellooooo! ${this.name}`)



    // let obj = {
    //     a: 20,
    //     b: 15,
    //     sum: function(){        
    //         console.log(this);
    //         function shout(){        // Функция потеряла контекст (и выводит Window), т.к она вызвана не как метод, а как ф-я внутри ф-ции (также как кот и бомж)
    //             console.log(this);
    //         }
    //         shout();      
    //     }
    // };
    // obj.sum();




// let user = {
//     name: 'John'
// };

// function sayName(surname){
//     console.log(this);
//     console.log(this.name + surname);
// }
//     // насильно связали ф-ю с данными (user) (с помощью метода call)
// console.log(sayName.call(user, 'Smith'));    // Через запятую можно передать параметр только в виде строки
// console.log(sayName.apply(user, ['Snow']));       // Можно передать параметр в виде массива (если надо передать несколько параметров)


// function count(number){
//     return this * number
// }

// let double = count.bind(2)  // Каждый раз когда мы будем вызыват ф-ю, нашм контекстом вызова станет двойка (2)
// console.log(double(3));     // передаем number (3). В итоге получим this (2) * number (3) == 6
// console.log(double(10));    // передаем number (10). В итоге получим this (2) * number (3) == 20



let btn = document.querySelector('button');

btn.addEventListener('click', function(){          // Контекстом вызова будет сам объект
    console.log(this);
    this.style.backgroundColor = 'red';
    function showThis() {      // у этой ф-ции контекст вызова будет Window. (случай '1)' )
        console.log(this);
    }
    showThis();
})


// 1) Просто вызов функции - window/undefined
// 2) Метод объекта - this = объект
// 3) Конструктор (new) - this = новый созданный объект
// 4) Указание конкретного контекста - call, apply, bind
