// ! What will be the following code output?
function a() {
    return `Hello`;
}
const sentence = a('something');
console.log('​sentence:', sentence) // return hello


// ! How to make a website content editable
// document.body.contentEditable = true;



/***
 * Example: 02.
 * ! What will be the following code output?
 */

function y() {
    console.log(`length:::`, this.length); // 4
}
let myObj = {
    length: 5,
    method: function (y) {
        arguments[0]();
        console.log(arguments); // { '0': [Function: y], '1': 2, '2': 3, '3': 5 }
    }
};
myObj.method(y, 2, 3, 5)
// ! this keyword refers to the arguments array like object.



// ! What will be the following code output?
console.log(0.1 + 0.2); // 0.30000000000000004
console.log('hi'.__proto__); // [String: '']
console.log('hi'.__proto__.__proto__); // {}
console.log('hi'.__proto__.__proto__.__proto__); // null 


// ! Find total numbers of arguments for a function
// ? Every function has an object call arguments which has list of arguments that we pass in. It is an array like object
function totalAgu() {
    return [].slice.call(arguments).length;
}
console.log(totalAgu(1, 2, 3, 4, 5, 6, 7, 8, 9, 0));


/** 
 * ! Questions: 
 * ! Should return obj.x().y().z().
 * ! method chaining
 * */

let obj = {
    x: function () {
        console.log('Print - x');
        return this; // or return this obj
    },
    y: function () {
        console.log('Print - y');
        return this; // or return this obj
    },
    z: function () {
        console.log('Print - z');
        return this; // or return this obj
    }
}
obj.x().y().z();
// Answer: add Return object to each object methods.


// ! What will be the following code output?
let func = function () {
    {
        let firstName = 'ripon';
        var lastName = 'wen';
    }
    console.log(`First Name`, firstName); // first name is not defined 
    console.log(`Last Name:`, lastName); // wen
}
// func();


console.group(`What will be the output of these:`);
    // in binary data type true is consider 1 and false consider 0
    console.log(`5 < 6 < 7 :::`, 5 < 6 < 7);
    // ! 5 < 6 = true , true < 7 = true
    console.log(`7 > 6 < 5 :::`, 7 > 6 > 5);
    // ! 7 > 6 = true , true > 5 = false
    console.log(`true > 10 :::`, true > 10);
    console.log(`false > 10 :::`, false > 10);
    console.log(`true < 10 :::`, true < 10);
    console.log(`false < 10 :::`, false < 10);
console.groupEnd


/**
 * ! What will be the following code output?
 * * let arrowFun = () => arguments;
 * * console.log(arrowFun(`hi`));
 * ? arguments does not bind with arrow function 
 * ? to solve this need to use old function
 */

let arrowFun = function() {
    return arguments
};
console.log(arrowFun(`hi`));


/**
 * ! What will be the following code output?
 */

 let fun = function() {
     return 
     {
         message: 'Hi there =>'
     }
 }
 console.log(fun()); 
// this return undefined to fix it remove the line break after return.
// when you have line break it basically does nothing. ```return;```


// ! How to prevent add property in the object
let users = {
    name: 'Abdul Ripon'
}
Object.freeze(users)
users.age = '20'
users.name = 'adam'
console.log(`users`, users);

// ! How to prevent add property in the object but can modify the exiting objects
let people = {
    name: 'Mike'
}
Object.seal(people)
people.name = 'Adam';
people.age = 30;
console.log("​people", people)

// ! How to do modify name property and  dont allow to modify age for an object.
let profile = {
    name: 'Lucy'
}

Object.defineProperty(profile, 'age', {
    value: 23,
    writable : false
});

profile.name = 'Lima';
profile.age = 24; 
console.log("​profile", profile)

// ! what is answer for the following code

console.log(Math.max()) // -infinity
console.log(Math.min()) // infinity















 /**
 * ! 01. What will be the following code output?
 * ? Recursive
 */
function factional(n) {
    if (n === 1) {
        return 1
        // return 0
    }
    return n * factional(n - 1);
}
console.log('​factional', factional(5))

/**
 * ? for return 1:
 * ! 5 * 4 * 3 * 2 * 1 = 120 
 * ? for return 0:
 * !5 * 4 * 3 * 2 * 0 = 0
 * */



/**
 * ! 02. What will be the following code output?
 * ? truthy & falsey Values
 */


// ? Example 2.a.
let a = null;
if (a == undefined) {
    console.log(`Hello World`);
} else {
    console.log(`Hello Mars`);
}
/** 
 * ! This print Hello World 
 * ? Because
 * ! null return false.
 * ! undefined return false.
 */

// ? Example 2.b.
let b = null;
if (b === undefined) {
    console.log(`Hello World`);
} else {
    console.log(`Hello Mars`);
}
/** 
 * ! This print Hello Mars
 * ? Because it using === which check the type
 * ! typeof null = object
 * ! typeof undefined = undefined
 */


/**
 * ! 03. What will be the following code output?
 * ? Callback and Higher Order Function
 */
//  function add(arr) {
//      let add = arr.reduce(function())
//  }