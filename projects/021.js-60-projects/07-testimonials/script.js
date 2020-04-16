const quotes = [{
    name: 'Thomas Edison',
    quote: 'Opportunity is missed by most people, because it is dressed in overalls and looks like work'
}, {
    name: 'George Bernard Shaw',
    quote: 'Progress is impossible without change, and those who cannot change their minds cannot change anything'
}, {
    name: 'Abraham Lincoln',
    quote: 'I\'m a success today because I had a friend who believed in me and I didnt have the heart to let him down'
}, {
    name: 'Leonardo Da Vinci',
    quote: 'It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happend to things.'
}, {
    name: 'Muhiddin',
    quote: 'For some people, life is a battle. For others, its a test. But to me life is a miracle. If one is curious enough, s/he can literally work wonders.'
}]

const images = document.querySelector('.images')
const prevBtn = document.querySelector('.prevBtn')
const nextBtn = document.querySelector('.nextBtn')
const customer = document.querySelector('.customer')
const text = document.querySelector('#text')

let counter = 0;
// prevBtn.addEventListener('click', changeQuote)
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
        duration: 500,
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
}

function prevImg() {
    images.animate([{
        opacity: '0.1'
    }, {
        opacity: '1.0'
    }], {
        duration: 500,
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
}