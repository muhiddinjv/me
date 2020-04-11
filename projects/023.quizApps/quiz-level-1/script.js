const questionNumberSpan = document.querySelector(".question-num-value"); //-7
const totalQuestionSpan = document.querySelector(".total-quesiton"); //-8
const question = document.querySelector(".question"); //-6
const op1 = document.querySelector(".option1"); //-1
const op2 = document.querySelector(".option2"); //-2
const op3 = document.querySelector(".option3"); //-3
const op4 = document.querySelector(".option4"); //-4
let questionIndex = 0;

// questions and options and answers

const questions = [{ //-5
    q: 'How do you call a function named "myFunction"?',
    options: ['myFunction()', 'call myFunction()', 'call function myFunction', 'all the above'],
    answer: 0
}, {
    q: 'How to write an IF statement?',
    options: ['if i == 5 then', 'if (i == 5)', 'if i = 5', 'if i = 5 then'],
    answer: 1
}, {
    q: 'How does a FOR loop start?',
    options: ['for (i = 0; i <= 5)', 'for (i <= 5; i++)', 'for i = 1 to 5', 'for (i = 0; i <= 5; i++)'],
    answer: 3
}, {
    q: 'How do you declare a JavaScript variable?',
    options: ['variable carName;', 'var carName;', 'v carName;', 'none of these'],
    answer: 1
}, {
    q: 'Which operator is used to assign a value to a variable?',
    options: ['-', '=', '+', '*'],
    answer: 1
}]

// set questions and options and question number
function load() {
    question.innerHTML = questions[questionIndex].q;
}

window.onload = function() {
    load(); //-9
}