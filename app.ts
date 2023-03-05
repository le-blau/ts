// Union型
// 関数に数値も文字も渡せるようにする
function combine(input1: number|string, input2: number|string) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combineAges = combine(30, 26);
console.log(combineAges)

const combinedNames = combine('Max', 'Anna');
console.log(combinedNames)