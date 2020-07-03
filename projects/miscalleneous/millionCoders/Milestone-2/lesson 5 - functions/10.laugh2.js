var laugh = function(num) {
    var sound = "";
    for (var x = 0; x < num; x++) {
        sound = sound + "ha";
    }
    sound = sound + "!";
    return sound;
}

console.log(laugh(10));