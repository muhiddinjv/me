const minInp = document.querySelector('#min');
const maxInp = document.querySelector('#max');
const btn = document.querySelector('#btn');
const show = document.querySelector('#show');
const output = document.querySelector('.output');
const hexValue = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

btn.addEventListener('click', randomNum)
btn.addEventListener('click', changeColor);

function randomNum() {
    let min = minInp.value;
    let max = maxInp.value;
    min = Math.ceil(min);
    max = Math.floor(max);
    let num = Math.floor(Math.random() * (max - min)) + min;
    output.innerHTML = num;
}

function changeColor() {
    let hex = "#"
    for (let i = 0; i < 6; i++) {
        const index = Math.floor(Math.random() * hexValue.length)
        hex += hexValue[index]
    }
    document.body.style.background = hex;
}

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

const author = document.querySelector('#author')
const quote = document.querySelector('#quote')
show.addEventListener('click', changeQuote)

function changeQuote() {
    let random = Math.floor(Math.random() * quotes.length)
    author.innerHTML = quotes[random].name;
    quote.innerHTML = quotes[random].quote;
}