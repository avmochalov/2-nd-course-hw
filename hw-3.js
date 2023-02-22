// Задание 1
let password = 'qwerty';
let pwdInput = String(prompt('Введите пароль'));
if (pwdInput == password) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
}

// Задание 2
let c = 7;
if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// Задание 3
let d = 7;
let e = 32;
if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// Задание 4
let a = '2';
let b = '3';
alert(Number(a) + Number(b));

// Задание 5
let numberOfMonth = Number(prompt('Введите номер месяца'));
switch (true) {
    case numberOfMonth === 12 || numberOfMonth === 1 || numberOfMonth === 2:
        console.log('Зима');
        break;
    case numberOfMonth === 3 || numberOfMonth === 4 || numberOfMonth === 5:
        console.log('Весна');
        break;
    case numberOfMonth === 6 || numberOfMonth === 7 || numberOfMonth === 8:
        console.log('Лето');
        break;
    case numberOfMonth === 9 || numberOfMonth === 10 || numberOfMonth === 11:
        console.log('Осень');
        break;
    case numberOfMonth > 13:
        break;
    default:
        break;
}

// Задание 7
let value = Number(prompt('Пожалуйста, введите любое число'));
if (typeof value === 'number') {
    if (value % 2 === 0) {
        alert('Число четное');
    }
    if (value % 2 === 1) {
        alert('Число нечетное');
    }
}

// if (typeof value === 'number' && value % 2 === 0) {
//     alert('Число четное');
// } else if (typeof value === 'number' && value % 2 === 1) {
//     alert('Число нечетное');
// }

// Задание 8
let clientOS = Number(prompt('Укажите свою операционную систему! Если Android-введите 1, если iOS-введите 0.'));
if (clientOS === 0) {
    alert('«Установите версию приложения для iOS по ссылке».')
}
if (clientOS === 1) {
    alert('«Установите версию приложения для Android по ссылке».')
}

// Задание 9
let userOS = Number(prompt('Укажите свою операционную систему! Если Android-введите 1, если iOS-введите 0.'));
let clientDeviceYear = Number(prompt('Укажите год выпуска устройства.'));
if (clientDeviceYear >= 2015) {
    userOS === 1 ? alert('«Установите версию приложения для Android по ссылке».') : ('«Установите версию приложения для iOS по ссылке».');
}
if (clientDeviceYear < 2015) {
    userOS === 1 ? alert('«Установите облегченную версию приложения для Android по ссылке».') : ('«Установите облегченную версию приложения для iOS по ссылке».');
}





