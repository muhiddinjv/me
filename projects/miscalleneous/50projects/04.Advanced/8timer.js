const interval = window.setInterval(myCallback, 1000, 'interval');
const timeOut = window.setTimeout(myCallback, 500, 'setTimeOut');
const output = document.querySelector('.output');
const btn = document.querySelector('button');
const red = document.querySelector('.rect');
const blue = document.querySelector('.rect2');

function myCallback(msg) {
    red.innerHTML = new Date();
}
// RED BOX --------------------------------------
btn.addEventListener('click', function() {
    // clearInterval(interval);
})

let x = 0;
red.style.width = '100px';
red.style.height = '100px';
red.style.padding = '20px';
red.style.background = 'red';


function moveRight() {
    x++;
    red.style.transform = 'translateX(' + x + 'px)';
    if (x < 350) {
        window.requestAnimationFrame(moveRight);
    }
}
btn.addEventListener('click', function() {
    window.requestAnimationFrame(moveRight);
})

// BLUE BOX --------------------------------------------
let y = 0;
blue.style.width = '100px';
blue.style.height = '100px';
blue.style.padding = '20px';
blue.style.background = 'blue';


function moveDown() {
    y++;
    blue.style.transform = 'translateY(' + y + 'px)';
    if (y < 350) {
        window.requestAnimationFrame(moveDown);
    }
}
btn.addEventListener('click', function() {
    window.requestAnimationFrame(moveDown);
})