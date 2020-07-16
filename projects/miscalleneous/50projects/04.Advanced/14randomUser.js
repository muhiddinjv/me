const url = "https://randomuser.me/api";
const div = document.querySelector('.rect');
const btn = document.querySelector('button');
const inp = document.createElement('input');
const output = document.querySelector('.output');
inp.setAttribute('type', 'number');
inp.setAttribute('value', 3);
document.body.appendChild(inp);
btn.addEventListener('click', getUsers);

function getUsers() {
    let temp = url + '?results=' + inp.value;
    fetch(temp)
        .then(function(rep) {
            return rep.json();
        })
        .then(function(data) {
            console.log(data.results);
            let person;
            for (let i = 0; i < data.results.length; i++) {
                const el = data.results[i];
                // person += el.name.first + '' +
                // el.name.last + '<br>';
                person += `
                      <ul>
                        <li>FULL NAME</li>
                        <ul>
                          <li>first: ${el.name.first}</li>
                          <li>last: ${el.name.last}</li>
                          <li>title: ${el.name.title}</li>
                        </ul>
                        <li>DATE OF BIRTH</li>
                        <ul>
                          <li>age: ${el.dob.age}</li>
                          <li>date: ${el.dob.date}</li>
                        </ul>
                        <li>email: ${el.email}</li>
                        <li>cell: ${el.cell}</li>
                        <li>LOCATION</li>
                        <ul>
                          <li>country: ${el.location.country}</li>
                          <li>state: ${el.location.state}</li>
                          <li>city: ${el.location.city}</li>
                          <li>postcode: ${el.location.postcode}</li>
                        </ul>
                        <li> 
                          <img src="${el.picture.large}">
                        </li>
                      </ul>
                    `;
            }
            output.innerHTML = person;
            // 
        })
}