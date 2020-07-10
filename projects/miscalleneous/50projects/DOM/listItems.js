// const inp = document.querySelector('input');
// const li = document.querySelectorAll('li');
// const del = document.querySelectorAll('span');
// const list = document.querySelector('#list');

// inp.addEventListener('keypress', function(e) {
//     if (e.keyCode === 13) {
//         console.log(e.keyCode);
//         makeNew();
//     }
// });

// function makeNew(e) {
//     let li = document.createElement('li');
//     let text = document.createTextNode(inp.value);
//     li.append(text);
//     list.appendChild(li);
// }

// for (let x = 0; x < li.length; x++) {
//     li[x].addEventListener('click', function(e) {
//         this.classList.toggle('red');
//         let del = document.createElement('span');
//         let delText = document.createTextNode(' X');
//         del.appendChild(delText);
//         li[x].appendChild(del);
//         console.log(e.target);
//     })
// }
// for (let x = 0; x < del.length; x++) {
//     del[x].addEventListener('click', function() {
//         this.parentElement.remove();
//     })
// }


// VIDEO SOLUTION ----------------------------------------
const input = document.querySelector('input');
const allListItems = document.querySelectorAll('li');
const mainList = document.querySelector('ul');
for (let x = 0; x < allListItems.length; x++) {
    allListItems[x].addEventListener('click', myList);
}

inp.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        makeNew();
    }
});

function makeNew() {
    let li = document.createElement('li');
    li.addEventListener('click', myList);
    let textValue = input.value;
    input.value = ""; // clears input box
    let textNode = document.createTextNode(textValue);
    li.appendChild(textNode);
    console.log(li);
    mainList.appendChild(li);
}

function myList() {
    let redLine = this.classList.toggle('red');
    if (redLine) {
        let span = document.createElement('span');
        span.textContent = ' X';
        span.addEventListener('click', function() {
            this.parentElement.remove();
        })
        this.appendChild(span);
    } else {
        this.getElementsByTagName('span')[0].remove();
    }
}