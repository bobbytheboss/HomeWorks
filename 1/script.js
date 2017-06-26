/**
 * Created by shef on 18.06.17.
 */
console.clear();

// ## 0 Проверка диапазона
//
// Напишите код который б проверял длинну телефонного номера
// Длинна номера не должна быть не меньше 9 и не больше 11

// * Your code Start *
var phone = prompt("enter your phone", 0); // Лучше всегда указывать default параметр, так как в ie он по умолчанию будет undefinded
alert(phone.length);
if(phone.length >= 9 && phone.length <= 11){
    alert('Hello');
} else {
    alert('enter a valid number');
}

// * Your code End *


// ## 1 Клонирование обьектов
//
// Склонируйте обьект objectA в objectB при помощи цикла

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


// * Your code End *

// Переопределяем значения обьекта objectA
objectA.name = 'Chris';
objectA.name = 'Couer';
objectA.name = '45';

// Если обьект objectB склонирован, значения в нем меняться не будут
// Выводим значения склонированного обьекта для проверки
console.log(objectB.name); // John
console.log(objectB.lastname); // Dou
console.log(objectB.age); // 50


// ## 2 Ветвление
// При помощи конструкци switch/case выведете текущую дату
// Название месяца должно иметь вид строки
// Например = 14 Июня 2017

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


// * Your code End *

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
