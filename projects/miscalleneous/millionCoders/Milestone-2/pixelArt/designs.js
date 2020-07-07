// Select color input
const colorPicker = document.getElementById('colorPicker');
const inputHeight = document.getElementById('inputHeight');
const inputWidth = document.getElementById('inputWidth');
const pixelCanvas = document.getElementById('pixelCanvas');
const sizePicker = document.getElementById('sizePicker');
const submit = document.getElementById('submit');
// Select size input

submit.addEventListener('click', (e) => {
        e.preventDefault(); // dont refresh after submitting
        // console.log(inputHeight.value, inputWidth.value);
        // console.log(colorPicker.value);
        pixelCanvas.firstChild.remove();
        makeGrid(inputHeight, inputWidth);
    })
    // When size is submitted by the user, call makeGrid()

function makeGrid(height, width) {
    // Your code goes here!
    console.log(height.value, width.value);
    for (let i = 0; i < height.value; i++) {
        let row = document.createElement('tr');
        for (let x = 0; x < width.value; x++) {
            let tbody = document.createElement('td');
            row.appendChild(tbody);
        }
        pixelCanvas.appendChild(row);
    }
}