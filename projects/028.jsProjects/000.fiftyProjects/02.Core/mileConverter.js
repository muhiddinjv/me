let miles = prompt('How many miles?');
let km = miles * 1.60934;
km = Number(km);
console.log(km);
let message = `${miles} miles is equal to ${km} kilometers`; //GOOD
// console.log(`${miles} miles is ${km} kilometers`); // BAD
console.log(message);
document.getElementById('head').innerHTML = message;