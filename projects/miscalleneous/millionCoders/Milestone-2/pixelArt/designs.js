// Select color input
const colorPicker = document.querySelector('#colorPicker');
const inputHeight = document.querySelector('#inputHeight');
const inputWidth = document.querySelector('#inputWidth');
const pixelCanvas = document.querySelector('#pixelCanvas');
const sizePicker = document.querySelector('#sizePicker');
const submit = document.querySelector('#submit');
const row = document.getElementsByTagName('td');
// Select size input

submit.addEventListener('click', (e) => {
        e.preventDefault(); // stops refresh after submitting
        // console.log(inputHeight.value, inputWidth.value);
        // console.log(colorPicker.value);
        // pixelCanvas.removeChild();
        makeGrid(inputHeight, inputWidth);
    })
    // When size is submitted by the user, call makeGrid()

function makeGrid(height, width) {
    // Your code goes here!
    for (let i = 0; i < height.value; i++) {
        let row = document.createElement('tr');
        for (let x = 0; x < width.value; x++) {
            let tbody = document.createElement('td');
            row.appendChild(tbody);
        }
        pixelCanvas.appendChild(row);
    }
    for (let i = 0; i < row.length; i++) {
        row[i].addEventListener('click', (e) => {
            row[i].style.background = colorPicker.value;
        })
    }
}