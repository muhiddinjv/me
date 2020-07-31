const options = document.querySelector('.options').children; //-32
const answerTrackerContainer = document.querySelector('.answer-tracker'); //-36
const questionNumberSpan = document.querySelector(".question-num-value"); //-7
const totalQuestionSpan = document.querySelector(".total-question"); //-8
const correctAnswerSpan = document.querySelector('.correct-answers'); //-65
const totalQuestionSpan2 = document.querySelector('.total-question2'); //-66
const percentage = document.querySelector('.percentage'); //-67
const question = document.querySelector(".question"); //-6
const op1 = document.querySelector(".option1"); //-1
const op2 = document.querySelector(".option2"); //-2
const op3 = document.querySelector(".option3"); //-3
const op4 = document.querySelector(".option4"); //-4
let questionIndex; //-10
let index = 0; //-15
let myArray = []; //-48
// to test, create a new array to push quizIndex value to know value Duplicate or not
let myArr = [];
let score = 0; //-63

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
totalQuestionSpan.innerHTML = questions.length; //-18
function load() {
    questionNumberSpan.innerHTML = index + 1; //-16
    question.innerHTML = questions[questionIndex].q; //-10
    op1.innerHTML = questions[questionIndex].options[0]; //-11
    op2.innerHTML = questions[questionIndex].options[1]; //-12
    op3.innerHTML = questions[questionIndex].options[2]; //-13
    op4.innerHTML = questions[questionIndex].options[3]; //-14
    index++; //-17
}

function check(element) { //-24
    // now let's check if the option is correct or not
    // console.log(element.id); //-25
    if (element.id == questions[questionIndex].answer) {
        // console.log("correct") //-26
        element.classList.add("correct"); //-28
        updateAnswerTracker("correct"); //-41
        score++; //-64
        // console.log("score: " + score);
    } else {
        // console.log("wrong") //-27
        element.classList.add("wrong"); //-29
        updateAnswerTracker("wrong"); //-42
    }
    //if the user selected one option then disable the rest
    disabledOptions(); //-30
}

function disabledOptions() { //-31
    for (let i = 0; i < options.length; i++) {
        //below i disabled all the options. For next question, i have to enable again.
        options[i].classList.add("disabled"); //-33
        // now you can't reselect other options
        // if (options[i].id == questions[questionIndex].answer) {
        //     options[i].classList.add("correct"); //-34
        // } // if you want to show the correct answer
    }
}

function enableOptions() { //-46
    for (let i = 0; i < options.length; i++) {
        options[i].classList.remove("disabled", "correct", "wrong");
    }
}

function validate() {
    if (!options[0].classList.contains("disabled")) {
        // if options[0] doesn't have class "disabled"
        alert("Please Select One Option"); //-45
    } else {
        enableOptions() //-47
        randomQuestion();
    }
}

function next() {
    // before going to the next question, check if the user selected any option
    // if the user didn't select any options, alert "select one option"
    validate(); //-44
}

function randomQuestion() { //-19
    let randomNumber = Math.floor(Math.random() * questions.length); //-22
    let hitDuplicate = 0; //-55
    if (index == questions.length) { //-50
        quizOver(); //-61
        // alert('quiz over');
    } else {
        if (myArray.length > 0) { //-51
            for (let i = 0; i < myArray.length; i++) { //-53
                if (myArray[i] == randomNumber) { //-56
                    hitDuplicate = 1;
                    break;
                    // if myArray[item] equals to randomNumber then duplicate found
                    // if found, then hitDuplicate=1 and break the for loop
                }
            }
            // if hitDuplicate found then call randomQuestion() again
            if (hitDuplicate == 1) { //-57
                randomQuestion();
            } else { //-58
                questionIndex = randomNumber;
                load();
                myArr.push(questionIndex); //-60
                // 0,1,2,3,4 all questions are one now and no duplicates
            }
        }
        if (myArray.length == 0) { //-52
            questionIndex = randomNumber;
            load();
            myArr.push(questionIndex); //-59
        }
        //console.log("index: " + index); //check removed duplicates
        // questionIndex = randomNumber; //-23
        //Below code checks question duplicacy
        // myArray.push(questionIndex); //-49
        // console.log("myArr: " + myArr);
        myArray.push(randomNumber); //-54
        // console.log("myArray:" + myArray);
        // question 4 is repeating 3 times, let's remove the duplicate.
        // load(); //-20
    }
}

function answerTracker() { //-35
    for (let i = 0; i < questions.length; i++) {
        const div = document.createElement("div") //-37
        answerTrackerContainer.appendChild(div); //-38
    }
}

function updateAnswerTracker(className) { //-40
    answerTrackerContainer.children[index - 1].classList.add(className); //-43
}

function quizOver() { //-62
    // console.log('its working');
    document.querySelector('.quiz-over').classList.add('show'); //-68
    correctAnswerSpan.innerHTML = score;
    totalQuestionSpan2.innerHTML = questions.length;
    percentage.innerHTML = (score / questions.length) * 100 + "%"; //-69
}

function tryAgain() {
    window.location.reload();
}

window.onload = function() {
    // load(); //-9
    randomQuestion() //-21
    answerTracker() //-39
}