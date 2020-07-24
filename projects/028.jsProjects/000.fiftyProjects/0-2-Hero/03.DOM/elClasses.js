// 7 - Element Classes 
const lisItems = document.querySelectorAll('li');
lisItems.forEach(function(i) {
    i.innerText = i.className ? i.className : 'No class';
    i.classList.add('test');
    i.classList.toggle('test1');
    i.classList.remove('test2');
    i.classList.replace('test', 'test3');
    console.log(i.classList.contains('first'));
    i.classList.add('test4');
})