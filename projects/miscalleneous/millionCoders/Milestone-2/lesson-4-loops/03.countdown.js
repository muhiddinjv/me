// SOLUTION
var x = 60;
while (x >= 0) {
    // Last iteration. Note occurances of bottle, bottle, bottleS
    if (x === 0) {
        console.log("Solid rocket booster ignition and liftoff!");
    }
    // Second-last iteration. Note occurances of bottleS, bottleS, bottle
    else if (x === 6) {
        console.log("Main engine start");
    } else if (x === 10) {
        console.log("Activate main engine hydrogen burnoff system");
    } else if (x === 16) {
        console.log("Activate launch pad sound suppression system");
    } else if (x === 31) {
        console.log("Ground launch sequencer is go for auto sequence start");
    } else if (x === 50) {
        console.log("Orbiter transfers from ground to internal power");
    }
    // All other iterations. Note occurances of bottleS, bottleS, bottleS
    else {
        console.log("T-" + x + " seconds");
    }
    x = x - 1;
}