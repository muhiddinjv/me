const myObj = {
    first: "Muhiddin",
    last: "Muallim",
    age: 35
}
let temp = JSON.stringify(myObj);
localStorage.setItem('obj', temp);
let newObj = JSON.parse(localStorage.getItem('obj'))
console.log(newObj);

// MY CODE ------------------------
const object2 = {
    name: "James",
    last: "Bond",
    age: 35
}
const string = JSON.stringify(object2);
localStorage.setItem('obj2', string);
const parsed = JSON.parse(localStorage.getItem('obj2'));
console.log(parsed);

// -----------------------------------
if (localStorage.getItem('num')) {
    let cnt = localStorage.getItem('num');
    cnt = Number(cnt);
    cnt++;
    localStorage.setItem('num', cnt);
} else {
    localStorage.setItem('num', 1);
}
console.log(localStorage.getItem('num'));