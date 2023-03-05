function add(num1, num2) {
    return num1 + num2;
}
function printResult(num) {
    console.log(num);
}
var combineValues;
combineValues = add;
// combineValues = printResult;
// combineValues = 5;
console.log(combineValues(8, 8));
printResult(add(12, 5));
