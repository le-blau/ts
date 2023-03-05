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

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR
}

const person = {
  name: 'yota',
  age: 30,
  hobbies: ['Sports', 'Cooking'],  // array
  role: Role.ADMIN
}


// person.role.push('admin'); こっちは許可される
// person.role[1] = 10;

// person.role = [0, 'admin'];

let favoriteActivities: string[];
favoriteActivities = ['sports'];

console.log(person.name);

for (const hobboy of person.hobbies) {
  console.log(hobboy.toUpperCase());
}

if (person.role === Role.ADMIN) {
  console.log('管理者ユーザー');
}