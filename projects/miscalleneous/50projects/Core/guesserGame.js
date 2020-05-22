// A function can refer to and call itself
let secretNum = 5;
let guess;

let guesser = () => {
    let guess = prompt('Guess a Number');
    let guessNum = Number(guess);

    if (guessNum === secretNum) {
        console.log('You Got it! Awesome sauce!');
        return;
    } else {
        let message = (guessNum < secretNum) ? 'higher' : 'lower';
        console.log('Wrong again. Go ' + message);
        guesser();
    }
}
guesser();