var test1 = function(x) { // Long & old
    return x * 10;
}
var test2 = (x) => x * 10; // ES6 Short & sweet
console.log(test1(90));
console.log(test2(90));