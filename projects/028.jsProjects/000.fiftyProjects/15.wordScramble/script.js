const msg = document.querySelector('.msg');
const inp = document.querySelector('input');
const btn = document.querySelector('button');
const myArr = ["javascript", "website", "html", "document", "course", "new"];
let inplay = false;

btn.addEventListener('click', function() {
    if (!inplay) {
        inplay = true;
        btn.innerHTML = "Guess";
        inp.classList.toggle("hidden");
    }
    let random = Math.floor(Math.random() * myArr.length);
    msg.innerHTML = myArr[random].split("");
})