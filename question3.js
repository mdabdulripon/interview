// ! Find even and odd numbers from an Array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// ? Even Number 
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(`Even Numbers`, evenNumbers);


// ? Odd Numbers
let oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log(`​Odd Numbers`, oddNumbers);
