/*
1. Reverse Number

Write a JavaScript function that reverses a number.

Example x = 32243;

Expected Output : 34223
*/

//My solution://

//Define a function called reverseNumber that takes in a number as an argument
 const reverseNumber = number => {
//Convert the number to a string because you can't reverse a number directly. Split it into an array of individual characters. Reverse the array, and join it back into a string.
    const reversedNumber = number.toString().split('').reverse().join('');
//Return the reversed number as a number by using the Number() function to convert the string back to a number.
    return Number(reversedNumber);
 }