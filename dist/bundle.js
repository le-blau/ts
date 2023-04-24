"use strict";
console.log('Sending...');
function add(n1, n2, showResult, phrase) {
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    return result;
}
let number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result: ';
add(number1, number2, printResult, resultPhrase);
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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: 'yota',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
let favoriteActivities;
favoriteActivities = ['sports'];
console.log(person.name);
for (const hobboy of person.hobbies) {
    console.log(hobboy.toUpperCase());
}
if (person.role === Role.ADMIN) {
    console.log('管理者ユーザー');
}
function combine(input1, input2, resultConversion) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
const combineAges = combine(30, 26, 'as-number');
console.log(combineAges);
const combineStringAges = combine('30', '26', 'as-number');
console.log(combineStringAges);
const combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);
