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
