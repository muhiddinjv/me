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
        createWord();
    }
})

function createWord() {
    let random = Math.floor(Math.random() * myArr.length);
    let letters = myArr[random].split("");
    let rand = randomArray(letters)
    console.log(rand);
    // randomArray(letters);
    return letters;
}

function randomArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const el = arr[i];
        let r = Math.floor(Math.random() * (i + 1));
        console.log(el);
        console.log(r);
        console.log(i);
    }
}