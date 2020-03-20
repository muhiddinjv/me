// function displayInfoPanel(evt) {
//     console.log(this);
// }

// function hideInfoPanel(evt) {
//     console.log(this);
// }
// $('.menu-item > a').on("mouseover", displayInfoPanel);
// $('.menu-item > a').on("mouseout", hideInfoPanel);


// Lesson 92 - Using jQuery-theDOM 
/* we can remove these 2 ones for the toggle version...
function displayInfoPanel(evt) {
    $(this).siblings('.menu-item-info').addClass('is-visible');
}

function hideInfoPanel(evt) {
    $(this).siblings('.menu-item-info').removeClass('is-visible');
}
*/

function toggleInfoPanel(evt) {
    $(this).siblings('.menu-item-info').toggleClass('is-visible');
}

//or
/*
$('.menu-item > a').mouseover(toggleInfoPanel);
$('.menu-item > a').mouseout(toggleInfoPanel);
*/

//jQuery calls can be chained!
// $('.menu-item > a').on("mouseover", toggleInfoPanel)
//     .on("mouseout", toggleInfoPanel);

//you can provide multiple events name in the "on" call!
$('.menu-item > a').on("mouseover mouseout", toggleInfoPanel);