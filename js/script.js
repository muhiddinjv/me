let total = document.querySelector(".total");
let css = document.querySelector('.css');
let html = document.querySelector('.html');
let js = document.querySelector('.js');
let json = document.querySelector('.json');

total.addEventListener('click', function() {
    var width = 14;
    var id = setInterval(frame, 50);

    function frame() {
        if (width >= 76) {
            clearInterval(id);
        } else {
            width++;
            total.style.width = width + '%';
            total.innerHTML = "TOTAL " + width * 1 + 'k';
        }
    }
})

css.addEventListener('click', function() {
    var width = 10;
    var id = setInterval(frame, 100);

    function frame() {
        if (width >= 39) {
            clearInterval(id);
        } else {
            width++;
            css.style.width = width + '%';
            css.innerHTML = "CSS " + width * 1 + 'k';
        }
    }
})

html.addEventListener('click', function() {
    var width = 10;
    var id = setInterval(frame, 200);

    function frame() {
        if (width >= 16) {
            clearInterval(id);
        } else {
            width++;
            html.style.width = width + '%';
            html.innerHTML = "HTML " + width * 1 + 'k';
        }
    }
})

js.addEventListener('click', function() {
    var width = 4;
    var id = setInterval(frame, 200);

    function frame() {
        if (width >= 10) {
            clearInterval(id);
        } else {
            width++;
            js.style.width = width + '%';
            js.innerHTML = "JS " + width * 1 + 'k';
        }
    }
})