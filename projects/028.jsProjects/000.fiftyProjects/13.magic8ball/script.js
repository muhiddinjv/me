const answer = ["It will work", "In your dreams!", "Probably Not", "Highly Likely", "Absolutely!"];
const msg = document.querySelector('.msg');
const inp = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    let random = Math.floor(Math.random() * answer.length);
    msg.innerHTML = `${inp.value}? ${answer[random]}`;
    inp.value = "";
})