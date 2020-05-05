const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBar = document.getElementById('progressBar');
const loader = document.getElementById('loader');
const game = document.getElementById('game');
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [];
fetch("questions.json").then(res => {
        console.log(res);
        return res.json();
    }).then(loadedQuestions => {
        console.log(loadedQuestions);
        questions = loadedQuestions;
        startGame();
    }).catch(err => {
        console.error(err);

    })
    // CONTSTANTS ---------------------------------------------
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 10;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
    getNewQuestion();
    game.classList.remove('hidden');
    loader.classList.add('hidden');
}

getNewQuestion = () => {
    // getNewQues=()=>{} is new ES6 conscise function
    // function getNewQuestion(){} is old javascript
    if (availableQuesions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        // go to the end page
        return window.location.assign('/end.html');
    }
    questionCounter++;
    // questionCounterText.innerText = questionCounter + "/" + MAX_QUESTIONS; old javascript
    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
    // update the progress bar

    progressBarFull.style.width = `${questionCounter / MAX_QUESTIONS * 100}%`;

    const questionIdex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIdex];
    question.innerText = currentQuestion.question;
    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });
    availableQuesions.splice(questionIdex, 1);
    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return;
        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
        let classToApply = 'incorrect';
        if (selectedAnswer == currentQuestion.answer) {
            classToApply = 'correct';
        }

        if (classToApply === 'correct') {
            incrementScore(CORRECT_BONUS);
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion();
        }, 1000)

    });
});

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
}