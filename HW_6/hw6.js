// #dFeorS3m7u
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let arr = ['hello world', 'lorem ipsum', 'javascript is cool'];
for (let elem of arr) {
    console.log(elem + ':' + elem.length);
}

// #8lld9HMxXWB
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

for (let elem of arr) {
    console.log(elem + ' -> ' + elem.toUpperCase());
}

// #ClDsAm7xba7
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let arr2 = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
for (let elem of arr2) {
    console.log(elem + ' -> ' + elem.toLowerCase());
}

// #0b89BkYZwu
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   ';
console.log(str.trim());

//     #bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let stringToarray = (str) => str.split(' ');
let str1 = 'Ревуть воли як ясла повні';
let arr1 = stringToarray(str1);
console.log(arr1);

// #Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
console.log(numbers.map(number => number.toString()));

// #5hqyKTfmc
// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]


function sortNums(array, direction) {
    if (direction === 'ascending') return array.sort((a, b) => a - b);
    else if (direction === 'descending') return array.sort((a, b) => b - a);
    else {
        console.log("error: direction incorrect!");
        return array;
    }
}

let nums = [11, 21, 3];
console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));

// #yo06d74c1C
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration));
console.log(coursesAndDurationArray.filter((elem) => elem.monthDuration > 5));
console.log(coursesAndDurationArray.map(x => ({
    id: coursesAndDurationArray.indexOf(x) + 1,
    title: x.title,
    monthDuration: x.monthDuration
})));

//     #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }

let cardSuit = ['spade', 'diamond', 'heart', 'clubs'];
let cardValue = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'];
let cards = [];

for (let suitElem of cardSuit) {
    for (let valueElem of cardValue) {
        if (suitElem === 'diamond' || suitElem === 'heart') {
            cards.push({suit: suitElem, value: valueElem, color: 'red'});
        }
        if (suitElem === 'spade' || suitElem === 'clubs') {
            cards.push({suit: suitElem, value: valueElem, color: 'black'});
        }
    }
}
console.log(cards);
console.log(cards.find((elem) => elem.suit === 'spade' && elem.value === 'ace'));
console.log(cards.filter((elem) => elem.value === '6'));
console.log(cards.filter((elem) => elem.color === 'red'));
console.log(cards.filter((elem) => elem.suit === 'diamond'));
console.log(cards.filter((elem)=> elem.suit==='clubs' && cardValue.find((val, index)=> val===elem.value&&index>=3)));

//     #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

console.log(cards.reduce((accumulator, card) => {
    switch (card.suit){
        case 'spade':
            accumulator.spades.push(card);
            break;
        case 'diamond':
            accumulator.diamonds.push(card);
            break;
        case 'heart':
            accumulator.hearts.push(card);
            break;
        case 'clubs':
            accumulator.clubs.push(card);
            break;
    }
    return accumulator;
}, {spades: [], diamonds: [], hearts: [], clubs: []}));

// #4LJn7zBx
// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

console.log(coursesArray.filter((elem)=>elem.modules.findIndex((m)=>m==='sass') != -1));
console.log(coursesArray.filter((elem)=>elem.modules.findIndex((m)=>m==='docker') != -1));