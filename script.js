"use strict";


let money = +prompt("Ваш бюджет на месяц?","");
let time = Date(prompt("Введите дату в формате YYYY-MM-DD",""));

let appData = {
    budjet : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : false
};

let statya = prompt("Введите обязательную статью расходов в этом месяце",""),
    tsena = +prompt("Во сколько обойдется?","");

appData.expenses[statya] = tsena;

alert(tsena / 30);

// for (var key in appData.expenses){
//     alert(key + " : " + appData.expenses[key] );
// }


