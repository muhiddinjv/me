// ----- Section 1 - START ------------------------------
const startBtn = document.querySelector('.startBtn')
const startDiv = document.querySelector('.start')
const lesson = document.querySelector('.lesson')
const vocabulary = document.querySelector('.vocabulary')

startBtn.addEventListener('click', startGame)

function startGame() {
    startDiv.classList.add('hide')
    vocabulary.classList.remove('hide')
}

// ----- Section 3 - STORY ------------------------------
const storyBtn = document.querySelector('.storyBtn')
const storyDiv = document.querySelector('.story')

storyBtn.addEventListener('click', startStory)

function startStory() {
    storyDiv.classList.remove('hide')
    vocabulary.classList.add('hide')
}

// ----- Section 2 - VOCABULARY ------------------------------
const newWords = [{
    vocab: '(1) <b>Es</b> - <i>is</i>',
    video: "vid/voc-1.mp4"
}, {
    vocab: '(2) <b>Va</b> - <i>goes</i>',
    video: "vid/voc-2.mp4"
}, {
    vocab: '(3) <b>Quiere</b> - <i>wants</i>',
    video: "vid/voc-3.mp4"
}, {
    vocab: '(4) <b>Compra</b> - <i>buys</i>',
    video: "vid/voc-4.mp4"
}, {
    vocab: '(5) <b>Jugador</b> - <i>player</i>',
    video: "vid/voc-5.mp4"
}, {
    vocab: '(6) <b>Zapatos</b> - <i>shoes</i>',
    video: "vid/voc-6.mp4"
}, {
    vocab: '(7) <b>Tienda</b> - <i>store</i>',
    video: "vid/voc-7.mp4"
}, {
    vocab: '(8) <b>Un dia</b> - <i>1 day</i>',
    video: "vid/voc-8.mp4"
}, {
    vocab: '(9) <b>Si o No</b> - <i>Yes or No</i>',
    video: "vid/voc-9.mp4"
}, {
    vocab: '(10) <b>Porque</b> - <i>why/because</i>',
    video: "vid/voc-10.mp4"
}, {
    vocab: '(11) <b>Quien</b> - <i>who</i>',
    video: "vid/voc-11.mp4"
}, {
    vocab: '(12) <b>Que</b> - <i>what</i>',
    video: "vid/voc-12.mp4"
}, {
    vocab: '(13) <b>Donde</b> - <i>where</i>',
    video: "vid/voc-13.mp4"
}]

const prevBtn = document.querySelector('.prevBtn')
const nextBtn = document.querySelector('.nextBtn')
const words = document.querySelector('.words')
const vidDiv = document.querySelector('video')

let counter = 0;
prevBtn.addEventListener('click', prevVid)
nextBtn.addEventListener('click', nextVid)

function nextVid() {
    if (counter === 13) {
        counter = -1;
    }
    counter++;
    words.innerHTML = newWords[counter].vocab;
    vidDiv.src = newWords[counter].video;
}

function prevVid() {
    if (counter === 0) {
        counter = 14;
    }
    counter--;
    words.innerHTML = newWords[counter].vocab;
    vidDiv.src = newWords[counter].video;
}

// ----- Section 4 - QUIZ ------------------------------
const quizBtn = document.querySelector('.quizBtn')
const quiz = document.querySelector('.quiz')
const qVid = document.getElementById('vid')
const question = document.querySelector('.quizText')
const counterDiv = document.getElementById('counter')
const timeGauage = document.getElementById('timeGauge')
const choiceA = document.getElementById('A')
const choiceB = document.getElementById('B')
const progress = document.getElementById('progress')
const scoreDiv = document.querySelector('.score')

