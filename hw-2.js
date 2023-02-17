// Задание 1
let a = 10;
alert(a);
a = 20;
alert(a);

// Задание 2
const firstIphone = 2007;
alert(`Год выпуска первого iPhone: ${firstIphone}`);

// Задание 3
const jsCreatorName = 'Брендан Эйх';
alert(`Cоздатель языка JavaScript: ${jsCreatorName}`);

// Задание 4
let b = 10;
let c = 2;
// let c = a+b;
alert(b + c);
alert(b - c);
alert(b * c);
alert(b / c);

// Задание 5
let result = 2 ** 5;
alert(result);

// Задание 6
let d = 9;
let e = 2;
alert(d % e);

// Задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

// Задание 8
let age = prompt(`Сколько вам лет?`);
alert(age);

// Задание 9.0
let user = {
    name: 'Alex',
    age: 29,
    isAdmin: true
};
user['city of residence'] = 'Russia';
user.age = 40;
delete user['city of residence'];
let info = prompt(`Какую информацию хотите узнать о пользователе?`)
alert(user[info]);

// Задание 10

let userName = prompt(`Как вас зовут?`)
alert(`Привет ${userName}!`)



