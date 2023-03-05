const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: 'yota',
  age: 30,
  hobbies: ['Sports', 'Cooking'],  // array
  role: [2, 'author'],             // tuple
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