// "use strict";
var fruits = [" Banana", " Orange", " Apple", " Cherry", " Melon", " Pumpkin", " Lemon", " Grapes"];
document.getElementById("demo").innerHTML = fruits;

var points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo2").innerHTML = points;

var cars = [{
    type: "Volvo",
    year: 2016
}, {
    type: "Saab",
    year: 2001
}, {
    type: "BMW",
    year: 2010
}]

displayCars();
// --------------------- NUMBERS ---------------------
function high() {
    points.sort(function(a, b) {
        return b - a
    });
    document.getElementById("demo2").innerHTML = points;
}

function low() {
    points.sort(function(a, b) {
        return a - b
    });
    document.getElementById("demo2").innerHTML = points;
}

function random() {
    points.sort(function(a, b) {
        return 0.5 - Math.random()
    });
    document.getElementById("demo2").innerHTML = points;
}

function sort() {
    fruits.sort();
    document.getElementById("demo").innerHTML = fruits;
}

function reverse() {
    fruits.reverse();
    document.getElementById("demo").innerHTML = fruits;
}

function numbers() {
    cars.sort(function(a, b) {
        return a.year - b.year
    });
    displayCars();
}

function strings() {
    cars.sort(function(a, b) {
        var x = a.type.toLowerCase();
        var y = b.type.toLowerCase();
        if (x < y) {
            return -1;
        }
        if (x > y) {
            return 1;
        }
        return 0;
    });
    displayCars();
}

function displayCars() {
    document.getElementById("demo3").innerHTML =
        cars[0].type + " " + cars[0].year + "<br>" +
        cars[1].type + " " + cars[1].year + "<br>" +
        cars[2].type + " " + cars[2].year;
}

function displayCars() {
    document.getElementById("demo3").innerHTML =
        cars[0].type + " " + cars[0].year + "<br>" +
        cars[1].type + " " + cars[1].year + "<br>" +
        cars[2].type + " " + cars[2].year;
}

// --------------------- NUMBERS ---------------------

function unshift() {
    fruits.unshift(prompt("Type in something"));
    document.getElementById("demo").innerHTML = fruits;
}

function shift() {
    fruits.shift();
    document.getElementById("demo").innerHTML = fruits;
}

function spliceAdd() {
    fruits.splice(2, 0, prompt("Type in something"));
    document.getElementById("demo").innerHTML = fruits;
}

function spliceDel() {
    fruits.splice(2, 1);
    // The first parameter (2) defines the position where new elements should be added (spliced in).
    // The second parameter (1) defines how many elements should be removed. 
    document.getElementById("demo").innerHTML = fruits;
}

function push() {
    fruits.push(prompt("Type in something"));
    document.getElementById("demo").innerHTML = fruits;
}

function pop() {
    fruits.pop();
    document.getElementById("demo").innerHTML = fruits;
}

function on() {
    document.getElementById("demo").style.display = "block";
}

function off() {
    document.getElementById("demo").style.display = "none";
}
// --------------------- BOOLEANS ---------------------
function boolean() {
    var age, voteable;
    age = Number(document.getElementById("age").value);
    if (isNaN(age)) {
        voteable = "Error in input";
    } else {
        voteable = (age < 18) ? "Too young" : "Old enough";
    }
    document.getElementById("demo4").innerHTML = voteable + " to vote.";
}

function greet() {
    var greeting;
    var time = new Date().getHours();
    if (time < 12) {
        greeting = "Good morning";
    } else if (time < 20) {
        greeting = "Good day";
    } else {
        greeting = "Good evening";
    }
    document.getElementById("demo5").innerHTML = greeting;
}
// --------------------- BOOLEANS ---------------------
var day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        // default:
        //     text = "Not a week day";
}

document.getElementById("demo6").innerHTML = "Today is " + day;

var text2;
switch (new Date().getDay()) {
    case 1:
    case 2:
    case 3:
    default:
        text2 = "Looking forward to the Weekend";
        break;
    case 4:
    case 5:
        text2 = "Soon it is Weekend";
        break;
    case 0:
    case 6:
        text2 = "It is Weekend";
}
document.getElementById("demo7").innerHTML = text2;


function checkFruit() {
    var text3;
    var fruits = document.getElementById("myInput").value;
    switch (fruits) {
        case "banana":
            text3 = "Banana is good!";
            break;
        case "orange":
            text3 = "I am not a fan of orange.";
            break;
        case "apple":
            text3 = "How you like them apples?";
            break;
        default:
            text3 = "I have never heard of that fruit.";
    }
    document.getElementById("demo8").innerHTML = text3;
}
// --------------------- LOOP FOR ---------------------

