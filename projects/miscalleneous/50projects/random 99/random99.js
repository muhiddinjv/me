const minInp = document.querySelector('#min');
const maxInp = document.querySelector('#max');
const random = document.querySelector('#random');
const show = document.querySelector('#show');
const author = document.querySelector('#author');
const quote = document.querySelector('#quote');
const output = document.querySelector('.output');
const container = document.querySelector('.container');

// SHOW THE TEXT --------------------------------------
show.addEventListener('click', function() {
    container.classList.toggle('hide');
});

// BACKGROUND COLOR CHANGER ----------------------------
random.addEventListener('click', function() {
    let myColor = "#" + Math.random().toString(16).substr(-6);
    document.body.style.background = myColor;
});

// QUOTES ARRAY ------------------------------------------
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
    quote: 'For some people, life is a battle. For others, its a test. But to me life is a miracle. If one is curious enough, s/he can find the ways to literally work wonders.'
}]

// QUOTES CHANGER --------------------------------------
random.addEventListener('click', changeQuote)

function changeQuote() {
    let min = minInp.value;
    let max = maxInp.value;
    min = Math.ceil(min);
    max = Math.floor(max);
    let random = Math.floor(Math.random() * (max - min)) + min;
    author.innerHTML = quotes[random].name;
    quote.innerHTML = quotes[random].quote;
    output.innerHTML = random;
}