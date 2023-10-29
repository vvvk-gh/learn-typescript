const user = {
    name: 'vamsi',
    age: 26,
    hobbies: ['movies', 'volleyball']
}

console.log(user.name);

for (const hobby of user.hobbies) {
    console.log(hobby);
    console.log(hobby.toUpperCase()); //suggests all string functions at IDE as it already knows its a string
   // console.log(hobby.map()) //results in a error as map doesnt work on string
}

//const newHobbies : string[] = ['sports', 1] //shows an error
const newHobbies: any = ['sports', 1] // allows at the cost of losing all TS benefits