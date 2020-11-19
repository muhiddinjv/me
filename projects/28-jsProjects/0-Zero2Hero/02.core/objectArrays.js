// <button onclick="per()">press</button>
const person = {
    name: ['Muhiddin ', 'Ali'],
    age: 33,
    gender: 'male',
    interests: ['islam', ' coding', ' ebiz'],
    bio: function() {
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age}`)
    },
    greeting: function() {
        alert(`Hi I'm ${this.name[0]}.`);
        // open the console and type "person.greeting()"
    }
}

const car = {
    owner: 'Muhiddin',
    model: 'Lambo',
    topSpeed: 450,
    color: 'orange',
    year: 2020,
    turn: function() {
        console.log(`You started your ${this.model}... wrooom!`);
    },
    drive: function() {
        console.log(`You're driving your ${this.model} ${this.owner}`);
    }
}

function per() {
    document.getElementById('head').innerHTML = person.interests;
}