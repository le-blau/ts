"use strict";
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'yota',
//   age: 30,
//   hobbies: ['Sports', 'Cooking'],  // array
//   role: [2, 'author'],             // tuple
// }
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
// person.role.push('admin'); こっちは許可される
// person.role[1] = 10;
// person.role = [0, 'admin'];
let favoriteActivities;
favoriteActivities = ['sports'];
console.log(person.name);
for (const hobboy of person.hobbies) {
    console.log(hobboy.toUpperCase());
}
if (person.role === Role.ADMIN) {
    console.log('管理者ユーザー');
}
