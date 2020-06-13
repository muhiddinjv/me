document.addEventListener('keypress', addItem);
const ul = document.querySelector('ul');

function addItem(e) {
    const para = document.createElement('li');
    const code = e.key + "(" + e.keyCode + ")";
    const text = document.createTextNode(code);
    para.appendChild(text);
    ul.appendChild(para);
}