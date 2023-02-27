// Задание 1
for (let i = 0; i < 2; i++) {
    console.log('Привет');
}

let i = 0;
do {
    console.log('Привет');
    i++;
} while (i < 2);

// Задание 2
let a = 1;
while (a <= 5) {
    console.log(a);
    a++;
}

for (let a = 1; a <= 5; a++) {
    console.log(a);
}

// Задание 3
for (let a = 7; a <= 22; a++) {
    console.log(a);
}

// Задание 4
let obj = {
    Коля: '200',
    Вася: '300',
    Петя: '400'
}

for (let name in obj) {
    console.log(`${name} — зарплата ${obj[name]} долларов.`);
}

// Задание 5
num = 0;
for (let n = 1000; n >= 50; n /= 2) {
    console.log(n);
    num++;
}
console.log(num);

// Задание 6

let firstMonthFriday = 5;

for (firstMonthFriday; firstMonthFriday <= 31; firstMonthFriday += 7) {
    console.log(`Сегодня пятница, ${firstMonthFriday}-е число. Необходимо подготовить отчет.`);

}