var car = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
var text4 = "";
var i;
for (i = 0; i < car.length; i++) {
    text4 += car[i] + "<br>";
}
document.getElementById("demo9").innerHTML = text4;

// --------------------- WHAT IS THIS ---------------------
document.getElementById("demo10").innerHTML =
    "john".constructor + "<br>" +
    (3.14).constructor + "<br>" +
    false.constructor + "<br>" + [1, 2, 3, 4].constructor + "<br>" + {
        name: 'john',
        age: 34
    }.constructor + "<br>" +
    new Date().constructor + "<br>" +
    function() {}.constructor;

// --------------------- REPLACE ---------------------
function replace() {
    var str = document.getElementById("demo11").innerHTML;
    var txt5 = str.replace(/microsoft/i, prompt("type"));
    document.getElementById("demo11").innerHTML = txt5;
}

function check() {
    var message, x;
    message = document.getElementById("message");
    message.innerHTML = "";
    x = document.getElementById("demo12").value;
    try {
        if (x == "") throw "is empty";
        if (isNaN(x)) throw "is not a number";
        x = Number(x);
        if (x > 10) throw "is too high";
        if (x < 5) throw "is too low";
    } catch (err) {
        message.innerHTML = "Input " + err;
    } finally {
        document.getElementById("demo12").value = "";
    }
}

var x = 15 * 5;
debugger;
document.getElementById("demo13").innerHTML = x;

x = 3.14; // This will cause an error (x is not defined).

// -------------------- JavaScript Can Validate Input ---------------------
function valit() {
    var x, text5;

    // Get the value of the input field with id="numb"
    x = document.getElementById("numb").value;

    // If x is Not a Number or less than one or greater than 10
    if (isNaN(x) || x < 1 || x > 10) {
        text5 = "Input not valid";
    } else {
        text5 = "Input OK";
    }
    document.getElementById("demo14").innerHTML = text5;
}
// ------------------------- Validity Check ------------------------------
function valit() {
    var inpObj = document.getElementById("id1");
    if (inpObj.checkValidity() == false) {
        document.getElementById("demo15").innerHTML = inpObj.validationMessage;
    } else {
        document.getElementById("demo15").innerHTML = "Input OK";
    }
}

// ------------------------- Counter ------------------------------
var counter = 0;

function add() {
    return counter += 1;
}

function count() {
    document.getElementById("demo16").innerHTML = add();
}

// ------------------------- intro changer ------------------------------
var x = document.querySelectorAll("p.intro");
document.getElementById("demo17").innerHTML =
    'The first paragraph (index 0) with class="intro": ' + x[0].innerHTML;

// ------------------------- Validity form ------------------------------
function forma() {
    var x = document.forms["frm1"];
    var text = "";
    var i;
    for (i = 0; i < x.length; i++) {
        text += x.elements[i].value + "<br>";
    }
    document.getElementById("demo18").innerHTML = text;
}

