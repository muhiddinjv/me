const minInp = document.querySelector('#min');
const maxInp = document.querySelector('#max');
const random = document.querySelector('#random');
const show = document.querySelector('#show');
const text = document.querySelector('#text');
const author = document.querySelector('#author');
const quote = document.querySelector('#quote');
const output = document.querySelector('.output');
const id = document.querySelector('#id');

const hexValue = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

random.addEventListener('click', changeColor);

function changeColor() {
    let hex = "#"
    for (let i = 0; i < 6; i++) {
        const index = Math.floor(Math.random() * hexValue.length)
        hex += hexValue[index]
    }
    document.body.style.background = hex;
}


const container = document.querySelector('.container');
random.addEventListener('click', getData)
show.addEventListener('click', function() {
    container.classList.toggle('hide');
});

// AJAX ------------------------------------
function getData() {
    // 1- Create the new XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    // 2 - Open the connection
    xhr.open('GET', 'names99.json', true);

    // 3 - Execution of the ajax call
    xhr.onload = function() {
        if (this.status === 200) {
            console.log(JSON.parse(this.responseText));
            // output.innerHTML = `<h1>${this.responseText}</h1>`;

            // Get the response as an object
            const object = JSON.parse(this.responseText);

            // Build the Template
            const result = `
                <ul>
                    <li>ID: ${object.id}</li>
                    <li>Name: ${object.name}</li>
                    <li>Quote: ${object.quote}</li>
                </ul>
            `;
            // btn.addEventListener('click', changeQuote);

            // function changeQuote() {
            //     let min = minInp.value;
            //     let max = maxInp.value;
            //     min = Math.ceil(min);
            //     max = Math.floor(max);
            //     let random = Math.floor(Math.random() * (max - min)) + min;
            //     author.innerHTML = object[0].name;
            //     quote.innerHTML = object[0].quote;
            //     output.innerHTML = random;
            // }
            output.innerHTML = result;
            console.log(result);


        } else {
            console.log(this.statusText);
        }
    };
    xhr.onerror = function() {
        console.log('there was an error');
    };
    // 4 - Send the request
    xhr.send();
};
text.addEventListener('click', function() {
    getData('names99.json');
});

// ----------------------------------------
/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */
// function shuffleArray(array) {
//     for (var i = array.length - 1; i > 0; i--) {
//         var j = Math.floor(Math.random() * (i + 1));
//         var temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//     }
// }