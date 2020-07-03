/*
 * Programming Quiz: Build A Triangle (5-3)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a `buildTriangle()` function
 * - Your `buildTriangle()` function should take one argument (or you can say parameter)
 * - Your `laugh()` function should build the triangle as describe above
 */



// creates a line of * for a given length
// GIVEN CODE------------------------------
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

// STACKOVERFLOW ----------------------------
// function makeLine(length) {
//     // length has the number of lines the triangle should have
//     var line = "";
//     for (var i = 1; i <= length; i++) {
//         // Enter the first for loop for the number of lines
//         for (var j = 1; j <= i; j++) {
//             // Enter the second loop to figure how many *'s to print based on the current line number in i. So the 1st line will have 1 *, the second line will have 2 *s and so on.
//             line += "*";
//         }
//         // Add a newline after finishing printing the line and move to the next line in the outer for loop
//         line += "\n";

//     }
//     // Print an additional newline "\n" if desired.
//     return line + "\n";
// }


// SOLUTION ----------------------
function buildTriangle(length) {
    var triangle = "";
    var lineNum = 1;
    for (lineNum = 1; lineNum <= length; lineNum++) {
        triangle = triangle + makeLine(lineNum);
    }
    return triangle;
}

// // test your code by uncommenting the following line
console.log(buildTriangle(10));