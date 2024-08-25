// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function rectangleS(a, b) {
    return a * b;
}

console.log(rectangleS(4, 6));

// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r

function circleS(r) {
    pi = 3.14;
    return pi * (r ** 2);
}

console.log(circleS(4));

// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function cylinderS(h, r) {
    pi = 3.14;
    return 2 * pi * r * (h + r);
}

console.log(cylinderS(6, 3));

// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент

function showArr(array) {
    for (let elem of array) {
        console.log(elem);
    }
}

showArr([3, 6, -5, 1, 9.21]);

// #59g0IsA
// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент

function createParagraph(text) {
    document.write(`<p>${text}</p>`);
}

createParagraph("some text in p");

// #hOL6126
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через
// аргумент всім однаковий

function createUl1(textLi) {
    document.write(`
    <ul>
        <li>${textLi}</li>
        <li>${textLi}</li>
        <li>${textLi}</li>
    </ul>
    `);
}

createUl1("some text in li");

// #0Kxco1edSN
// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li
// визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write

function createUl2(textLi, countLi) {
    document.write(`<ul>`);
    for (let i = 0; i < countLi; i++) {
        document.write(`<li>${textLi}</li>`);
    }
    document.write(`</ul>`);
}

createUl2("some text in li", 6);

// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li)
// та виводить його через document.write

function arrayToUl(array) {
    document.write(`<ul>`);
    for (let i = 0; i < array.length; i++) {
        document.write(`<li>${array[i]}</li>`);
    }
    document.write(`</ul>`);
}

arrayToUl(['first', 2, true, -27, 77.77, 'txt']);

// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

function arrObjToDiv(arrObj) {
    for (let i = 0; i < arrObj.length; i++) {
        document.write(`<div>`);
        for (let elem in arrObj[i]) {
            document.write(`${elem}: ${arrObj[i][elem]} `);
        }
        document.write(`</div>`);

    }
}

let arrayObj = [];
for (let i = 0; i < 5; i++) {
    arrayObj[i] = {id: i, name: 'name' + (i + 1), age: i + 20};
}

arrObjToDiv(arrayObj);

// #pghbnSB
// - створити функцію яка повертає найменьше число з масиву

function minElem(array) {
    let min = array[0];
    for (let elem of array) {
        if (min > elem) {
            min = elem;
        }
    }
    return min;
}

console.log(minElem([5, 9, 3, 8, 2, 7, 6]));

// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

function sum(arr) {
    let sumElem = 0;
    for (let elem of arr) {
        sumElem += +elem;
    }
    return sumElem;
}

console.log(sum([7, 2, 3, -4, 8, 3]));

// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap(arr,index1,index2){
    let elem=arr[index1];
    arr[index1]=arr[index2];
    arr[index2]=elem;
    return arr;
}

console.log(swap([11,22,33,44,55,66,77],3,6));

// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400

function exchange(sumUAH,currencyValues,exchangeCurrency){
    for(let elem of currencyValues){
        if(elem['currency']===exchangeCurrency){
            return sumUAH/elem['value'];
        }
    }
    console.log("error: no data!");
    return null;
}

currencyValues = [{currency:'USD',value:41},{currency:'EUR',value:46},{currency: 'JPY', value: 0.28},{currency: 'PLN', value: 11},{currency: 'BGN', value: 23}];

console.log(exchange(10000,currencyValues,'USD'));