// ------------------------- animation ------------------------------
function myMove() {
    var elem = document.getElementById("animate");
    var pos = 0;
    var id = setInterval(frame, 5);

    function frame() {
        if (pos == 250) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

function myMove2() {
    var elem = document.getElementById("animate2");
    var pos = 250;
    var id = setInterval(frame, 5);

    function frame() {
        if (pos == 0) {
            clearInterval(id);
        } else {
            pos--;
            elem.style.top = pos + 'px';
            elem.style.right = pos + 'px';
        }
    }
}

// ------------------------- text change ------------------------------
function changeText(id) {
    id.innerHTML = "Oops!";
}


function displayDate() {
    document.getElementById("demo19").innerHTML = Date();
}


function upper() {
    var x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
}


function mOver(obj) {
    obj.innerHTML = "Thank You";
}

function mOut(obj) {
    obj.innerHTML = "Mouse Over Me";
}

// ------------------------- Many Listeners ------------------------------
let k = document.getElementById('knopka');
k.addEventListener("click", bossUni);
k.addEventListener("mouseover", ustidanUt);
k.addEventListener("mouseout", ustidanChiq);

function bossUni() {
    document.getElementById('demo20').innerHTML += "Bosdin, ";
}

function ustidanUt() {
    document.getElementById('demo20').innerHTML += "chiqdin, ";
}

function ustidanChiq() {
    document.getElementById('demo20').innerHTML += "tushdin, ";
}

// ------------------------- Trigger Window ------------------------------
window.addEventListener("resize", function() {
    document.getElementById("demo21").innerHTML = Math.random();
});

// ------------------------- Bubble Vs Capture ------------------------------
document.getElementById("myP").addEventListener("click", function() {
    alert("You clicked the P element!");
}, false);

document.getElementById("myDiv").addEventListener("click", function() {
    alert("You clicked the DIV element!");
}, false);

document.getElementById("myP2").addEventListener("click", function() {
    alert("You clicked the P element!");
}, true);

document.getElementById("myDiv2").addEventListener("click", function() {
    alert("You clicked the DIV element!");
}, true);

// ------------------------- DOM Root Nodes ------------------------------
// alert(document.body.innerHTML);

// ------------------------- CREATE DOM ELEMENTS ------------------------------
function newpara() {
    let para = document.createElement("li");
    let yozuv = document.createTextNode(prompt("Type in something"));
    para.appendChild(yozuv);
    let elem = document.getElementById('div1');
    elem.appendChild(para);
    // var child = document.getElementById('l1');
    // eleme.insertBefore(para, child);
}

function replaceit() {
    var parent = document.getElementById("div1");
    var child = document.getElementById("div1").firstChild;
    var para = document.createElement("li");
    var node = document.createTextNode(prompt("replace first item"));
    para.appendChild(node);
    parent.replaceChild(para, child);
}

function removeit() {
    var parent = document.getElementById("div1");
    var child = document.getElementById("div1").lastChild;
    parent.removeChild(child);
}

// ------------------------- Node List Length ------------------------------

function colorit() {
    var myNodelist = document.getElementsByTagName("li");
    var i;
    for (i = 0; i < myNodelist.length; i++) {
        myNodelist[i].style.backgroundColor = "white";
    }
}

// ------------------------- Window Width/Heigh ----------------------------
function getWH() {
    var w = window.innerWidth ||
        document.documentElement.availWidth ||
        document.body.availWidth;

    var h = window.innerHeight ||
        document.documentElement.availHeight ||
        document.body.availHeight;

    var u = document.getElementById("demo23");
    u.innerHTML = "Browser inner window <b>width</b> (w/o taskbar): " + w + ", <b>height</b> (w/o scrollbar): " + h + ".";
}

// ------------------------- GET Document URL ------------------------------
function getLoca() {
    document.getElementById("demo24").innerHTML =
        "Page location is: " + window.location.href;
}
// ------------------------- GET Page Path ------------------------------
function pagePath() {
    document.getElementById("demo25").innerHTML =
        "Page path is: " + window.location.pathname;
}


function newDoc() {
    window.location.assign("../codepen/index.html")
}

function goBack() {
    window.history.back()
}

function goForward() {
    window.history.forward()
}

function cookiesOn() {
    document.getElementById("demo26").innerHTML =
        "Cookies enabled is " + navigator.cookieEnabled;
}

function browserName() {
    document.getElementById("demo27").innerHTML =
        "Name is " + navigator.appName +
        "<br>Code name is " + navigator.appCodeName;
}

function browserEngine() {
    document.getElementById("demo28").innerHTML =
        "Browser engine is " + navigator.product;
}

function browserVersion() {
    document.getElementById("demo29").innerHTML =
        navigator.appVersion;
}

function javaOn() {
    document.getElementById("demo30").innerHTML =
        "Java enabled is " + navigator.javaEnabled();
}

function confirmIt() {
    var x;
    if (confirm("Press a button!") == true) {
        x = "You pressed OK!";
    } else {
        x = "You pressed Cancel!";
    }
    document.getElementById("demo31").innerHTML = x;
}

function promptIt() {
    var person = prompt("Please enter your name", "Harry Potter");

    if (person != null) {
        document.getElementById("demo32").innerHTML =
            "Hello " + person + "! How are you today?";
    }
}

function lineBreak() {
    alert("Hello\nHow are you?");
}

function timeOut() {
    alert('3 seconds have passed!');
}

function myTimer() {
    var myVar2 = setInterval(myTimer, 1000);
    var d = new Date();
    document.getElementById("demo33").innerHTML = d.toLocaleTimeString();
}

function bgChange(bg) {
    document.body.style.background = bg;
}

function changeHeading() {
    var x = "",
        i;
    for (i = 1; i <= 6; i++) {
        x = x + "<h" + i + ">Heading " + i + "</h" + i + ">";
    }
    document.getElementById("demo34").innerHTML = x;
}

var myWindow;

function openWin() {
    myWindow = window.open("", "", "width=400, height=200");
    myWindow.blur();
}

function printPage() {
    window.print();
}

var c = 0;

function myCounter() {
    document.getElementById("demo35").innerHTML = ++c;
}