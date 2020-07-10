/* 
<button>click 1</button>
<button>click 2</button>
<button>click 3</button>
*/

const btns = document.querySelectorAll('button');
console.log(btns);

let var1, var2, var3;
var1 = var2 = var3 = 0;

let message1 = () => {
    var1++;
    message();
}

let message2 = () => {
    var2++;
    message();
}

let message3 = () => {
    var3++;
    message();
}

let message = () => {
    console.log(var1 + '' + var2 + '' + var3);
}

btns[0].onclick = message1;
btns[1].onclick = message2;
btns[2].onclick = message3;