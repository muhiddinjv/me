const div = document.querySelector('.rect');
div.style.width = "100px";
div.style.height = "123px";
div.style.position = "absolute";
div.style.left = "55px";
div.style.top = "74";
div.style.background = "blue";
console.log(div.getBoundingClientRect());