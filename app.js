function combinable(input1, input2) {
    var result;
    if (typeof input1 === "number" && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
console.log(combinable(3, 2));
console.log(combinable('3', '2'));
console.log(combinable('Hello', 'world'));
