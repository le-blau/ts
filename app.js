var person = {
    name: 'yota',
    age: 30,
    hobbies: ['Sports', 'Cooking']
};
var favoriteActivities;
favoriteActivities = ['sports'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobboy = _a[_i];
    console.log(hobboy.toUpperCase());
}
