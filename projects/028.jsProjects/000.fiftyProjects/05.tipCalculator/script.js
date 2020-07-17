const h2 = document.querySelector('h2');
const inp = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    let tip = (inp.value * 0.15).toFixed(2);
    h2.innerHTML = `You should tip $${tip} on ${inp.value}`;
})