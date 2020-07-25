// change the text content of several items simultaneously
let newSpan = document.querySelectorAll('.first');
newSpan.forEach(function(el, index) {
        el.textContent = ` ${index} : updated`;
        el.style.background = 'yellow';
    }) // only for querySelector = doesn't work on getElementsByTagName