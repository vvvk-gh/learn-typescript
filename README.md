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
