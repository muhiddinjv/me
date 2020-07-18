const myArr = ["lion", "cougar", "bark"];
document.addEventListener('DOMContentLoaded', start);

function start() {
    let container = document.createElement('div');
    container.setAttribute('class', 'container');
    document.body.appendChild(container);

    myArr.forEach(function(item) {
        let div = document.createElement('div');
        div.setAttribute('class', 'box ' + item);
        // div.innerText = item.toUpperCase();
        div.innerText = item;
        div.addEventListener('click', () => {
            playIt(item);
        })
        container.appendChild(div);
    })
}

function playIt(name) {
    let activeEl = document.querySelector("." + name);
    let sounds = new Audio(`sound/${name}.mp3`);
    sounds.play()
    activeEl.classList.add('active');
    setTimeout(function() {
        activeEl.classList.remove('active');
    }, 500);
}

// MY VERSION ------------------------------------------
// three <button>animal name</button> in HTML
// const btns = document.querySelectorAll('button');

// for (let i = 0; i < btns.length; i++) {
//     const el = btns[i];
//     el.addEventListener('click', function(e) {
//         let sounds = new Audio(`sound/${e.target.innerText}.mp3`);
//         sounds.play();
//     })
// }