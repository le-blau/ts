function add(num1: number, num2: number) {
  return num1 + num2;
}

function printResult(num: number): void {
  console.log(num);
}

let combineValues: (a :number, b: number) => number;

combineValues = add;
// combineValues = printResult;
// combineValues = 5;

console.log(combineValues(8, 8));

printResult(add(12, 5));