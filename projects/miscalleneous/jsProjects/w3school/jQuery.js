// $(document).ready(function() {
//     $("button").click(function() {
//         $(".p0").hide();
//     });
// });

// // click() ----------------------------------------
// $(document).ready(function() {
//     $(".pA").click(function() {
//         $(this).hide();
//     });
// });

// // hover ----------------------------------------
// $(document).ready(function() {
//     $("#p1").hover(function() {
//             alert("You entered the p1!");
//         },
//         function() {
//             alert("Bye! You now leave p1");
//         });
// });

// // mousedown ----------------------------------------
// $(document).ready(function() {
//     $("#p2").mousedown(function() {
//         alert("You pressed the paragraph");
//     });
// });

// // input ----------------------------------------
// $(document).ready(function() {
//     $("input").focus(function() {
//         $(this).css("background-color", "#cccccc");
//     });
//     $("input").blur(function() {
//         $(this).css("background-color", "#ffffff");
//     });
// });

// // multiple (Not working)----------------------------
// $(document).ready(function() {
//     $("#para").on({
//         mouseenter: function() {
//             $(this).css("background-color", "yellow");
//         },
//         mouseleave: function() {
//             $(this).css("background-color", "green");
//         },
//         click: function() {
//             $(this).css("background-color", "red");
//         }
//     });
// });

// // hide and show ------------------------------------
// $(document).ready(function() {
//     $("#btn").click(function() {
//         $(".p3").toggle(500);
//     });
// });

// hide and show ------------------------------------
// $(document).ready(function() {
//     $("#btn2").click(function() {
//         $(".box1").fadeToggle();
//         $(".box2").fadeToggle("slow");
//         $(".box3").fadeToggle(3000);
//     });
// });

// slide down ------------------------------------
// $(document).ready(function() {
//     $("#flip").click(function() {
//         $("#panel").slideToggle(1000);
//     });
// });

// animate ------------------------------------
// $(document).ready(function() {
//     $("button").click(function() {
//         $("#div4").animate({
//             // height: 'toggle',
//             left: '333px',
//             opacity: '0.5',
//             height: '+=150px',
//             width: '+=150px'
//         });
//     });
// });

// animate ------------------------------------
// $(document).ready(function() {
//     $("button").click(function() {
//         var div = $("#div3");
//         div.animate({ left: '440px' }, "slow");
//         div.animate({ fontSize: '3em' }, "slow");
//     });
// });


// stop ------------------------------------
// $(document).ready(function() {
//     $("#flip2").click(function() {
//         $("#panel2").slideDown(4000);
//     });
//     $("#stop").click(function() {
//         $("#panel2").stop();
//     });
// });

// chaining ------------------------------------
// $(document).ready(function() {
//     $("#btn5").click(function() {
//         $("#p4").css("color", "red").slideUp(2000).slideDown(2000);
//     });
// });


// jQuery GET ------------------------------------
// $(document).ready(function() {
//     $("#btn6").click(function() {
//         alert("Text: " + $("#test").text());
//     });
//     $("#btn7").click(function() {
//         alert("HTML: " + $("#test").html());
//     });
// });

// jQuery Value ------------------------------------
// $(document).ready(function() {
//     $("#btn8").click(function() {
//         alert("Value: " + $("#test0").val());
//     });
// });

// jQuery SET ------------------------------------
// $(document).ready(function() {
//     $("#btn9").click(function() {
//         $("#test1").text(prompt("Type something"));
//     });
//     $("#btn10").click(function() {
//         $("#test2").html(prompt("Type something"));
//     });
//     $("#btn11").click(function() {
//         $("#test3").val(prompt("Type something"));
//     });
// });


// jQuery ADD ------------------------------------
// $(document).ready(function() {
//     $("#btn12").click(function() {
//         // $(".addP").append("<b> Hello World </b>");
//         $(".addP").prepend("<b> Hello World </b>");
//     });
//     $("#btn13").click(function() {
//         // $(".addOl").append("<li> New Item </li>");
//         $(".addOl").prepend("<li> New Item </li>");
//     });
// });

// jQuery Remove ------------------------------------
// $(document).ready(function() {
//     $("#rmv").click(function() {
//         $("#div1").remove();
//     });
//     $("#emp").click(function() {
//         $("#div1").empty();
//     });
// });

// jQuery Classes ------------------------------------
// $(document).ready(function() {
//     $("#class").click(function() {
//         $("h1, h2, p").toggleClass("blue");
//         $("div").toggleClass("important");
//     });
// });

// jQuery css --------------------------------------
// $(document).ready(function() {
//     $("#css").click(function() {
//         $("p").css({
//             "background-color": "yellow",
//             "font-size": "20px"
//         });
//     });
// });

