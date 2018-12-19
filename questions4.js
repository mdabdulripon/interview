/**
 * ! Questions: Remove duplicates items form an Array
 * ? [1, 2, 3, 9, 5]
 */

const numbers = [1, 3, 7, 9, 5, 2, 3, 9, 5];
const names = ['Mike', 'Matt', 'Nancy', 'Adam', 'Jenny', 'Nancy', 'Mike', 'Carl'];

/** 
 * ! Solutions O1.Using Set data Structure
 * * Sets data Structure Doss not allow duplicate items
 * * It return an Objects
 * * To convert it we can use spread Operators
*/
let removeDuplicatesNumber = [...new Set(numbers)];
console.log(`​Remove Duplicates Number`, removeDuplicatesNumber)

let removeDuplicatesName = [...new Set(names)]
console.log(`​Remove Duplicates Name:`, removeDuplicatesName)


/** 
 * ! Solutions O2. Using Object and Object.keys() functions
 * 
 * * Create an empty Object name let obj = {}
 * * loop through each items by forEach and add pass in to the obj
 * * Because Objects Keys are identical 
 * * Convert Objects to the an Array
 */
 let numObj = {}
 numbers.forEach( num => {
    return numObj[num] = true;
 });
 console.log(`​obj`, numObj);
 let newArr = Object.keys(numObj);
 console.log(`New Number Arr`, newArr)

let nameObj = {};
names.forEach(name => {
    return nameObj[name] = 'ripon';
})
console.log("​nameObj", nameObj);
let newName = Object.keys(nameObj);
console.log(`New Name`, newName);


/** 
 * ! Solutions O3. Using loop
 * 
 * * Create an empty array name items
 * * loop through each array elements by forEach
 * * Check if elements is present to the items array. If items is not present then push.
 */

let numberHolder = [];
numbers.forEach(num => {
    if(numberHolder.includes(num) === false) {
        numberHolder.push(num);
    }
});
console.log(`​Number Holder`, numberHolder)


let nameHolder = [];
names.forEach(name => {
    if (nameHolder.includes(name) === false) {
        nameHolder.push(name);
    }
});
console.log(`name Holder`, nameHolder)

