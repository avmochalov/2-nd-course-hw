// Задание 1
let str = String(prompt('Введите текст'));
console.log(str.toUpperCase());

// Задание 2
let resultArray = [];
function searchStart(arr, str) {
    arr.forEach(element => {
        if (element.toLowerCase().startsWith(str.toLowerCase())) {
            resultArray.push(element);
        }
    });
    console.log(resultArray);
}
searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'); // ['кошка', 'комар']

// Задание 3
const value = 32.58884;
console.log(Math.floor(value));
console.log(Math.ceil(value));
console.log(Math.round(value));

// Задание 4
const fourthArray = [52, 53, 49, 77, 21, 32];
console.log(Math.min(...fourthArray));
console.log(Math.max(...fourthArray));

// Задание 5
let randomValueReal = (maxValue, minValue) => Math.random() * (maxValue - minValue) + minValue; // Дробное число
console.log(randomValueReal(10, 1));
let randomValueInt = (maxValue, minValue) => Math.round(Math.random() * (maxValue - minValue) + minValue); // Целое число
console.log(randomValueInt(10, 1));

// Задание 6
function getRandomArrNumbers(randomNumber) {
    let sixthArray = [];
    let arrLength = Math.floor(randomNumber / 2)
    for (let i = 0; i < arrLength; i++) {
        sixthArray.push(Math.round(Math.random() * randomNumber));
    }
    console.log(sixthArray);
}
getRandomArrNumbers(Number(prompt('Введите любое число')));

// Задание 7
let seventhRandomValue = (maxValue, minValue) => {
    let seventhRandomResult = Math.round(Math.random() * (maxValue - minValue) + minValue);
    console.log(seventhRandomResult);
}
seventhRandomValue(Number(prompt('Введите любое число')), Number(prompt('Введите любое число, значение которого меньше, чем у первого числа')));

// Задание 8
let eighthСurrentDate = new Date();
console.log(currentDate);

// Задание 9
let ninthСurrentDate = new Date("07 March 2023");
ninthСurrentDate.setDate(ninthСurrentDate.getDate() + 73);
console.log(ninthСurrentDate);

// Задание 10
let tenthСurrentDate = new Date();
function dataView(tenthСurrentDate) {
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
        "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
    let date = tenthСurrentDate.getDate() + ' ' + months[tenthСurrentDate.getMonth()] + ' ' + tenthСurrentDate.getFullYear() + ' ' + '-' + ' ' + 'это' + ' ' + days[tenthСurrentDate.getDay()] + ', ' + tenthСurrentDate.getHours() + ' : ' + tenthСurrentDate.getMinutes() + ' : ' + tenthСurrentDate.getSeconds();
    console.log(date);
}
dataView(tenthСurrentDate);

// // Задание 11
function fruitsGame(params) {
    let fruitsArray = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    fruitsArray = fruitsArray.sort(() => Math.random() - 0.5);
    alert('Запомните первый и последний элемент массива:' + '\n' + '\n' + fruitsArray);
    let firstFruits = fruitsArray[0].toLowerCase();
    let lastFruits = fruitsArray[fruitsArray.length - 1].toLowerCase();
    // console.log(firstFruits);
    // console.log(lastFruits);
    let firstFruitsInput = (String(prompt('Чему равнялся первый элемент массива?'))).toLowerCase();
    let lastFruitsInput = (String(prompt('Чему равнялся последний элемент массива?'))).toLowerCase();
    if (firstFruitsInput === firstFruits && lastFruitsInput === lastFruits) {
        alert('Вы угадали!');
    } else
        if (firstFruitsInput === firstFruits || lastFruitsInput === lastFruits) {
            alert('Вы были близки к победе!');
        } else {
            alert('Вы ошиблись!');
        }
}


