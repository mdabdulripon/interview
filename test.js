(function () {
    var a = b = 3;
})();
console.log('a : ' + (typeof a !== 'undefined')); // ! false
console.log('b : ' + (typeof b !== 'undefined')); // ! true
/**
 * ! var a = b = 3;
 * * is actually shorthand for: 
 * ? b = 3 
 * ? var a = b 
 */