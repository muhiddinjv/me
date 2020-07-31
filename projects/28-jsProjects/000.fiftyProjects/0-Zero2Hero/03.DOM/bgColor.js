/* 
<div>this 1</div>
<div>this 2</div>
<div>this 3</div>
<div>this 4</div>
<div>this 5</div>
*/
const divs = document.querySelectorAll('div');
for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', function() {
        function ranColor() {
            return 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
        }

        function random(number) {
            return Math.floor(Math.random() * (number + 1));
        }
        this.style.background = ranColor();
    })
}