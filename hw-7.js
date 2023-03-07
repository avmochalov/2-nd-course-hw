// // Задание 1
// let str = String(prompt('Введите текст'));
// console.log(str.toUpperCase());

// // Задание 2
// let resultArray = [];
// function searchStart(arr, str) {
//     arr.forEach(element => {
//         if (element.toLowerCase().startsWith(str.toLowerCase())) {
//             resultArray.push(element);
//             return resultArray;
//         }
//     });
// }
// searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'); // ['кошка', 'комар']
// console.log(resultArray);

// // Задание 3
// const value = 32.58884;
// console.log(Math.floor(value));
// console.log(Math.ceil(value));
// console.log(Math.round(value));

// // Задание 4
// const fourthArray = [52, 53, 49, 77, 21, 32];
// console.log(Math.min(...fourthArray));
// console.log(Math.max(...fourthArray));

// // Задание 5
// let randomValueReal = (maxValue, minValue) => Math.random() * (maxValue - minValue) + minValue; // Дробное число
// console.log(randomValueReal(10, 1));
// let randomValueInt = (maxValue, minValue) => Math.round(Math.random() * (maxValue - minValue) + minValue); // Целое число
// console.log(randomValueInt(10, 1));

// // Задание 6
// function getRandomArrNumbers(randomNumber) {
//     let sixthArray = [];
//     let arrLength = Math.floor(randomNumber / 2)
//     for (let i = 0; i < arrLength; i++) {
//         sixthArray.push(Math.round(Math.random() * randomNumber));
//     }
//     console.log(sixthArray);
// }
// getRandomArrNumbers(Number(prompt('Введите любое число')));

// // Задание 7
// let seventhRandomValue = (maxValue, minValue) => {
//     let seventhRandomResult = Math.round(Math.random() * (maxValue - minValue) + minValue);
//     console.log(seventhRandomResult);
// }
// seventhRandomValue(Number(prompt('Введите любое число')), Number(prompt('Введите любое число, значение которого меньше, чем у первого числа')));
