// Ask the users age via prompt 
// 1-Check if they are 17 or older
// 2-show message to allow or deny depending on the age using ternary operator
// 3-Set a membership boolean value and add second check to ensure the user is a member 
// 4-output a message to them if they are or are not allowed or denied entry                  
let age = prompt('how old are you?');
console.log(age);

age = Number(age);
let message = (age >= 17) ? 'Allowed' : 'Denied';
console.log(message);

let membership = true;
if (age >= 17 && membership) {
    console.log('Yes this person can enter');
} else {
    console.log('Not allowed to enter');
}