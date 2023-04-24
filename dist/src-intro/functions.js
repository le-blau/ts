"use strict";
function add2(num1, num2) {
    return num1 + num2;
}
function printResult2(num) {
    console.log(num);
}
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, (result) => {
    console.log(result);
});
let combineValues;
combineValues = add2;
console.log(combineValues(8, 8));
printResult2(add2(12, 5));
