// function person(first, last) {
//     this.firstName = first;
//     this.lastName = last;
// }

// person.prototype.fullName = function() {
//     return this.firstName + " " + this.lastName;
// }

// const me = new person("Muhiddin", "Ali");
// console.log(me.fullName());

// lesson challenge -------------------------
Date.prototype.addDays = function(days) {
    return new Date(this.valueOf() + days * 86e5);
}
console.log(new Date().addDays(777));