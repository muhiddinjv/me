/*
 * Programming Quiz: Murder Mystery (3-4)
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have a variables - `room`, `suspect`, `weapon`, and `solved`
 * 2. Your code should include a conditional statement
 * 3. The variable `suspect` should use one of the provided values
 * 4. The variable `weapon` should be based on the `room`
 * 5. Your code should produce the expected output: __________ did it in the __________ with the __________!
 * Example: Mr. Parkes did it in the dining room with the knife!
 *
 * 6. For unmatching combination of the suspect and the room, print nothing on the console
 */

/* ****************************************** */
/* TESTING LOGIC */
// Change the value of `room` and `suspect` to test your code

// A room can be either of - dining room, gallery, ballroom, or billiards room
var room = "billiards room";

// A suspect can be either of - Mr. Parkes, Ms. Van Cleve, Mrs. Sparr, or Mr. Kalehoff
// Test your code by giving matching as well as unmatching names of the suspect
var suspect = "Mrs. Sparr";

/* ****************************************** */

/* IMPLEMENTATION LOGIC*/

// Initial values
var weapon = "";
var solved = false;

/*
 * To help solve this mystery, write a combination of conditional statements that:
 * 1. sets the value of weapon based on the room and
 * 2. sets the value of solved to true if the value of room matches the suspect's room
 */
if (room === "gallery" && suspect === "Ms. Van Cleve") {
    solved = true;
    weapon = 'trophy';
    // BILLARDS
} else if (room === "billiards room" && suspect === "Mrs. Sparr") {
    solved = true;
    weapon = 'pool stick';
    // BALLROOM
} else if (room === "ballroom" && suspect === "Mr. Kalehoff") {
    solved = true;
    weapon = 'poison';
    // DINING ROOM
} else if (room === "dining room" && suspect === "Mr. Parkes") {
    solved = true;
    weapon = 'knife';
} else {
    console.log('lets be serious!');
}
/* ****************************************** */
// The code below will run only when `solved` is true
if (solved) {
    console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
}
/* ****************************************** */