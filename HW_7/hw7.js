// #XjJuucOMR0
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [];
users[0] = new User(8123, 'Sofiia', 'Kolodii', 'sofia12@gmail.com', '0636457814');
users[1] = new User(9257, 'Oleh', 'Hrytsenko', 'oleh.hrytsenko@gmail.com', '0671234567');
users[2] = new User(7810, 'Yuliia', 'Shevchenko', 'yuliia.shevchenko@gmail.com', '0509876543');
users[3] = new User(6534, 'Andrii', 'Kovalchuk', 'andrii.kovalchuk@gmail.com', '0631122334');
users[4] = new User(8921, 'Olena', 'Bohdan', 'olena.bohdan@gmail.com', '0976655443');
users[5] = new User(4732, 'Ivan', 'Pavlenko', 'ivan.pavlenko@gmail.com', '0503344556');
users[6] = new User(5296, 'Kateryna', 'Lytvynenko', 'kateryna.l@gmail.com', '0937766554');
users[7] = new User(3918, 'Mykhailo', 'Savchuk', 'mykhailo.savchuk@gmail.com', '0674455667');
users[8] = new User(7842, 'Nataliia', 'Tymoshenko', 'nataliia.t@gmail.com', '0509988776');
users[9] = new User(6679, 'Dmytro', 'Zhuk', 'dmytro.zhuk@gmail.com', '0635566778');

console.log(users);

// #2ikXsE2WiKZ
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

console.log(users.filter((user) => user.id % 2 === 0));

// #pOeHKct
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

console.log(users.sort((a, b) => a.id - b.id));

// #nkMXISv
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

function getRandomOrders() {
    let count = Math.floor(Math.random() * 10) + 1;
    let order = [];
    let numbs = [];
    for (let i = 0; i < count; i++) {
        numbs.push(Math.floor(Math.random() * 19) + 1);
        order.push(orders[numbs[i]]);
    }
    console.log(numbs);
    return order;
}

let orders = ['Smartphone', 'Laptop', 'Wireless Headphones', 'Smartwatch', 'Gaming Console',
    'Bluetooth Speaker', 'Tablet', 'External Hard Drive', 'Digital Camera', 'Fitness Tracker',
    'E-book Reader', '4K TV', 'Wireless Mouse', 'Mechanical Keyboard', 'Portable Charger', 'Virtual Reality Headset',
    'USB Flash Drive', 'Home Security Camera', 'Smart Light Bulb', 'Smart Thermostat'];
let clients = [];

for (let i = 0; i < users.length; i++) {
    clients[i] = new Client(users[i].id, users[i].name, users[i].surname, users[i].email, users[i].phone, getRandomOrders());
}

console.log(clients);


// #8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

console.log(clients.sort((a, b) => a.order.length - b.order.length));

// #vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, manufacturer, yearOfRelease, maximumSpeed, engineCapacity) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.yearOfRelease = yearOfRelease;
    this.maximumSpeed = maximumSpeed;
    this.engineCapacity = engineCapacity;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maximumSpeed} на годину`);
    }
    this.info = function () {
        console.log(`Модель - ${this.model}\nВиробник - ${this.manufacturer}\nРік випуску - ${this.yearOfRelease}\nМаксимальна швидкість - ${this.maximumSpeed}\nОб\'єм двигуна${this.engineCapacity}`);
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.maximumSpeed += newSpeed;
    }
    this.changeYear = function (newValue) {
        this.yearOfRelease = newValue;
    }
    this.addDriver = function (driver) {
        this.driver = driver;
    }
}

let car1 = new Car('Model S', 'Tesla', 2023, 250, 100);

console.log(car1);
car1.drive();
car1.info();
car1.increaseMaxSpeed(30);
car1.changeYear(2024);
car1.addDriver({name: 'Stiv', trackRecord: 6});
console.log(car1);
console.log(car1.driver);


// #5kla3yMpgp
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class CarClass {
    constructor(model, manufacturer, yearOfRelease, maximumSpeed, engineCapacity) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.yearOfRelease = yearOfRelease;
        this.maximumSpeed = maximumSpeed;
        this.engineCapacity = engineCapacity;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maximumSpeed} на годину`);
    }

    info() {
        console.log(`Модель - ${this.model}\nВиробник - ${this.manufacturer}\nРік випуску - ${this.yearOfRelease}\nМаксимальна швидкість - ${this.maximumSpeed}\nОб\'єм двигуна${this.engineCapacity}`);
    }

    increaseMaxSpeed(newSpeed) {
        this.maximumSpeed += newSpeed;
    }

    changeYear(newValue) {
        this.yearOfRelease = newValue;
    }

    addDriver(driver) {
        this.driver = driver;
    }
}

let car2 = new CarClass('Model S', 'Tesla', 2023, 250, 100);

console.log(car2);
car2.drive();
car2.info();
car2.increaseMaxSpeed(30);
car2.changeYear(2024);
car2.addDriver({name: 'Stiven', trackRecord: 4});
console.log(car2);


// #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
}

class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}

let cinderellas = [
    new Cinderella('Ella', 18, 36),
    new Cinderella('Bella', 19, 37),
    new Cinderella('Anna', 20, 38),
    new Cinderella('Clara', 21, 39),
    new Cinderella('Diana', 22, 35),
    new Cinderella('Eva', 23, 37),
    new Cinderella('Fiona', 24, 38),
    new Cinderella('Gina', 25, 39),
    new Cinderella('Hanna', 26, 40),
    new Cinderella('Ivy', 27, 36)
];

let prince = new Prince('Jhon', 25, 35);

for (let girl of cinderellas) {
    if (girl.shoeSize === prince.shoe) {
        console.log(`Cinderella is ${girl.name}, shoe size - ${girl.shoeSize}`);
    }
}

console.log(cinderellas.find((girl) => prince.shoe === girl.shoeSize));

// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter

Array.prototype.newForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};
let arr = [45, 73, 82, 17, -4, 63];
arr.newForEach((elem, i) => console.log(`${i}: ${elem}`));

Array.prototype.newFilter = function(callback) {
    let filtrArr = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            filtrArr.push(this[i]); // Add element to filteredArray if callback returns true
        }
    }
    return filtrArr;
};
console.log(arr.newFilter(elem => elem > 20));