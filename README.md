# Coding Interview Questions:
<!-- cSpell: ignore gmail, fahmida, stringify, proto, typeof, Truthy & Falsey -->

## Example 01: What will the code below output to the console and why?
```
    (function(){
        var a = b = 3;
    })();
    console.log('a :' + (typeof a !== 'undefined'));
    console.log('b :' + (typeof b !== 'undefined'));
```