// let name = prompt("Ismiz nimeydi?");

// document.getElementById('welcome').innerHTML = 'Hush kelibsiz <b>koootta</b> holangizni uyiga: ' + name;

// you can create a variable and send value to console

// let learning = 'Learning JavaScript';

// console.log(learning);

// console.table([1, 2, 3]);

// console.error('Vay Yuguriiiiib kelib kalla qoydizu boyvachcha! kodizzi tekshirin!');

// console.warn('Ehtiyot boling kalla qoymang yana!');

// console.time('test');
// console.warn('Ehtiyot boling kalla qoymang yana!');
// console.warn('Ehtiyot boling kalla qoymang yana!');
// console.warn('Ehtiyot boling kalla qoymang yana!');
// console.warn('Ehtiyot boling kalla qoymang yana!');
// console.warn('Ehtiyot boling kalla qoymang yana!');
// console.warn('Ehtiyot boling kalla qoymang yana!');
// console.timeEnd('test');

// console.log(2 + 2);


//----------------1. Variables with VAR----------------
// var learning, name, age;

// age = 20;
// learning = 'javascript';
// name = 'muhiddin';

// console.log(age);
// console.log(learning);
// console.log(name);


//----------------2. Variables with LET----------------

// let product1 = 'book',
//     product2 = 'shirt',
//     product3 = 'pants';

// console.log(product1);
// console.log(product2);
// console.log(product3);

// let shoppingCart = ['Product 1', 'Product 2', 'Product 3'];
// console.table(shoppingCart);


//------------------3. Variables with CONST------------------
// you always have to add the initial value when you use const
// const name; =BAD / const name = 'Jack'; =GOOD
// you cannot re asign the value
// const name = 'jack';
// name = 'john'; ERROR
// console.log(name);


//------------------4. Data Types in Javascript------------------
// let variable = 'Muhiddin';
// variable = 20;
// variable = false;
// variable = undefined;
// variable = Symbol('My new symbol');

// variable = 1;
// variable = 10.0001;
// variable = -300;
// variable = 20;
// variable = '20';

// // booleans-----------
// variable = false;
// // null---------
// let bankSavings = null;
// //undefined -----------
// let person;
// //Symbols-----------
// let symbolIE6 = Symbol('This is a symbol');
// // Arrays------------
// let languages = ['HTML5', 'JS', 'PHP'];
// // Objects--------------
// let person2 = {
//         name: 'Muhiddin',
//         country: 'Uzbekistan',
//         age: 35
//     }
//     // Dates-----------
// let today = new Date();

// // console.log(variable);
// console.log(typeof today);


//------------------5. Strings in Javascript------------------
// concatenation
let learning = 'JavaScript',
    modern = 'Modern';

console.log('Learning: ' + modern + ' ' + learning);