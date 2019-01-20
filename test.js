/**
 * ! Question 09: Write a reverse integer function. [Solutions](https://github.com/mdabdulripon/interview/blob/master/question9.js).
 * 
 * TODO:::
 * ? reverseInt(15)  || should return 51
 * ? reverseInt(189) || should return 981
 * ? reverseInt(500) || should return 5
 * ? reverseInt(-15) || should return -51
 * ? reverseInt(-90) || should return -9
 */

// ! Trick 1: Using toString // return the string
// ! Trick 2: Using Math.sign() // return the sign 
// ! Trick 3: parseInt() return the number 

function reverseInt (num) {
    // ? convert the number to -> string -> array -> reverse -> join back 
    let reverseStr = num.toString().split('').reverse().join('');
    // ? return the the result as number
    let reverseNumber = parseInt(reverseStr);
    // ? to bring back the sign 

    return reverseNumber * Math.sign(num) 

    // ? the other way bring the sign back
    // if (num > 0) {
    //     return reverseNumber
    // } else {
    //     return reverseNumber * -1;
    // }
}
console.log(reverseInt(15));
console.log(reverseInt(189));
console.log(reverseInt(500));
console.log(reverseInt(-15));
console.log(reverseInt(-90));