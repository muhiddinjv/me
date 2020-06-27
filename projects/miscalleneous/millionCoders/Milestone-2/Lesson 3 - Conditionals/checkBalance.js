var balance = 111;
var checkBalance = true;
var isActive = true;

// NOT WORKING
if (checkBalance === true) {
    if (isActive === true && balance > 0) {
        console.log('Your balance is $' + balance.toFixed(2) + '.');
    } else if (balance === 0) {
        console.log('Your account is empty.');
    } else if (isActive === true && balance < 0) {
        console.log('Your balance is negative. Please contact your bank.');
    } else if (isActive === false) {
        console.log('Your account is no longer active.');
    }
} else {
    console.log('Thank you. Have a nice day!');
}

/// SOLUTION BELOW
if (checkBalance === true) {
    if (isActive === true && balance > 0) {
        console.log("Your balance is $" + balance + ".")
    } else if (isActive === false) {
        console.log("Your account is no longer active.")
    } else if (balance === 0) {
        console.log("Your account is empty.")
    } else console.log("Your balance is negative. Please contact bank.")
} else console.log("Thank you. Have a nice day!");