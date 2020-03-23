
// Прописано на стандарте ES5

function User(name, id){   // Конструктор. Нужен для создания новых однотипных объектов
    this.name  = name;
    this.id = id;
    this.human = true;
    this.hello = function(){
        console.log('Hellooooo! ' + this.name);
    }
}

User.prototype.exit = function(name){     // prototype - добавляем новые метды в объект и они будут прототипоно наследоваться у потомков
    console.log('Пользователь ' + this.name + ' вышел');   // прописали новый метод exit, для объекта User
}

let ivan = new User("Ivan", 25),
    alex = new User("Alex", 20);

console.log(ivan);
console.log(alex);


ivan.exit();