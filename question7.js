// ! If the reverse string is similar to the original one call Palindrome
// ! Write a palindrome function. If palindrome return true otherwise return false

/**
 * ! Example 01. palindrome with the built in function and if else
 * 
 * ! Steps
 * * convert string as an array with split('')
 * * reverse the array reverse methods
 * * join back the array to string with join methods
 * * return if string === reverse string
 */

function palindrome (str) {
    const reverse = str
                        .split('')
                        .reverse()
                        .join('');
    return str === reverse; // this is the short form of the following if else
    // if(str === reverse)
    //     return true;
    // else
    //     return false;
}
console.log(palindrome('racecar')); // true
console.log(palindrome('dad')); // true
console.log(palindrome('father')); // false
console.log(palindrome('bob')); // true


/**
 * ! Example 02. palindrome with the array every methods.
 * ! Steps:
 * * Convert string to an array.
 * *Compare with every function, the first item with the last item, the second item with the last second item and so on.
 * **/
function palindromeWithEvery(str) {
    let arr = str.split('');
    let palindrome = arr.every((item, i) => {
        return item === arr[arr.length - i - 1];
    });
    return palindrome;
}
console.log(`Palindrome of ('ripon')`, palindromeWithEvery('ripon'));
console.log(`Palindrome of ('racecar')`, palindromeWithEvery('racecar'));
// ! I think this solution is pretty clear. However, it is doing twice as much as work it needs to do. For me, the solution will be a faster one.