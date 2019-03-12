## Coding Interview Questions:
<!-- cSpell: ignore gmail, fahmida, stringify, proto, typeof, Truthy & Falsey -->

## What will the code below output to the console and why? [Solutions](https://github.com/mdabdulripon/interview/blob/master/question1.js).
<!-- Example 01. -->
```
    (function(){
        var a = b = 3;
    })();
    console.log('a :' + (typeof a !== 'undefined'));
    console.log('b :' + (typeof b !== 'undefined'));
```
<!-- Example 02. -->
```
    var name = "Ripon";
    (function () {
        console.log("Original name was " + name);
        var name = "Wen";
        console.log("New name is " + name);
    })();
```

## What will the code below output to the console and why? [Solutions](https://github.com/mdabdulripon/interview/blob/master/question2.js).

<!-- Variables -->
```
    console.log(sentence);
    var sentence = 'the sentence is hoisted';
    console.log(sentence);
```

<!-- function declarations -->
```
    isHoisted();
    function isHoisted() {
        console.log('Yes!');
    }
```

<!-- Function expression. -->
```
    funcName();
    varName();
    var varName = function funcName() {
        console.log("Definition not hoisted!");
    };
```

## Find even and odd numbers from an Array  [Solutions](https://github.com/mdabdulripon/interview/blob/master/question3.js).

## Remove duplicates items form an Array [Solutions](https://github.com/mdabdulripon/interview/blob/master/question4.js).

## What will the code below output to the console and why? [Solutions](https://github.com/mdabdulripon/interview/blob/master/question5.js).

- [x] console.log([] + []);
- [x] console.log('2' + '2');
- [x] console.log(2 + '2' + '2' + 2 + 5 + 2);
- [x] console.log('2' - '2');


## How to reverse a string? [Solutions](https://github.com/mdabdulripon/interview/blob/master/question6.js).

## Write a palindrome function. If palindrome return true or return false? [Solutions](https://github.com/mdabdulripon/interview/blob/master/question7.js).
**If the reverse string is similar to the original one call Palindrome**

## Convert a Number to String, Array and Object. [Solutions](https://github.com/mdabdulripon/interview/blob/master/question8.js).

## Write a reverse integer function. [Solutions](https://github.com/mdabdulripon/interview/blob/master/question9.js).
- [x] reverseInt(15)  || should return 51
- [x] reverseInt(189) || should return 981
- [x] reverseInt(500) || should return 5
- [x] reverseInt(-15) || should return -51
- [x] reverseInt(-90) || should return -9


## Function Declaration & Expression
**What will be the output for below code and why?**
```
    ###### Question 1:
    function foo() {
        function bar() {
            return 3;
        }
        return bar();
        function bar() {
            return 8  
        }
    }
    console.log(foo()); // return 8 [because it is hoisted.]
```
```
    ###### Question 2:
    function foo(){
        var bar = function() {
            return 3; 
        };
        return bar();
        var bar = function() {
            return 8; // this not return because function expression does not hoisted
        };
    }
    console.log(foo()); // return 3 
```
```  
    ###### Question 3:
    console.log(foo()); // return 3 [function declaration ]
    function foo(){
        var bar = function() {
            return 3; 
        };
        return bar();
        var bar = function() {
            return 8; // this not return because function expression does not hoisted
        };
    }
```
```
    ###### Question 4:
    function foo(){
        return bar();
        var bar = function() {
            return 3;
        };
        var bar = function() {
            return 8;
        };
    }
    console.log(foo()); 
    // ! Return an error: [Uncaught TypeError: bar is not a function]
    // ! this not return because function expression does not hoisted.
```

## The difference between var, let and const declarations
```
    function varDeclaration() {
        for(var i = 0; i < 10; i++) {
            console.log('inside the loop-> i', i) // return 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
        }
        console.log('outside the loop-> i', i) // return 10
    }
    varDeclaration();
    // console.log('outside the function', i) // ? ReferenceError: i is not defined
```
> Note: The first console will print values 0 to 9 then the last console log will print the value 10. In this case, var is a functional scope which is available inside the function. The last console throws an Error because The Function Scope does not exist outside of the functions.

```
    function letDeclaration() {
        for (let i = 0; i < 10; i++) {
            console.log(`inside the loop`, i) // return 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
        }
        console.log(`outside the loop`, i) // ? ReferenceError: i is not defined
    }
    letDeclaration();
    console.log('outside the function', i) // ? ReferenceError: i is not defined
```
> Note: The first console will print values 0 to 9 let is available inside the scope. The Other two console will throw an error because let is a block label scope.

```
    const user = {
        name: 'fahmida',
        age: 27,
    }
    user.name = 'ripon'; // ! can change the value of property.
    user.email = 'ripon@gmail.com'; // ! can add new property and assign the value 
    console.log(`user`, user);

    user = {
        name: 'Mun Mun' // ! Can not Re Declared the the variable 
    }
    const person = 'fahmida';
    console.log('person', person)
    person = 'ripon' // ! Can not Re Declared the the variable 
```

```
    var i
    i = 34
    for (let i = 0; i < 4; i++) {
        console.log(`xxxxx`, i) // 0, 1, 2, 3
    }
    console.log(`yyyyy`, i) // 34
```

# Convert the object to an Array
```
    let obj = {
        a: 1,
        b: 2
    };

    // ? Step 01:
    const arr = Object.keys(obj);
    console.log('arr', arr);

    // ? Step 02:
    let arr2 = [];
    for ( let item in obj) {
        arr2.push(item);
    }
    console.log('arr2', arr2);
```

# Convert the Array to an Object
```
    let arr = ['a', 'b', 'c'];

    // ? Example 01:
    let obj1 = Object.assign({}, arr);
    console.log('obj1', obj1)

    // ? Example 02:
    let obj2 = {};
    for(let i = 0; i < arr.length; i++) {
        obj2[i] = arr[i]
    }
    console.log('obj2', obj2)
```


# Method Chaining
```
    const obj = {
        a: 1,
        b: 2,
        getA() {
            console.log(`a`, this.a);
            // to get to next method you have to 
            return this;
        },
        getB() {
            console.log(`b`, this.b);
        }
    };
    obj.getA().getB(); // it return an error in getB()
```

# Cloning an Object
```
    const obj = {
        a: {
            b: {
                c : 1
            }
        }
    };

    //  Solution 1 :
    const close = JSON.parse(JSON.stringify(obj));
    console.log('close', close)

    //  Solution 2 :
    const clone2 = Object.assign({}, obj);
    console.log(`clone 2:`, clone2);
```
# Combine this two array into one and display in order.
```
    const a = [1, 2, 5, 9, 10 ];
    const b = [2, 4, 9, 12, 100];

    const result = a.concat(b).sort( (a ,b) => a - b)
    console.log(`result`, result);
```

# What will be the output of the following code?
```
    const obj = {
        x: 1,
        getX() {
            const inner = function () {
                console.log(`inner:`, this.x);
            };
            inner();
        },
    }
    obj.getX(); // return undefined 
    
    // Solution 1 
    const obj1 = {
        x: 1,
        getX() {
            const inner = function () {
                console.log(`inner1:`, this.x);
            }
            inner.bind(this)();
        },
    }
    obj1.getX();

    // Solution 2
    const obj2 = {
        x: 1,
        getX() {
            const inner = () => {
                console.log(`inner2:`, this.x);
            };
            inner();
        },
    }
    obj2.getX();

    // Solution 1
    const obj3 = {
        x: 1,
        getX() {
            const self = this;
            const inner = function () {
                console.log(`inner3:`, self.x);
            };
            inner();
        },
    }
    obj3.getX();
```