const gameArea = document.querySelector('.game');
const btn = document.querySelector('button');
const msg = document.querySelector('.msg');
let score = 0;

let gamePlay = false;
btn.addEventListener('click', function() {
    if (!gamePlay) {
        gamePlay = true;
        score = 0;
        maker();
        btn.innerHTML = "Check Combo";
    } else {
        console.log('checker');
        score++;
        msg.innerHTML = "Guesses " + score;
        const numbers = document.querySelectorAll(".numb");
        let winCondition = 0;
        for (let x = 0; x < numbers.length; x++) {
            const el = numbers[x];
            console.log(el.value);
            console.log(el.correct);
            if (el.value == el.correct) {
                el.style.background = "green";
                el.style.color = "white";
                console.log('match');
                winCondition++;
            } else {
                let color = (el.value < el.correct) ? "blue" : "red";
                el.style.color = "white";
                el.style.background = color;
            }
        }
    }
})

function maker() {
    for (let i = 0; i < 4; i++) {
        let inp = document.createElement('input');
        inp.setAttribute("type", "number");
        inp.max = 9;
        inp.min = 0;
        inp.size = 1;
        inp.order = 0;
        inp.value = 0;
        inp.style.width = "40px";
        inp.classList.add("numb");
        //--------------------------
        inp.order = i;
        inp.correct = Math.floor(Math.random() * 10);
        inp.value = inp.correct;
        console.log(inp);
        gameArea.appendChild(inp);
    }
}