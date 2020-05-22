// Challenge #4 - Loops Array builder
/* 1 - Create an array that contains objects created dynamically using a loop. Output the content into the console so it looks like the example on the right.*/
/* 2 - Use filter to create a new array with only the items that have a value of true */
let myLoop = [];
for (let i = 0; i < 10; i++) {
    let stat = i % 2 ? true : false;
    let temp = {
        name: `Lesson ${i}`,
        status: stat
    }
    myLoop.push(temp);
}
console.table(myLoop);

let getTrue = myLoop.filter(function(e) {
    return e.status;
})
console.table(getTrue);