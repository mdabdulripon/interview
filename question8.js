/**
 * ! Example 08. Convert a Number to String, Array and Object.
 */

// ! Example 01. Convert Number to a String
function convertNumberToString(num) {
    let str = num.toString()
    console.log(`​Convert Number to a String`, str);
    console.log(`​Convert Number to a String`, typeof str);

}
convertNumberToString(1234);


// ! Example 02. Convert Number to an  Array
function convertNumberToArray(num) {
    let arr = num.toString().split('');
    console.log(`​convertNumber -> arr`, arr);
    console.log(`​convertNumber -> arr`, typeof arr);
}
convertNumberToArray(1234);


/**
 * ! Example 03-a. Convert Number to an Object
 * TODO:: The typical way Using For Loop
 * */
function convertNumberToObjectTypical(num) {
    let arr = num.toString().split('');
    console.log(`​Convert -> Number -> string -> Array`, arr);
    let obj = {}
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        obj[index] = arr[index];
    }
    console.log(`​Convert -> Array -> Object`, obj);
    return obj;
}
convertNumberToObjectTypical(1234);


/**
 * ! Example 03-b. Convert Number to an Object
 * TODO:: The Modern way Using {...rest parameters}
 * */
function convertNumberToObjectModernB(num) {
    let arr = num.toString().split('');
    let convertToObj = { ...arr
    }
    console.log("​Convert to an Object", convertToObj)
}
convertNumberToObjectModernB(1234);


/**
 * ! Example 03-c. Convert Number to an Object
 * TODO:: The Modern way Using Object.assign({})
 * */
function convertNumberToObjectModernC(num) {
    let arr = num.toString().split('');
    let obcC = Object.assign({}, arr)
    console.log("​convertNumberToObjectModernC -> obcC", obcC)
}
convertNumberToObjectModernC(1234);


/**
 * !Example 04 -d. Short way to convert number to an Object
 * TODO:: The typical way Using For Loop
 * */
let number = 1234;
let obj = new Number(number);
console.log(`​obj`, obj)
