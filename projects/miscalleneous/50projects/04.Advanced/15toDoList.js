const output = document.querySelector('div');
const url = "https://jsonplaceholder.typicode.com/todos";
loadJSON();

function loadJSON() {
    fetch(url).then(function(res) {
        return res.json();
    }).then(function(data) {
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            let div = document.createElement('div');
            if (element.completed) {
                div.style.color = 'green';
            } else {
                div.style.color = 'red';
            }
            div.textContent = element.id + ". " + element.title;
            output.appendChild(div);
        }
    })
}