let questions = [{
    question: '<i>Paco es de Mexico si o no?</i>',
    vidSrc: "vid/ques-1.mp4",
    choiceA: 'Si',
    choiceB: 'No',
    correct: 'B'
}, {
    question: '<i>Quien es de Espania Paco or Felippe?</i>',
    vidSrc: "vid/ques-2.mp4",
    choiceA: 'Paco',
    choiceB: 'Felippe',
    correct: 'A'
}, {
    question: '<i>Paco es jugador professional de baseball o de tennis?</i>',
    vidSrc: "vid/ques-3.mp4",
    choiceA: 'baseball',
    choiceB: 'tennis',
    correct: 'B'
}, {
    question: '<i>Un dia, a donde va Paco?</i>',
    vidSrc: "vid/ques-4.mp4",
    choiceB: 'Discoteca',
    choiceA: 'Tienda',
    correct: 'A'
}, {
    question: '<i>Va a la discoteca Paco?</i>',
    vidSrc: "vid/ques-5.mp4",
    choiceA: 'Si',
    choiceB: 'No',
    correct: 'B'
}, {
    question: '<i>Por que va a latienda Paco?</i>',
    vidSrc: "vid/ques-6.mp4",
    choiceA: 'compra Rebook',
    choiceB: 'compra Nike',
    correct: 'B'
}, {
    question: '<i>Va a latienda porque quiere compra uno zapatos de Rebook?</i>',
    vidSrc: "vid/ques-7.mp4",
    choiceA: 'Si',
    choiceB: 'No',
    correct: 'B'
}]

// create some variables ---------------------------
const lastQuestion = questions.length - 1;
let runningQuestion = 0;
//counter render
let count = 0;
const questionTime = 10; //10s
const gaugeWidth = 320; //320px
const gaugeUnit = gaugeWidth / questionTime;
let timer;
let score = 0;
let counter2 = -1;

// render a question ------------------------------------
function renderQuestion() {
    // let q = questions[runningQuestion]; // avoid retyping
    // question.innerHTML = '<p>' + q.question + ' </p>';
    // qVid.innerHTML = "<video src=" + q.vidSrc + ">";

    counter2++;
    qVid.src = questions[counter2].vidSrc;
    question.innerHTML = questions[counter2].question;
    choiceA.innerHTML = questions[counter2].choiceA;
    choiceB.innerHTML = questions[counter2].choiceB;

    // choiceA.innerHTML = q.choiceA;
    // choiceB.innerHTML = q.choiceB;
}

// start quiz -------------------------------------
quizBtn.addEventListener('click', startQuiz)

function startQuiz() {
    renderQuestion();
    storyDiv.classList.add('hide')
    renderProgress();
    quiz.classList.remove('hide')
    renderCounter();
    timer = setInterval(renderCounter, 1000); // 1 second
}

// render progress -----------------------------------
function renderProgress() {
    for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
        progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
    }
}

function renderCounter() {
    if (count <= questionTime) {
        counterDiv.innerHTML = count;
        timeGauage.style.width = count * gaugeUnit + "px";
        count++;
    } else {
        count = 0;
        // answer is wrong
        // change progress color to red
        answerIsWrong();
        if (runningQuestion < lastQuestion) {
            runningQuestion++;
            renderQuestion();
        } else {
            // end the quiz and show the score
            clearInterval(timer);
            scoreRender();
        }
    }
}

// check answer -----------------------------------------------
function checkAnswer(answer) {
    if (answer == questions[runningQuestion].correct) {
        // answer is correct
        score++
        // change progress color to green
        answerIsCorrect();
    } else {
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
    } else {
        // end the quiz and show the score
        clearInterval(timer);
        scoreRender();
    }
}
// answer is correct
function answerIsCorrect() {
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is wrong
function answerIsWrong() {
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// -------- Score render -------------------------------------

function scoreRender() {
    // display score container
    scoreDiv.classList.remove('hide')
        // calculate the amount of question percent answered
    const scorePercent = Math.round(100 * score / questions.length);
    //choose images based on the score percent
    let img = (scorePercent >= 80) ? "img/5.png" :
        (scorePercent >= 60) ? "img/4.png" :
        (scorePercent >= 40) ? "img/3.png" :
        (scorePercent >= 20) ? "img/2.png" :
        "img/1.png";
    scoreDiv.innerHTML = "<img src=" + img + ">";
    scoreDiv.innerHTML += "<p>" + scorePercent + "%</p>";
    scoreDiv.appendChild(retellBtn)
}

// -------- story retell -------------------------------------

const retellBtn = document.querySelector('.retellBtn');
const retellDiv = document.querySelector('.retell');
const reloadBtn = document.querySelector('.reloadBtn')
retellBtn.addEventListener('click', startRetell);
reloadBtn.addEventListener('click', startReload)

function startRetell() {
    scoreDiv.classList.add('hide');
    quiz.classList.add('hide');
    retellDiv.classList.remove('hide')
}


function startReload() {
    window.location.reload();
}