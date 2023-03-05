const person = {
  name: 'yota',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
}

let favoriteActivities: string[];
favoriteActivities = ['sports'];

console.log(person.name);

for (const hobboy of person.hobbies) {
  console.log(hobboy.toUpperCase());
}