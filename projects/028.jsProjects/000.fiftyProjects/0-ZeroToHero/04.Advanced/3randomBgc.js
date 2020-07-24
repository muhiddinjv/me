const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    const color = "#" + Math.random().toString(16).substr(-6);
    document.body.style.background = color;
})