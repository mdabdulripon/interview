// ! Example 01.
(function () {
    var a = b = 3;
})();
console.log('a : ' + (typeof a !== 'undefined')); // ! false
console.log('b : ' + (typeof b !== 'undefined')); // ! true
/**
 * ! var a = b = 3;
 * * is actually shorthand for: 
    b = 3 
    var a = b 
 */


// ! Example 01.
var name = "Ripon";
(function () {
    console.log("Original name was " + name);
    var name = "Wen";
    console.log("New name is " + name);
})();

/**
 * ! due to hoisting name is undefined,
 * ! Since the name is also declared in the inner scope it will look for the inner variable.
var name = "Ripon";
(function () {
    var name;
    console.log("Original name was " + name);
    name = "Wen";
    console.log("New name is " + name);
})();
 *  */