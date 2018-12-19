// ! Example 01. reverse a string with built functions

function reverseStr(str) {
    return str
        .split('')
        .reverse()
        .join('')
}
console.log(reverseStr('ripon'));



// ! Example 02. reverse a string with Recursion

function reverseWithRecursion(str) {
    if (str === '')
        return '';
    else
        return reverseWithRecursion(str.substr(1)) + str.charAt(0);
}
console.log(reverseWithRecursion('ripon'));



// ! Example 03. reverse a for loop.
function reverseWithLoop(str) {
    let reversed = '';
    for (let char of str) {
        reversed = char + reversed
    }
    return reversed;
}
console.log(reverseWithLoop('ripon'));