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