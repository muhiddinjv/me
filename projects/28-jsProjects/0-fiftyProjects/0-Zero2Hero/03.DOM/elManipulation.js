// ELEMENT MANiPULATION-2
// cool stuff - 1
let heading = document.querySelector('h1');
heading.setAttribute('class', 'red');
document.querySelector('#pickme').remove();

// cool stuff - 2
const links = document.querySelectorAll('a');
links.forEach(function(el) {
    if (el.getAttribute('href')) {
        el.setAttribute('href', 'www.yahoo.com');
    }
    console.log(el);
})

// cool stuff - 3
const lisItems = document.querySelectorAll('li');
lisItems.forEach(function(el, num) {
    el.innerText = `List item #${num}`;
    el.id = 'li' + num;
    if (el.getAttribute('class')) {
        console.log(el.getAttribute('class'));
    }
})