// const output = document.querySelector('.output');
const exNum = [10, 15, 7, 1, 4, 2, 5];
const output = document.querySelector('.output');
// ----------------------------------------------
function getRandom(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + 1;
    return exNum.includes(num) ? getRandom(min, max) : num;
}
// -----------------------------------------------
for (let i = 0; i < 20; i++) {
    const min = 1;
    const max = 15;
    const num = getRandom(min, max);
    console.log(num);
}