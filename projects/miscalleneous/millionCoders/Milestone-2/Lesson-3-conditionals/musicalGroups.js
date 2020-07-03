/*
 * Programming Quiz: Musical Groups (3-3)
 */
/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have a variable `musicians`, and include `if...else if...else` conditional statement
 * 2. Your code should produce the expected output, as mentioned above. Read each condition carefully. 
 */

// change the value of `musicians` to test your conditional statements
var musicians = prompt('enter number 0-4');

// your code goes here
if (musicians <= 0) {
    document.write("not a group");
} else if (musicians == 1) {
    document.write("solo");
} else if (musicians == 2) {
    document.write("duet");
} else if (musicians == 3) {
    document.write("trio");
} else if (musicians == 4) {
    document.write("quartet");
} else if (musicians > 4) {
    document.write("this is a large group");
}