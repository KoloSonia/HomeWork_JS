// #AiN5CoUQ
// Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
//     Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.

function cloneObj(obj) {
    if (typeof obj === 'number' && isNaN(obj)) {
        return NaN;
    }
    if ((typeof obj !== 'object' && typeof obj !== 'function')) {
        return obj;
    }
    if (typeof obj === 'function') {
        return function(...args) {
            return obj.apply(this, args);
        };
    }
    if (Array.isArray(obj)) {
        return obj.map(cloneObj);
    }

    let clon = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            clon[key] = cloneObj(obj[key]);
        }
    }

    return clon;
}

const original = {
    name: "John",
    age: 36,
    isAdmin: true,
    details: {
        hobby: "reading",
        education: true
    },
    greet: function() {
        console.log("Hello, " + this.name);
    },
    items: [1, 2, 3, undefined, null, NaN]
};

const copy = cloneObj(original);
console.log(original);
original.greet();

console.log(original===copy);
console.log(original.items===copy.items);

console.log(copy);
copy.greet();

copy.name='Marta';
console.log(copy);


// #iz6emEsP2BA
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
//     Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
console.log(coursesAndDurationArray.map(x => ({id: coursesAndDurationArray.indexOf(x) + 1, title: x.title, monthDuration: x.monthDuration})));