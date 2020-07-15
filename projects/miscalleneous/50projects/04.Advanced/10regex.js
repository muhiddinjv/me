// let myStr = "Hello World Javascript 123 this works I love javascript 44";
// let reg = /(\w+)\s(\w+)/;
// let temp = myStr.replace(reg);
// temp = myStr.replace(reg, "Bye People");
// console.log(temp);
// console.log(myStr.match(/J/gi));
// console.log(/Javascript/.test(myStr));
// console.log(/[0-9]/.test(myStr));
// console.log(/\d+/.exec(myStr)); // look for all digits (string + number)
// const arr = ["one", "two", "three", "four"];
// const temp1 = arr.toString();
// const temp3 = arr.join("...")
// console.log(temp3);
// console.log(temp3.search(/two/));
// console.log(temp3.match(/two/gi));

// Lesson Challenge -----------------------------
let myStr2 = "HelloWorld JavaScript 123 this works sometestemail@gmail.com I love JavaScript 44 sample@email.com";
let exp2 = /([A-Za-z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g;
let emailData = myStr2.match(exp2);
for (let x = 0; x < emailData.length; x++) {
    console.log(emailData[x]);
}