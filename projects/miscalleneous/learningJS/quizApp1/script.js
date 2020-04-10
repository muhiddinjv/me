const startButton = document.getElementById('start-btn');
const questionContainerElement = document.getElementById('question-container');

const shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame);

function startGame() {
    alert('started');
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5)
        // Math.random = random number between 1 and 0
        // -.5 gives a number above or less than 0 50% of the time which is a random array
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}



function setNextQuestion() {}




function selectAnswer() {}


const questions = [{
    question: 'What is 2 + 2 ?',
    answers: [
        { text: '4', correct: true },
        { text: '22', correct: false },

    ]
}]