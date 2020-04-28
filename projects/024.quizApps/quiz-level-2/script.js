const startBtn = document.querySelector('.startBtn')
const startDiv = document.querySelector('.start')
const lesson = document.querySelector('.lesson')
const vocabulary = document.querySelector('.vocabulary')

startBtn.addEventListener('click', startGame)

function startGame() {
    startDiv.classList.add('hide')
    vocabulary.classList.remove('hide')
}

// ----- Section 3 - Story ------------------------------
const storyBtn = document.querySelector('.storyBtn')
const storyDiv = document.querySelector('.storyDiv')

storyBtn.addEventListener('click', startStory)

function startStory() {
    storyDiv.classList.remove('hide')
    vocabulary.classList.add('hide')
}

// ----- Section 2 - Vocabulary ------------------------------
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