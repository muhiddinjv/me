/*
 * Global scope. 
 * This variable declared outside of any function is called Global variable. 
 * Hence, you can use this anywhere in the code
 */
var opinion = "This nanodegree is amazing";

// Function scope
function showMessage() {
    // Local variable, visible within the function `showMessage`
    var message = "I am an Udacian!";

    // Block scope
    {
        let greet = "How are you doing?";
        /*
         * We have used the keyword `let` to declare a variable `greet` because variables declared with the `var` keyword can not have Block Scope. 
         */
    } // block scope ends

    console.log(message); // OK
    console.log(greet); // ERROR. 
    // Variable greet can NOT be used outside the block

    console.log(opinion); // OK    to use the gobal variable anywhere in the code

} // function scope ends