const quotes = [{
    name: 'Stephen King',
    quote: 'Get busy living or get busy dying'
}, {
    name: 'John F. Kennedy',
    quote: 'Those who dare to fail miserabley can achieve greatly'
}, {
    name: 'Abraham Lincoln',
    quote: 'I\'m a success today because I had a friend who believed in me and I didnt have the heart to let him down'
}, {
    name: 'Leonardo Da Vinci',
    quote: 'It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happend to things.'
}, {
    name: 'Leo Tolstoy',
    quote: 'If you want to be happy, be.'
}, {
    name: 'Muhiddin',
    quote: 'For some people, life is a battle. For others, its a test. But to me life is a miracle. If one is curious enough, s/he can literally work wonders.'
}]

const images = document.querySelector('.images')
const prevBtn = document.querySelector('.prevBtn')
const nextBtn = document.querySelector('.nextBtn')
const customer = document.querySelector('.customer')
const quote = document.querySelector('#quote')

let counter = 0;
prevBtn.addEventListener('click', changeQuote)
prevBtn.addEventListener('click', prevImg)
nextBtn.addEventListener('click', nextImg)

function changeQuote() {
    let random = Math.floor(Math.random() * quotes.length)
    customer.innerHTML = quotes[random].name;
    text.innerHTML = quotes[random].quote;
}

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