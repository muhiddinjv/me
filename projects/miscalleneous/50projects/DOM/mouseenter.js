const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');
const div3 = document.getElementById('div3');
const div4 = document.getElementById('div4');

div1.addEventListener('mouseenter', function(e) {
    e.target.style.background = 'yellow';
    setTimeout(function() {
        e.target.style.background = '';
    }, 500);
}, false);

div2.addEventListener('mouseenter', function(e) {
    e.target.style.background = 'red';
    setTimeout(() => {
        e.target.style.background = '';
    }, 1000);
}, false);

div3.addEventListener('mouseenter', function(e) {
    e.target.style.background = 'blue';
    setTimeout(() => {
        e.target.style.background = '';
    }, 2000);
}, false);

div4.addEventListener('mouseenter', function(e) {
    e.target.style.background = 'green';
    setTimeout(() => {
        e.target.style.background = '';
    }, 3000);
}, false);

const lis = document.querySelectorAll('li');
for (let x = 0; x < lis.length; x++) {
    const element = lis[x];
    element.addEventListener('mouseover', function() {
        this.classList.add('red');
    })
    element.addEventListener('mouseout', function() {
        this.classList.remove('red');
    })
}