// jQuery dimension --------------------------------------
// $(document).ready(function() {
//     $("#dim").click(function() {
//         var txt = "";
//         txt += "Width of div: " + $("#dim1").width() + "</br>";
//         txt += "Height of div: " + $("#dim1").height() + "</br>";
//         txt += "Inner width of div: " + $("#dim1").innerWidth() + "</br>";
//         txt += "Inner height of div: " + $("#dim1").innerHeight() + "</br>";
//         txt += "Outer width of div: " + $("#dim1").outerWidth() + "</br>";
//         txt += "Outer height of div: " + $("#dim1").outerHeight() + "</br>";
//         txt += "Outer width of div (margin included): " + $("#dim1").outerWidth(true) + "</br>";
//         txt += "Outer height of div (margin included): " + $("#dim1").outerHeight(true) + "</br>";
//         $("#dim1").html(txt);
//     });
// });


// jQuery dimension --------------------------------------
// $(document).ready(function() {
//     $("#disDim").click(function() {
//         var txt = "";
//         txt += "Document width/height: " + $(document).width();
//         txt += "x" + $(document).height() + "\n";
//         txt += "Window width/height: " + $(window).width();
//         txt += "x" + $(window).height();
//         alert(txt);
//     });
// });


// Traversing: Ancestors -------------------------------------
// parent(s) - one parent above(all ancestors)
// parentsUntil - all parents between two elements
// $(document).ready(function() {
//     $("#prnt").click(function() {
//         $(".span1").parent().css({
//             "border": "2px solid red",
//             "color": "red"
//         });
//     });
//     $("#prnts").click(function() {
//         $(".span1").parents().css({
//             "border": "2px solid red",
//             "color": "red"
//         });
//     });
//     $("#prntsUntil").click(function() {
//         $(".span1").parentsUntil("div").css({
//             "border": "2px solid red",
//             "color": "red"
//         });
//     });
// });

// // Traversing: Descendants -------------------------------------
// $(document).ready(function() {
//     $("#chld").click(function() {
//         $(".descendants").children().css({
//             "border": "2px solid blue",
//             "color": "blue"
//         })
//     });
// });
// $(document).ready(function() {
//     $("#find").click(function() {
//         $(".descendants").find("span").css({
//             "border": "2px solid blue",
//             "color": "blue"
//         })
//     });
// });

// $(document).ready(function() {
//     $("#first").click(function() {
//         $(".descendants").children(":first").css({
//             "color": "red",
//             "border": "2px solid red"
//         });
//     });
// });

// // Siblings --------------------------------------------
// $(document).ready(function() {
//     $("#sib").click(function() {
//         $("#h2").siblings().css({ "color": "red", "border": "2px solid red" });
//     });
// });

// $(document).ready(function() {
//     $("#nextAll").click(function() {
//         $("#h2").nextAll().css({ "color": "red", "border": "2px solid red" });
//     });
// });

// $(document).ready(function() {
//     $("#nextUntill").click(function() {
//         $("#h2").nextUntil("h6").css({ "color": "red", "border": "2px solid red" });
//     });
// });

// // Filter -----------------------------------------------------
// $(document).ready(function() {
//     $("#frst").click(function() {
//         $(".filter p").first().css("background-color", "lightgreen");
//     });
// });
// $(document).ready(function() {
//     $("#lst").click(function() {
//         $(".filter p").last().css("background-color", "pink");
//     });
// });
// $(document).ready(function() {
//     $("#eq").click(function() {
//         $(".filter p").eq(3).css({
//             "background-color": "yellow"
//         });
//     });
// });
// $(document).ready(function() {
//     $("#fltr").click(function() {
//         $("p").filter(".intro").css({
//             "background-color": "lightblue"
//         });
//     });
// });
// $(document).ready(function() {
//     $("#not").click(function() {
//         $("p").not(".intro").css({
//             "background-color": "silver"
//         });
//     });
// });

// // AJAX -----------------------------------------------------
// $(document).ready(function() {
//     $(".external").click(function() {
//         $("#adiv").load("demoText.txt #para1", function(responseTxt, statusTxt, xhr) {
//             if (statusTxt == "success")
//                 alert("External content loaded successfully!");
//             if (statusTxt == "error")
//                 alert("Error: " + xhr.status + ": " + xhr.statusText);
//         });
//     });
// });

// noConflict() ---------------------------------------------------
// jq is my own shortcut to use if the "$" sign is used by other libraries
var jq = $.noConflict();
jq(document).ready(function() {
    jq("#noConBtn").click(function() {
        jq(".noCon").text("jQuery is still working");
    });
});