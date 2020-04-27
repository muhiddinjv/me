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
    vocab: '(7) <b>La tienda</b> - <i>the store</i>',
    video: "vid/voc-7.mp4"
}, {
    vocab: '(8) <b>Un dia</b> - <i>1 day</i>',
    video: "vid/voc-8.mp4"
}]

const prevBtn = document.querySelector('.prevBtn')
const nextBtn = document.querySelector('.nextBtn')
const words = document.querySelector('.words')
const vidDiv = document.querySelector('video')

let counter = 0;
prevBtn.addEventListener('click', prevVid)
nextBtn.addEventListener('click', nextVid)

function nextVid() {
    if (counter === 8) {
        counter = -1;
    }
    counter++;
    words.innerHTML = newWords[counter].vocab;
    vidDiv.src = newWords[counter].video;
}

function prevVid() {
    if (counter === 0) {
        counter = 9;
    }
    counter--;
    words.innerHTML = newWords[counter].vocab;
    vidDiv.src = newWords[counter].video;
}