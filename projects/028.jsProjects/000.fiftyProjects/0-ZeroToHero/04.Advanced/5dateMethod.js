const output = document.querySelector('.output');
const btn = document.querySelector('#btn');
btn.addEventListener('click', function() {
    // let date = new Date();
    // date = date.toDateString(); // only date
    // const output = document.querySelector('.output');
    // output.innerHTML = date;
    // let d = new Date();
    // let val;
    // d = Date.now();
    // d = new Date(2020, 11, 15, 5, 10, 30, 0);
    // d = new Date(1000000000000);
    // val = d.getDate();
    // val = d.getDay();
    // val = d.getMinutes();
    // val = d.getSeconds();
    // val = d.getMilliseconds();
    // val = d.getUTCMilliseconds();
    // val = d.getHours();

    // let days = 1;
    // const newDate = new Date(Date.now() + (days * 24 * 60 * 60 * 1000));
    // output.innerHTML = newDate;
    const bday = new Date(1984, 7, 6);
    output.innerHTML = bday.getTime() + " milliseconds from 1970 to 1984";
})