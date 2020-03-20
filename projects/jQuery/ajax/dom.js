
// var technologies = ["HTML", "CSS", "Javascript", "DOM"];

// function createMenu( items ) {
//     //lets create a new element for containing the menu
//     var menu = document.createElement("ul");

//     //iterate over the items and create one LI for each item
//     items.forEach(function(element, index, array) {
//         var menuItem = document.createElement("li");
//         var textNode = document.createTextNode(element);
//         menuItem.appendChild(textNode);

//         menu.appendChild(menuItem);
//     });

//     document.body.appendChild(menu);
// }
// createMenu(technologies);



//87.DOM Event handing exercise (part 1)
//grab a refernce to all the menu links
var $menuLinks = document.querySelectorAll(".menu-item > a");
// the dollar ($) is a personal preference used to refer to
// all the elements in the page. It helps me to distinguish
//  (A) which variables are used to store data
//  (B) which variable are refercing an html object in the page

function getInfoPanelElement(element) {
    var $infoPanel = element.parentNode.querySelector(".menu-item-info");
    return $infoPanel;
}

function displayInfoPanelForElement(event) {
    var $anchor = event.target;
    //make the panel visible!
    //Note: classList is available only on IE10+
    getInfoPanelElement($anchor).classList.add("is-visible");
}

function hideInfoPanelForElement(event) {
    var $anchor = event.target;
    //make the panel visible!
    //Note: classList is available only on IE10+
    getInfoPanelElement($anchor).classList.remove("is-visible");
}

//iterate on the list and register a callback when the user hovers on the link
for ( var i = 0; i < $menuLinks.length; i++) {
    // we are on each Anchor element in the menu
    // register a callback when the mouse hovers on the link
    var $anchor = $menuLinks[i];
    $anchor.addEventListener("mouseover", displayInfoPanelForElement);
    $anchor.addEventListener("mouseout", hideInfoPanelForElement);

}   