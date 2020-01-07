// ***********************************************************
// #15
// Homework from 24.12.2019    *Дима Скалюн
// ***********************************************************
// Задача
// -----------------------------------------------------------------------
// создать 3 объкта (objA, objB, objC)
// Придумать как минимум 1 свойство и 1 метод каждому объекту.
// Прототипом objC дожен быть objB, а прототипом objB должен быть objA.
// -----------------------------------------------------------------------
// 1) Реализовать цепочку протитопов с помощью Object.create.

function createCharacter(type, actor) {
    return {
        type: type,
        actor: actor,
        mission: function () {
            console.log(`${this.actor}'s mission => find the buried gold...`);
        }
    };
}
//    first object 
const theGood = createCharacter('good', 'Clint Eastwood');
//    second object 
const theBad = Object.create(theGood);
theBad.type = 'bad';
theBad.actor = 'Eli Wallach';
theBad.showface = function () {
    console.log(this.type);
}
//    third object 
const theUgly = Object.create(theBad);
theUgly.type = 'ugly';
theUgly.actor = 'Lee Van Cleef';
theUgly.shoot = function () {
    console.log(`${this.type}: Bang, bang, bang!`);
}

console.log('1) Реализовать цепочку протитопов с помощью Object.create :');
console.log(theUgly);

// -----------------------------------------------------------------------
// 2) Реализовать цепочку протитопов с помощью непосредственного
//    изменения прототипа (__proto__, setPrototypeOf)
//    Object.setPrototypeOf(obj, prototype);

let studentProtoObj = {
    sleep: function () {
        console.log("ZzZzz..");
    },
    work: function () {
        console.log(`${this.name} is working...`);
    },
    eat: function () {
        console.log(`${this.name} is eating...`);
    },
};

function createStudento(name, age, studentProto) {
    let student = {
        name: name,
        age: age,
    };
    Object.setPrototypeOf(student, studentProto);
    return student;
}
let anna = createStudento('Anna', '25', studentProtoObj); // 1st Object
let dima = createStudento('Dima', '28', anna);            // 2nd Object 
let george = createStudento('George', '36', dima);        // 3rd Object

console.log('2) Реализовать цепочку прот-ов с помощью непоср. изменения прот-а (__proto__, setPrototypeOf):');
console.log(george);

// -----------------------------------------------------------------------
// 3) Реализовать цепочку протитопов с помощью функций конструкторов.
function Obj1(title, numb) {
    this.title = title;
    this.numb = numb;
}
const obj1 = new Obj1('Obj1', '1');   // 1st Object
Obj1.prototype.getSummary = function () {
    return `${this.title} is number ${this.numb}`
}
// ----     ----     ----     ----     ----     ----     ----     ----   
function Obj2(title, numb) {
    Obj1.call(this, title, numb);
}
Obj2.prototype = Object.create(Obj1.prototype);
Obj2.prototype.constructor = Obj2;
const obj2 = new Obj2('Obj2', '2');   // 2nd Object
// ----     ----     ----     ----     ----     ----     ----     ----  
function Obj3(title, numb) {
    Obj2.call(this, title, numb);
}
Obj3.prototype = Object.create(Obj2.prototype);
Obj3.prototype.constructor = Obj3;
const obj3 = new Obj3('Obj3', '3');   // 3rd Object

console.log('3) Реализовать цепочку протитопов с помощью функций конструкторов:');
console.log(obj3);

// -----------------------------------------------------------------------



// написать функцию конструктор Basket
// все методы необходимо реализовать 
// на прототипе функции конструктора

// basket = new Basket();
// this.items у каждой корзины свои = []
// basket.addItem('someItem');
// basket.addItem('secondItem');
// basket.removeItem('secondItem');
// basket.getItems() // ['someItem']
// function Basket() {
//     this.items = [];
// }

// Basket.prototype.name = 'fsdgfds';

// const basket = new Basket();

// const obj = {
//     0: 12,
//     1: 2,
//     length: 2,
// };