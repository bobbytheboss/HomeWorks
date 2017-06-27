// /**
//  * Created by shef on 18.06.17.
//  */
console.clear();
//
// ## 0 Проверка диапазона
//
// Напишите код который б проверял длинну телефонного номера
// Длинна номера не должна быть не меньше 9 и не больше 11
//
// * Your code Start *
var phone = prompt("enter your phone");
alert(phone.length);
if(phone.length>=9 && phone.length<=11){
    alert('Hello');
} else {
    alert('enter a valid number');
}
//
// // * Your code End *
//
//
// // ## 1 Клонирование обьектов
// //
// // Склонируйте обьект objectA в objectB при помощи цикла
//
var objectA = {
    name: 'John',
    lastname: 'Dou',
    age: 50
}
console.log(objectA);

var objectB = {};
// * Your code Start *
for (var key in objectA){
    objectB[key] = objectA[key];
}
console.log(objectB);

//
// // * Your code End *
//
// // Переопределяем значения обьекта objectA
objectA.name = 'Chris';
objectA.name = 'Couer';
objectA.name = '45';

// // Если обьект objectB склонирован, значения в нем меняться не будут
// // Выводим значения склонированного обьекта для проверки
console.log(objectB.name); // John
console.log(objectB.lastname); // Dou
console.log(objectB.age); // 50


// // ## 2 Ветвление
// // При помощи конструкци switch/case выведете текущую дату
// // Название месяца должно иметь вид строки
// // Например = 14 Июня 2017
//
var date = new Date();
var day = date.getDate(); // Текущий день
var month = date.getMonth(); // Текущий месяц (от 0 до 11)
var year = date.getFullYear(); // Текущий год
var monthName = ''; // Переменная для значения
console.log(month);
// * Your code Start *
switch (month){
    case 0: monthName = 'января'; break;
    case 1: monthName = 'февраля'; break;
    case 2: monthName = 'марта'; break;
    case 3: monthName = 'апреля'; break;
    case 4: monthName = 'мая'; break;
    case 5: monthName = 'июня'; break;
    case 6: monthName = 'июля'; break;
    case 7: monthName = 'августа'; break;
    case 8: monthName = 'сентября'; break;
    case 9: monthName = 'октября'; break;
    case 10: monthName = 'ноября'; break;
    case 11: monthName = 'декабря'; break;
}

// // * Your code End *
//
console.log(`Today is: ${day} ${monthName} ${year}`) // Пример: 14 Июня 2017


// ## 3 Взаимодействие с пользователем
//
// Запросите через prompt у пользователя его имя;
// Запрашивайте имя пользователя, пока одно из имен не будет совпадать с одним из массива users
// После того как пользователь введет имя которое есть в обьекте users, запросите у него пароль
// -- Если пароль введен не верно выведете alert об этом и вернитесь на повторый ввод имени
// -- Если пароль совпадает - вывести сообщение о том что пароль верный и прервите цикл

var users = [{
    name: 'Alex',
    password: 123
}, {
    name: 'Chris',
    password: 456
}, {
    name: 'Bill',
    password: 789
}];

// * Your code Start *
var zadacha = false;
console.log(users);
//console.log(users[0].name);

while (!zadacha){
    var userName = prompt("Enter your name please");
    for (var key in users){
        if(users[key].name==userName){
            var userPass = prompt("Enter your code");
            if(users[key].password == userPass){
                alert('Password correct');
                zadacha = true;
            } else {
                alert('Password  incorrect');
                break;
            }
        }
    }
}


// * Your code End *

// ## 4
// Создайте беспрерывный цикл который принимает от пользователя числа, и суммирует
// Цикл прирывается только в том случае если пользователь ввел что либо кроме числа
// После прерывания цикла выводится сумма введеных чисел

// * Your code Start *

var sumOfnum = 0;
var perekluchatel=false;
while (!perekluchatel){
    var yourNumb = prompt("enter your number", "");
    if (yourNumb.replace(/\d/g, '').length == 0){      //Вырезаем со строки цифры с помощью регулярного выражения
        yourNumb = parseInt(yourNumb);              // приводим строку у типу int
        sumOfnum += yourNumb;
        //console.log('cifra');
    } else {
        alert('Сумма циф: ' + sumOfnum);
        perekluchatel = true;
    }
}
// * Your code End *

// ## 5
// Найдите сумму  1 + 2 + 3 + ... + N, где число N вводится пользователем из prompt

// * Your code Start *

var summetNumber = prompt('Please enter number', 0);
var summ = 0;
var i = 0;
for ( i;i<=summetNumber;i++){
    summ +=i;
    console.log(summ);
}

// * Your code End *
// ## 6
// Нарисовать шахматную доску используя вложенные циклы (Доска находится в файле html)
// Размер шахматной доски стандартны 8х8
// Функция drawFractions - вспомогательная, при ее вызове в к блоку board в html добаляется 1 квардрат доски
// Ее можно не трогать
// Например что бы нарисовать 1 квадрат нужно вызвать ее 1 раз: drawFraction();
// Так же доски должны иметь черный\белый цвет. Реализовать это можно при помощи как css так и js


// var drawFraction = function(){
//     const board = document.querySelector('.board');
//     const fraction = document.createElement('div');
//     board.appendChild(fraction);
// } // В целом можно использовать было этот блок для прорисовки, я же специально дал пример что б не делать костылей)

const size = 8;

var table = document.createElement("table");
for (var i = 1; i <= size; i++) {
    var tr = document.createElement('tr');
    for (var j = 1; j <= size; j++) {
        var td = document.createElement('td');
        if (i%2 == j%2) {
            td.className = "white";
        } else {
            td.className = "black";
        }
        tr.appendChild(td);
    }
    table.appendChild(tr);
}
document.body.appendChild(table);

// * Your code End *
