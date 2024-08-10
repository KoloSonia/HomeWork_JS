// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr1 = [21, "sonia", -13.333, 8467, "hello js :)", "six element", 123, -67, 86.51, 9.999999999];

console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[2]);
console.log(arr1[3]);
console.log(arr1[4]);
console.log(arr1[5]);
console.log(arr1[6]);
console.log(arr1[7]);
console.log(arr1[8]);
console.log(arr1[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title: "Iron Flame",
    pageCount: 623,
    genre: "Fantasy"
}
let book2 = {
    title: "Don Quixote",
    pageCount: 800,
    genre: "Classic"
}
let book3 = {
    title: "Harry Potter and the Goblet of Fire",
    pageCount: 640,
    genre: "Fantasy"
}

console.log(book1);
console.log(book2);
console.log(book3);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом.
// Кожен автор має поля name та age.

let book4 = {
    title: "My Lady Jane",
    pageCount: 512,
    genre: "fantasy and comedy",
    authors: [
        {
            name: "JCynthia Hand",
            age: 46
        },
        {
            name: "Brodi Ashton",
            age: 52
        },
        {
            name: "Jodi Meadows",
            age: 49
        }
    ]
};
let book5 = {
    title: "The Glass Ocean",
    pageCount: 416,
    genre: "historical fiction",
    authors: [
        {
            name: "Beatriz Williams",
            age: 52
        },
        {
            name: "Lauren Willig",
            age: 47
        },
        {
            name: "Karen White",
            age: 60
        }
    ]
};
let book6 = {
    title: "Enemy Of My Enemy",
    pageCount: 306,
    genre: "military thriller",
    authors: [
        {
            name: "Travis Casey",
            age: 59
        },
        {
            name: "Melissa Mayberry",
            age: 68
        }
    ]
};
console.log(book4);
console.log(book5);
console.log(book6);

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {name: "Sofiia", username: "KoloSonia21", password: "31yhr6Dh74"},
    {name: "Vitalii", username: "Pikachu", password: "Qwerty123"},
    {name: "Yrii", username: "ANaNas", password: "aNaNas62"},
    {name: "Viktoria", username: "Vika01", password: "Victory111"},
    {name: "Jane", username: "red100", password: "rgb100"},
    {name: "Richard", username: "Richard100500", password: "myPassword500"},
    {name: "Nataliia", username: "NataSuper1", password: "Super_1"},
    {name: "Robert", username: "RodiRobi", password: "paSSword0000"},
    {name: "Stella", username: "WinxStella", password: "winxS1"},
    {name: "Liana", username: "liannnnnna", password: "linaL"}
];

console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
// Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу

let weather = [
    {morning: 20, day: 26, evening: 24},
    {morning: 18, day: 25, evening: 22},
    {morning: 17, day: 26, evening: 25},
    {morning: 19, day: 22, evening: 21},
    {morning: 20, day: 23, evening: 18},
    {morning: 16, day: 19, evening: 19},
    {morning: 18, day: 29, evening: 27}

];

console.log(weather);

// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = -1;

if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 32;

if (time >= 0 && time <= 59) {
    if (time < 15) {
        console.log("first");
    } else if (time < 30) {
        console.log("second");
    } else if (time < 45) {
        console.log("third");
    } else {
        console.log("four");
    }
} else {
    console.log("error: not time!");
}


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 12;

if (day >= 1 && day <= 31) {
    if (day <= 10) {
        console.log("first");
    } else if (day <= 20) {
        console.log("second");
    } else {
        console.log("third");
    }
} else {
    console.log("error: not day!");
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
// (можна замість плану на день, назву дня англійською).

switch (+prompt("select day (1-7):")) {
    case 1: {
        console.log("Day 1: Monday – Planning & Prioritization\n" +
            "Morning: Review the week’s goals and create a to-do list.\n" +
            "Afternoon: Focus on top priorities or challenging tasks.\n" +
            "Evening: Light exercise (e.g., a walk) and meal prep for the week.");
        break;
    }
    case 2: {
        console.log("Day 2: Tuesday – Focus & Productivity\n" +
            "Morning: Tackle high-concentration tasks (e.g., work, study).\n" +
            "Afternoon: Continue with important projects or tasks.\n" +
            "Evening: Relax with a book or a hobby.");
        break;
    }
    case 3: {
        console.log("Day 3: Wednesday – Midweek Recharge\n" +
            "Morning: Complete remaining tasks from earlier in the week.\n" +
            "Afternoon: Attend meetings or collaborate on projects.\n" +
            "Evening: Social activity (e.g., dinner with friends or family).");
        break;
    }
    case 4: {
        console.log("Day 4: Thursday – Creativity & Development\n" +
            "Morning: Dedicate time to creative projects or brainstorming.\n" +
            "Afternoon: Learn something new (e.g., online course, podcast).\n" +
            "Evening: Practice a skill or work on a personal project.");
        break;
    }
    case 5: {
        console.log("Day 5: Friday – Wrap-Up & Reflection\n" +
            "Morning: Finish up the week’s tasks and review progress.\n" +
            "Afternoon: Tie up loose ends and prepare for the weekend.\n" +
            "Evening: Unwind with a movie or social activity.");
        break;
    }
    case 6: {
        console.log("Day 6: Saturday – Leisure & Exploration\n" +
            "Morning: Engage in a physical activity (e.g., hiking, biking).\n" +
            "Afternoon: Explore a new place or enjoy a fun activity.\n" +
            "Evening: Relax and enjoy time with loved ones.");
        break;
    }
    case 7: {
        console.log("Day 7: Sunday – Rest & Self-Care\n" +
            "Morning: Slow start with a relaxing breakfast.\n" +
            "Afternoon: Reflect on the past week and plan for the next one.\n" +
            "Evening: Prepare for the week ahead (e.g., organize space, set goals).");
        break;
    }
        default:{
            console.log("not plans :)")
        }
}

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let a = +prompt("Enter a: ");
let b = +prompt("Enter b: ");

if (a >= b) {
    console.log(a);
} else {
    console.log(b);
}

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення
//         (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).

let x1 = "some value";

if(x1 == false){
    x1 = "default";
}

console.log(x1);

//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його
//     елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if(coursesAndDurationArray[0].monthDuration>5){
    console.log("Супер");
}
if(coursesAndDurationArray[1].monthDuration>5){
    console.log("Супер");
}
if(coursesAndDurationArray[2].monthDuration>5){
    console.log("Супер");
}
if(coursesAndDurationArray[3].monthDuration>5){
    console.log("Супер");
}
if(coursesAndDurationArray[4].monthDuration>5){
    console.log("Супер");
}
if(coursesAndDurationArray[5].monthDuration>5){
    console.log("Супер");
}










