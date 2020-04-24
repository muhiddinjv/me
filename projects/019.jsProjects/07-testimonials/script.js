const quotes = [{
    name: 'Thomas Edison',
    quote: 'Opportunity is missed by most people, because it is dressed in overalls and looks like work'
        // video: "vid/voc-1.mp4"
}, {
    name: 'George Bernard Shaw',
    quote: 'Progress is impossible without change, and those who cannot change their minds cannot change anything'
        // video: "vid/voc-2.mp4"
}, {
    name: 'Abraham Lincoln',
    quote: 'I\'m a success today because I had a friend who believed in me and I didnt have the heart to let him down'
        // video: "vid/voc-3.mp4"
}, {
    name: 'Leonardo Da Vinci',
    quote: 'It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happend to things.'
        // video: "vid/voc-4.mp4"
}, {
    name: 'Muhiddin',
    quote: 'For some people, life is a battle. For others, its a test. But to me life is a miracle. If one is curious enough, s/he can find the ways to literally work wonders.'
        // video: "vid/voc-5.mp4"
}]

const images = document.querySelector('.images')
const prevBtn = document.querySelector('.prevBtn')
const nextBtn = document.querySelector('.nextBtn')
const customer = document.querySelector('.customer')
const text = document.querySelector('#text')
    // const vidDiv = document.querySelector('video')

let counter = 0;
prevBtn.addEventListener('click', prevImg)
prevBtn.addEventListener('click', prevText)
nextBtn.addEventListener('click', nextImg)
nextBtn.addEventListener('click', nextText)

function nextImg() {
    images.animate([{
        opacity: '0.1'
    }, {
        opacity: '1.0'
    }], {
        duration: 300,
        fill: 'forwards'
    });
    if (counter === 4) {
        counter = -1;
    }
    counter++;
    images.style.backgroundImage = `url(img/bg-${counter}.jpg)`
}

function nextText() {
    if (counter === 4) {
        counter = -1;
    }
    counter++;
    customer.innerHTML = quotes[counter].name;
    text.innerHTML = quotes[counter].quote;
    // vidDiv.src = quotes[counter].video;
}

function prevImg() {
    images.animate([{
        opacity: '0.1'
    }, {
        opacity: '1.0'
    }], {
        duration: 300,
        fill: 'forwards'
    });
    if (counter === 0) {
        counter = 5;
    }
    counter--;
    images.style.backgroundImage = `url(img/bg-${counter}.jpg)`
}

function prevText() {
    if (counter === 0) {
        counter = 5;
    }
    counter--;
    customer.innerHTML = quotes[counter].name;
    text.innerHTML = quotes[counter].quote;
    // vidDiv.src = quotes[counter].video;
}