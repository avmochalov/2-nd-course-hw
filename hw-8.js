// Задание 1
const getResult = (array, callback) => {
    console.log(callback(array));
}
const sum = (array) => {
    return array.reduce((acc, element) => acc + element);
}
const mult = (array) => {
    return array.reduce((acc, element) => acc * element)
};
getResult([3, 4, 1, 9], sum); //17
getResult([3, 4, 1, 9], mult); //108

// Задание 2
const users = [
    { name: 'Jon', age: 22 },
    { name: 'Richard', age: 18 },
    { name: 'Anton', age: 32 },
    { name: 'Lida', age: 23 },
    { name: 'Bob', age: 44 }
];
function compareAge(a, b) {
    return a.age - b.age;
}
function getSortedArrayObj(users) {
    return users.sort(compareAge);
}
console.log(getSortedArrayObj(users));

// Почему при выводе консоль лога до преобразования через дебаг все нормально, без дебага массив дублируется

// Задание 3
const arrForRevers = [1, '4', 9, 'two'];
const arrForFilter = [1, '4', false, 9, 'two'];
const each = (array, callback) => {
    console.log(callback(array));
}
const reversArr = (array) => { return array.reverse() };
function toNumberArr(array) {
    const newArray = array.map(el => Number(el));  //Почему рабоатет только с добавлением переменной??
    newArray.forEach((element, index) => {
        if (isNaN(element) === true) {
            newArray.splice(index, 1);
        }

    });
    return newArray;
}

each(arrForRevers, reversArr); // ['two', 9, '4', 1]
each(arrForFilter, toNumberArr); // [1, 4, 0, 9]

// Задание 4
function showDate(time) {
    const interval = setInterval(() => {
        let currentDate = new Date();
        console.log(currentDate);
    }, 3000);
    setTimeout(() => {
        clearInterval(interval);
        console.log('30 секунд прошло')
    }, time * 1000);
}
showDate(30);

Задание 5
function calling() {
    console.log('Звоню!')
};

function beeps(talk) {
    setTimeout(() => {
        console.log('Идут гудки...')
        talk();
    }, 1000);
}

function talk() {
    console.log('Разговор')
}

calling();
beeps(talk);

