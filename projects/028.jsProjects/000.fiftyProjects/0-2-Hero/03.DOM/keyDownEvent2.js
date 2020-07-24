const div = document.querySelector('div');
const ele = document.querySelector('#inp');
ele.addEventListener('keypress', function(e) {
    div.innerHTML += e.key + "(" + e.keyCode + ")<br>";
    console.log(e.key);
    e.preventDefault();
});