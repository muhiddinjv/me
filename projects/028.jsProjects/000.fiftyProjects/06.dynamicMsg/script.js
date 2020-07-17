const btn = document.querySelector('button');
const output = document.querySelector('div');
// output.setAttribute('style', 'width:200px;height:200px;text-align:center;color:white;padding:11px;')

btn.addEventListener('click', function() {
    output.style.cssText = 'width:200px;height:200px;text-align:center;color:white;padding:11px;';
    const date = new Date();
    const time = date.getHours();
    let msg;
    if (time > 22) {
        msg = 'Good night';
        output.style.background = "black";
    } else if (time > 17) {
        msg = 'Good evening';
        output.style.background = "silver";
    } else if (time > 12) {
        msg = 'Good afternoon';
        output.style.background = "blue";
    } else if (time > 0) {
        msg = 'Good morning';
        output.style.background = "orange";
    } else {
        msg = "something is wrong";
        output.style.background = "red";
    }
    output.innerHTML = `<h2>${msg}</h2>
        <h3>${date}</h3>
    `;
});