function add(num1: number, num2: number, showResult: boolean, showPharse: string) {
    const result = num1 + num2;
    if (showResult) {
        console.log(showPharse + result);
    } else {
        return result;
    }
}

const n1 = 6;
const n2 = 3.9;
const printResult = true;
const pharse = 'The sum is :';

add(n1, n2, printResult, pharse);