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


## Question 04: What will the code below output to the console and why? [Solutions](https://github.com/mdabdulripon/interview/blob/master/question3.js).