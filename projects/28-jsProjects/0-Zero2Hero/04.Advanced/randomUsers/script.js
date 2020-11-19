const url = "https://randomuser.me/api";
const output = document.querySelector('.output')

function getUsers() {
    let num = prompt('how many users do you want to see? Enter a number!');
    let temp = url + '?results=' + num;
    console.log(temp);
    fetch(temp)
        .then(function(rep) {
            return rep.json();
        })
        .then(function(data) {
            let person;
            for (let i = 0; i < data.results.length; i++) {
                const el = data.results[i];
                person += `
                      <div id="card">
                        <h1>${el.name.first} ${el.name.last}</h1>
                        <div class="image-crop">
                            <img id="avatar" src="${el.picture.medium}"/>
                        </div>
                        <div id="bio">
                            <p>Hello, my name is ${el.name.title} ${el.name.last} but you can call me ${el.name.first}! I am ${el.dob.age} years old. I come from ${el.location.city} city which is located in ${el.location.state} state in ${el.location.country}. I live in ${el.location.street.name} street. I have been a member of this website for ${el.registered.age} years. You can call me at ${el.phone} or email me at ${el.email}. It's nice to meet you. Have a good day!
                            </p>
                        </div>
                        <div id="stats">
                            <div class="col">
                                <p class="stat">${el.dob.age}</p>
                                <p class="label">Age</p>
                            </div>
                            <div class="col">
                                <p class="stat">${el.nat}</p>
                                <p class="label">Nationality</p>
                            </div>
                            <div class="col">
                                <p class="stat">${el.location.postcode}</p>
                                <p class="label">Postcode</p>
                            </div>
                        </div>
                        <div id="buttons">
                            <button>Follow</button>
                            <button id="msg">Message</button>
                        </div>
                      </div>
                    `;
            }
            output.innerHTML = person;
            console.log(data.results);
        })
}
getUsers();