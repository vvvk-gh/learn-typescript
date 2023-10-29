function combinable(input1, input2, returnOutput) {
    var result;
    if (typeof input1 === "number" && typeof input2 === 'number' || returnOutput === 'as-number') {
        result = +input1 + +input2; //making explictly a number according to the expected return output
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
//adding a third argument which specifies the output of the result
//console.log(combinable(3, 2, 'as-number'));
console.log(combinable('3', '2', 'as-number'));
//console.log(combinable('Hello', 'world', 'as-string'));
