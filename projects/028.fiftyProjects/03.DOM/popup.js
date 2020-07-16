/*
<img src="img/hero.png" width="200px">
<img src="img/boss.JPG" width="200px">
<img src="img/DOM-model.svg" width="200px"></img>
*/
let image = document.getElementsByTagName('img');
for (let i = 0; i < image.length; i++) {
    image[i].addEventListener('click', function() {
        open(this.src, 'newWindow',
            'resizable=yes,scrollbars=yes,width=500,height=500');
    })
} +