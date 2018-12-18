// ! Example 01: 
console.log(sentence); // undefined
var sentence = 'the sentence is hoisted';
console.log(sentence); // the sentence is hoisted
/** 
 * ! JavaScript interpreter "looks ahead" to find all the variable declarations and "hoists" them to the top of the function.
 * ? The above example is equivalent to 
    var sentence;
    console.log(sentence);
    sentence = 'the sentence is hoisted';
    console.log(sentence);
*/




// ! Example 02: function declarations
isHoisted();

function isHoisted() {
    console.log('Yes!'); // Yes!
}
// ! Function declaration doesn't just hoist the function's name. It also hoists the actual function definition.





// ! Example 03: function declarations
funcName(); // ReferenceError: funcName is not defined
varName(); // TypeError: undefined is not a function
var varName = function funcName() {
    console.log("function declarations is not hoisted!");
};
// ! hoisting only occurs for function declarations, not function expressions