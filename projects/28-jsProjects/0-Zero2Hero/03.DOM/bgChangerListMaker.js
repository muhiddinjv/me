/* .flex {
            display: flex;
            flex-wrap: wrap;
        }
        
        .flex>div {
            margin: 11px;
            border: 2px solid black;
            padding: 40px;
            font-size: 22px;
        } 
*/

// background changer
const btn = document.getElementById('btn');

function random(num) {
    return Math.floor(Math.random() * (num + 1));
}
btn.addEventListener('click', function() {
    let bgColor = "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
    document.body.style.background = bgColor;
})

// list items
const ul = document.querySelector('ul');
const inp = document.querySelector('input');
btn.addEventListener('click', function() {
    let li = document.createElement('li');
    let text = document.createTextNode(inp.value);
    li.appendChild(text);
    ul.appendChild(li);
})