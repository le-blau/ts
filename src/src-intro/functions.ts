function add2(num1: number, num2: number) {
  return num1 + num2;
}

function printResult2(num: number): void {
  console.log(num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
})

let combineValues: (a :number, b: number) => number;

combineValues = add2;
// combineValues = printResult;
// combineValues = 5;

console.log(combineValues(8, 8));

printResult2(add2(12, 5));