const url = "https://api.chucknorris.io/jokes/random";
const div = document.querySelector('.rect');
const btn = document.querySelector('button');

btn.addEventListener('click', getJoke);

function getJoke() {
    fetch(url)
        .then(function(rep) {
            return rep.json();
        })
        .then(function(data) {
            console.log(data);
            div.textContent = data.value;
        })
}