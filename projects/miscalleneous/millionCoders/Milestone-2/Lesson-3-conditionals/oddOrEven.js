var number = prompt('Enter any number');
// Note that a strict equality operator === checks the equality of operands without type conversion.
if (0 === number % 2) {
    document.write("even");
} else {
    document.write("odd");
}