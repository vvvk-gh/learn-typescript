function add(num1, num2, showResult, showPharse) {
    var result = num1 + num2;
    if (showResult) {
        console.log(showPharse + result);
    }
    else {
        return result;
    }
}
var n1 = 6;
var n2 = 3.9;
var printResult = true;
var pharse = 'The sum is :';
add(n1, n2, printResult, pharse);
