// Variables








// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Create the <option> for the years
    const html = new HTMLUI();
    html.displayYears();
});






// Objects
function HTMLUI() {}
// Displays the latest 20 years in the select
HTMLUI.prototype.displayYears = function() {
    // Max and minimum years
    const max = new Date().getFullYear(),
        min = max - 20;

    // generate the list with the latest 20 years
    const selectYears = document.getElementById('year');

}