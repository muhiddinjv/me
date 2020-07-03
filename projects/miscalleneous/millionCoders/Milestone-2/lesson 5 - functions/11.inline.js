// Function expression that assigns the function displayFavorite 
// to the variable favoriteMovie
var favoriteMovie = function displayFavorite(movieName) {
    console.log("My favorite movie is " + movieName);
};

// Function declaration that has two parameters: a function for displaying
// a message, along with a name of a movie
function movies(messageFunction, name) {
    messageFunction(name);
}

// Call the movies function, pass in the favoriteMovie function and name of movie
movies(favoriteMovie, "Finding Nemo");


/*
 * Programming Quiz: Inline Functions (5-6)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have an `emotions()` function
 * - Your code should call the `emotions()` function
 * - Your `emotions()` function call should have an inline function expression passed as the second parameter
 * - Your function expression should return the expected output
 */


// don't change this code
// emotions() function definition
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

// your code goes here
// Call the emotions() function with two arguments
// Argument 1 - "happy" string
// Argument 2 - an inline function expression
var result = emotions("happy", function(num) {
    var sound = "";
    for (var x = 0; x < num; x++) {
        sound = sound + "ha";
    }
    sound = sound + "!";
    return sound;
});

// GIVEN SOLUTION
emotions("happy", function(num) {
    var sound = ""; // Local variable
    //Iterate
    for (var i = 0; i < num; i++) {
        sound = sound + "ha";
    }
    sound = sound + "!";
    return sound;
});