const eleList = document.querySelectorAll('li');
for (var x = 0; x < eleList.length; x++) {
    eleList[x].addEventListener('mouseover', function() {
        this.classList.add('red');
    });
    eleList[x].addEventListener('mouseout', function() {
        this.classList.remove('red');
    })
}