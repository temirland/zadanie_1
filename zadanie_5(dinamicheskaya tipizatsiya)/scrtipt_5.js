// to String

// 1)
console.log(typeof(String(4)));
// 2)
console.log(typeof("ww" + false));
console.log('https://vk.com/catalog/' + 5);

// to Number

// 1)
console.log(typeof(Number('5')));
// 2)
console.log(typeof(5 + +'5')); // + унарный - преобразует строку в число
// 3)
console.log(typeof(parseInt('15px', 10)));

let ans = +prompt("Hello?", '');

// 0, '', null, undefined, NaN - False

let switcher = null;

if (switcher){
    console.log("Working...");
} 

switcher = 1;

if (switcher){
    console.log("Working...");
} 


// 2)
console.log(typeof(Boolean('5')));
// 3)
console.log(typeof(!!'5'));

// let x = 5;
// let y = x = 2

// alert( y );

// let a = 2 ;
// let b = 15 ;
// alert(!!(a && b));

// alert( null || 2 && 3 || 4 );

// let a = [1, 2, 3],
//     b = [1, 2, 3];

// if (a == b){
//     alert("pes");
// } else{
//     alert("kot");
// }


// alert( +"Lol" ); 

// alert([]+1+2);