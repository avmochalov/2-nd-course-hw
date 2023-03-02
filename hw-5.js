// Задание 1
function minimumNumber(a, b) {
    if (a > b) {
        return b;
    } else {
        return a;
    }
}

console.log(minimumNumber(8, 4));
console.log(minimumNumber(6, 6));

// Задание 2
function checkParity(a) {
    if (a % 2 === 0 ) {
        return 'Число четное';
    } else {
        return 'Число нечетное';
    }
}

console.log(checkParity(Number(prompt('Введите число'))));

// Задание 3.1

function squareNumber(a) {
    console.log(a ** 2);
}

squareNumber(Number(prompt('Введите число')));

// Задание 3.2

function squareNumber(a) {
    return a ** 2;
}

console.log(squareNumber(Number(prompt('Введите число'))));

// Задание 4

function userAge() {
    let age = Number(prompt('Укажите возраст'))
    if (age < 0) {
        alert('Вы ввели неправильное значение');
    }
    if (age >= 0 && age <= 12) {
        alert('Привет, друг!');
    }
    if (age >= 13) {
        alert('Добро пожаловать!');
    }
}

userAge();

// Задание 5

function onNumberCheck(a, b) {
    if (!isNaN(a) && !isNaN(b)) {
        return a * b;
    } else {
        console.log('Одно или оба значения не являются числом');
    }
}

console.log(onNumberCheck(Number(prompt('Введите первый параметр')), Number(prompt('Введите второй параметр'))));

// Задание 6

function cube() {
    let num = Number(prompt('Введите число'));
    if (!isNaN(num)) {
        num = num ** 3;
        alert(`n в кубе равняется ${num}`);
    } else {
        alert('Переданный параметр не является числом');
    }
}
cube();

// Задание 7

function seasonsGame(monthNumber) {
    if (monthNumber === 12 || monthNumber === 1 || monthNumber === 2) {
        alert('Зима')
    }
    if (monthNumber === 3 || monthNumber === 4 || monthNumber === 5) {
        alert('Весна')
    }
    if (monthNumber === 6 || monthNumber === 7 || monthNumber === 8) {
        alert('Лето')
    }
    if (monthNumber === 9 || monthNumber === 10 || monthNumber === 11) {
        alert('Осень')
    }
    if (isNaN(monthNumber)) {
        alert('Вы ввели не число! Пожалуйста, введите число!')
    } else {
        alert('Порядковый номер месяца может быть в диапазоне от 1 до 12. Введите правильное значение!')
    }

}

function seasonsGame() {
    let monthNumber = Number(prompt('Введите число'));
    console.log(monthNumber);

    if (monthNumber === 12 || monthNumber === 1 || monthNumber === 2) {
        alert('Зима')
    }
    if (monthNumber === 3 || monthNumber === 4 || monthNumber === 5) {
        alert('Весна')
    }
    if (monthNumber === 6 || monthNumber === 7 || monthNumber === 8) {
        alert('Лето')
    }
    if (monthNumber === 9 || monthNumber === 10 || monthNumber === 11) {
        alert('Осень')
    }
    if (isNaN(monthNumber)) {
        alert('Вы ввели не число! Пожалуйста, введите число!')
    } else {
        alert('Порядковый номер месяца может быть в диапазоне от 1 до 12. Введите правильное значение!')
    }

}
