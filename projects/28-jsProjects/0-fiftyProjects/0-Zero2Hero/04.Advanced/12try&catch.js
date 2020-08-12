const inp = document.createElement('input');
const btn = document.createElement('button');
const txt = document.createTextNode('click');
const output = document.querySelector('.output');
btn.appendChild(txt)
inp.setAttribute('type', 'text');
inp.setAttribute('value', '10');
document.body.appendChild(inp);
document.body.appendChild(btn);
btn.addEventListener('click', tester);

function tester() {
    let num = inp.value;
    try {
        if (num === "") throw "No Value";
        if (isNaN(num)) throw "not a number";
        num = Number(num);
        if (num > 5) throw "over 5";
        if (num < 5) throw "under 5";
    } catch (error) {
        console.log(error);
    } finally {
        inp.value = "";
    }
    output.innerHTML = num * 10;
}