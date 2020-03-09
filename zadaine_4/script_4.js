// let options = {
//     width: 1024,
//     height: 1024,
//     name:"test"
// };

// console.log(options.name);

// options.bool = false;
// options.colors = {
//     border: "black",
//     bg: "red"
// }

// delete options.bool;

// console.log(options);

// for (let key in options){
//     console.log("Свойство " + key + " имеет значение " + options[key]);
// }

// console.log(Object.keys(options).length);

// //let arr = [1, 2, 3, 4, 5];

// arr.pop();          // drop last elem
// arr.push("5");      // add last elem
// arr.shift();        // drop first elem
// arr.unshift("1");   // add first elem

// console.log(arr);

// //let arr = [1, 2, 3, 4, 5];

// arr[99] = 99;  //vse elementy dolzhny byt po porydku
// console.log(arr.length);
// console.log(arr);
// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// };

// let arr = ["first", 2, 3, "four", 5];

// //callback функция в методе forEach для перебора массивов 
// // i - nomer;  item - sam element;  mass - sam massiv.
// arr.forEach(function(item, i, mass){     
//     console.log(i + ':' + item + " (массив: " + mass + ')');
// });

// console.log(arr);

// let mass = [1, 3, 4, 6, 7];

// //с пом for in получаем ключи. тк в массив тоже ключ-значение
// for (let key in mass){ 
//     console.log(key);
// }

// let mass = [1, 3, 4, 6, 7];

// // вместо in надо написть of. чтобы вывести элементы
// for (let key of mass){ 
//     console.log(key);
// }

// let ans = prompt("",''),
//     arr = [];

// arr = ans.split(',');
// console.log(arr);

// let arr = ["are", 'sd0', 'sdf', 'sdffsw0'],
//     i = arr.join(', ');
// console.log(i);

// let arr = ["zre", 'td0', 'sdf', 'pdffsw0'],
//     i = arr.sort();
// console.log(arr);

let arr = ["4", '15', '1', '42'],
    i = arr.sort(compareNum);

function compareNum(a,b){
    return a-b;
}

console.log(arr);

let soldier = {
    health: 400,
    armor: 100
};

let john = {
    health: 100
};

john.__proto__ = soldier;

console.log(john);
console.log(john.armor);