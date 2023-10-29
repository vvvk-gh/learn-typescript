var user = {
    name: 'vamsi',
    age: 26,
    hobbies: ['movies', 'volleyball']
};
console.log(user.name);
for (var _i = 0, _a = user.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
    console.log(hobby.toUpperCase()); //suggests all string functions at IDE as it already knows its a string
    console.log(hobby.map()); //results in a error as map doesnt work on string
}
