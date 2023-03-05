// Задание 1

// let firstArray = [1, 5, 4, 10, 0, 3];
// for (const el of firstArray) {
// 	console.log(el);
//     if (el == 10) break;
// }

// Задание 2
// let secondArray = [1, 5, 4, 10, 0, 3];
// secondArray.forEach((el, index) => {
//     if (el == 4) {
//         console.log(`${index}`);
//     }
// });

// Задание 3
// let thirdArray = [1, 3, 5, 10, 20];
// thirdArray = thirdArray.join(' ');
// console.log(thirdArray);

// Задание 4
// let fourthArray = [];
// for (let i = 0; i < 3; i++) {
//     fourthArray.push([1, 1, 1]);
// }
// console.log(fourthArray);

// Задание 5 
// let fifthArray = [1, 1, 1];
// for (let i = 0; i < 3; i++) {
//     fifthArray.push(2);
// }
// console.log(fifthArray);

// Задание 6
// let sixthArray = [9, 8, 7, 'a', 6, 5];
// sixthArray.sort();
// sixthArray.pop();
// sixthArray.reverse();
// console.log(sixthArray);

// Задание 7
// let seventhArray = [9, 8, 7, 6, 5];
// let i = 0;
// let arrayCheck = Number(prompt('Введите число от 1 до 10'));
// seventhArray.forEach((el) => {
//     if (el === arrayCheck) {
//         i++;
//     }
// })
// if (i >= 1) {
//     console.log(`Введенное число содержится в данном массиве, количество совпадений = ${i}`);
// }
// if (i === 0) {
//     console.log('Введенное число отсутствует в данном массиве');
// }

// Задание 8
// let eighthString = 'abcdef';
// console.log(eighthString);
// let eighthArray = eighthString.split('');
// eighthArray.reverse();
// eighthString = eighthArray.join('');
// console.log(eighthString);

// Задание 9
// let ninthArray = [[1, 2, 3,],[4, 5, 6]];
// console.log(ninthArray);
// ninthArray = ninthArray.flat(1);
// console.log(ninthArray);

// Задание 10
// let tenthArray = [1, 5, 2, 7, 2, 6];
// let tenthCounter = 0;
// for (const el of tenthArray) {
// tenthCounter += el;
// console.log(tenthCounter);
// }

//Задание 11
// let eleventhArray = [];
function randomArray(minValue, maxValue, maxLength) {
    let arrayElement;
    let randomArray = [];
    for (let i = 0; i < maxLength; i++) {
        arrayElement = Math.floor(Math.random() * (maxValue - minValue) + minValue);
        randomArray.push(arrayElement);
    }
    return randomArray;
}
// eleventhArray = randomArray(0, 10, 10);
// console.log(eleventhArray);
// const evenArray = eleventhArray.filter(element => element % 2 === 0);
// console.log(evenArray);

//Задание 12
let twelfthArray = randomArray(1, 10, 6);
let arrayLength = twelfthArray.length;
console.log(twelfthArray);
const mean = twelfthArray.reduce((a, b) => a + b) / arrayLength;
console.log(mean);

