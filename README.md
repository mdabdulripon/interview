# Coding Interview Questions:
<!-- cSpell: ignore gmail, fahmida, stringify, proto, typeof, Truthy & Falsey -->

## Question 01: What will the code below output to the console and why? [Solutions](https://github.com/mdabdulripon/interview/blob/master/question1.js).
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

## Questions 02: What will the code below output to the console and why? [Solutions](https://github.com/mdabdulripon/interview/blob/master/question2.js).

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

## Question 03: Find even and odd numbers from an Array  [Solutions](https://github.com/mdabdulripon/interview/blob/master/question3.js).

## Question 04: Remove duplicates items form an Array [Solutions](https://github.com/mdabdulripon/interview/blob/master/question4.js).

## Question 05: What will the code below output to the console and why? [Solutions](https://github.com/mdabdulripon/interview/blob/master/question5.js).

- [x] console.log([] + []);
- [x] console.log('2' + '2');
- [x] console.log(2 + '2' + '2' + 2 + 5 + 2);
- [x] console.log('2' - '2');


## Question 06: How to reverse a string? [Solutions](https://github.com/mdabdulripon/interview/blob/master/question6.js).

## Question 07: Write a palindrome function. If palindrome return true or return false? [Solutions](https://github.com/mdabdulripon/interview/blob/master/question7.js).
**If the reverse string is similar to the original one call Palindrome**
