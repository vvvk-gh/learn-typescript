function sum(n1, n2) {
    return n1 + n2;
}
function printValue(n) {
    console.log('The Printed Values:' + n);
}
//This give an error : Expected 1 arguments, but got 2.
//printValue(5,sum(3, 5));
//This give work 
printValue((sum(6, 3)));
//function type
//let combineValues: Function;
//Telling that combineValues is a function that accepts only 2 numbers as parameter and expected output is also a number
var combineValues;
// combineValues = printValue -> this gives an error
//combineValues = 5;
combineValues = sum;
combineValues(9, 9);
