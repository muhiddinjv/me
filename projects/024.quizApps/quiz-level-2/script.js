const quotes = [{
    vocab: 'Thomas Edison',
    video: "vid/voc-1.mp4"
}, {
    vocab: 'George Bernard Shaw',
    video: "vid/voc-2.mp4"
}, {
    vocab: 'Abraham Lincoln',
    video: "vid/voc-3.mp4"
}, {
    vocab: 'Leonardo Da Vinci',
    video: "vid/voc-4.mp4"
}, {
    vocab: 'Muhiddin',
    video: "vid/voc-5.mp4"
}]

const prevBtn = document.querySelector('.prevBtn')
const nextBtn = document.querySelector('.nextBtn')
const words = document.querySelector('.words')
const vidDiv = document.querySelector('video')

let counter = 0;
prevBtn.addEventListener('click', prevVid)
nextBtn.addEventListener('click', nextVid)

function nextVid() {
    if (counter === 4) {
        counter = -1;
    }
    counter++;
    customer.innerHTML = quotes[counter].vocab;
    vidDiv.src = quotes[counter].video;
}

function prevVid() {
    if (counter === 0) {
        counter = 5;
    }
    counter--;
    customer.innerHTML = quotes[counter].vocab;
    vidDiv.src = quotes[counter].video;
}