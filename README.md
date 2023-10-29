CMD TO compile Typescript files

- tsc <filename.ts>

devlopment only package

npm install --save-dev <npm-package-name>

core types in ts

numbers
string
boolean

Types in TS helps us from runtime errors.
as types in TS gives raise before hand at compliation only

We can explicitly declare the type of a varible like below

> const name: string = 'Ravana';

#### Object

> const user = {
> name : 'Karna',
> age : 23
> }
> this will instruct the type of object like the following to the TS compiler

const user = {
name: string;
age: number;
}

restricting its access non-existing properties or assiging another types will leads to an error

> console.log(user.nickname) //leads to a compliation error

> user.age = 'twenty four'; //shows erros

#### Array

> const user = {
> name: 'vamsi',
> age: 26,
> hobbies: ['movies', 'volleyball']
> }

const newHobbies : string[];
newHobbies = ['sports', 1] //shows an error

const newHobbies: any = ['sports', 1] // allows at the cost of losing all TS benefits

> `any` is a new special type in TS.

#### Tuples

tuples are the shorter form of array with only 2 values
its a union data type

const user {
name :'Harry'
age : 24,
hobbies : ['vlog','video-game'],
role:[2,'author']; //this is a tuple
}

but the TS will understand this as an array and will allow Array functions to it inorder to avoid we need to specify

const user : {
name: string;
age: number;
hobbies: string[];
role:[number, string];
} = {
name: 'vamsi',
age: 26,
hobbies: ['movies', 'volleyball'],
role: [2, 'author']
}

now this wont allow the following

user.role[1] = 3; //shows an error;
user.role.description //shows an error

#### ENUM

enum Role { ADMIN, COMMENTER, AUTHOR };
//default values is 0,1,2 and so..on

the next 2 will have consecutive number
enum Role { ADMIN=5, COMMENTER, AUTHOR };

u can also have mixed type of values
enum Role { ADMIN= 'ADMIN', COMMENTER=300, AUTHOR=700 };

const user = {
name: 'vamsi',
age: 26,
hobbies: ['movies', 'volleyball'],
role: Role.ADMIN
}

//user.role[1] = 3; //shows an error;
//user.role.description //shows an error

if (user.role = Role.ADMIN) {
console.log(user.name);  
}

#### union data type

> Union datatype allows more than one type of data as parameters

```
function combinable(input1: number | string, input2: number | string) {
let result;
if (typeof input1 === "number" && typeof input2 === 'number') {
result = input1 + input2;
} else {
result = input1.toString() + input2.toString();
}
return result;
}

console.log(combinable(3, 2));
console.log(combinable('3', '2'));
console.log(combinable('Hello', 'world'));
```

#### Literal data type

```
function combinable (
    input1: number | string,
    input2: number | string,
    returnOutput: 'as-number' | 'as-string' //liternal data types
) {
    let result;
    if (typeof input1 === "number" && typeof input2 === 'number' || returnOutput === 'as-number') {
        result = +input1 + +input2; //making explictly a number according to the expected return output
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

```

> Literal Vs Union Data Types

| **Literal DataType**                | **Union DataType**                                      |
| ----------------------------------- | ------------------------------------------------------- |
| match with Exact same literal value | matches with values that accepts the specified datatype |
| Ex : '1' \| 'wow'                   | Ex : number \| string                                   |

### Custom type

made the code look more cleaner

```
type Combine = number | string;
type Outputconverter = 'as-number' | 'as-string'

function combinable(
input1: Combine,
input2: Combine,
returnOutput: Outputconverter
) {
let result;
if (typeof input1 === "number" && typeof input2 === 'number' || returnOutput === 'as-number') {
result = +input1 + +input2; //making explictly a number according to the expected return output
} else {
result = input1.toString() + input2.toString();
}
return result;
}

console.log(combinable(3, 2, 'as-number'));
console.log(combinable('3', '2', 'as-number'));
console.log(combinable('Hello', 'world', 'as-string'));


```
