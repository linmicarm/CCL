/*
Weekend Homework: 

Student Grade Analyzer
Using only what you've learned this week, build a grade analyzer that processes a class of students and reports back key information.

The Data
const students = ["Alex", "Jordan", "Sam", "Taylor", "Morgan"];
const scores =   [92,     67,       45,     81,        73];

Part 1 — Analyze the Class
Write a `for` loop that goes through every student and logs their name, their letter grade, and whether they are passing or failing. 
At the end of the loop log the class average.

Expected output:
Alex - A - Passing
Jordan - D - Passing
Sam - F - Failing
Taylor - B - Passing
Morgan - C - Passing
Class average: 71.6

Think about: What variables do I need to declare before the loop starts? 
What needs to happen inside the loop on every iteration? 
What should only happen after the loop is done?
*/

const students = ["Alex", "Jordan", "Sam", "Taylor", "Morgan"];
const scores = [92, 67, 45, 81, 73];
let classAverage = 71.6;

//Create a for loop to run through the students and scores arrays, and log the name, letter grade, and passing status for each student.
for (let i = 0; i < students.length; i++) {
  if (scores[i] >= 90) {
    console.log(`Name: ${students[i]}, Grade: A, Passing`);
  } else if (scores[i] >= 80) {
    console.log(`Name: ${students[i]}, Grade: B, Passing`);
  } else if (scores[i] >= 70) {
    console.log(`Name: ${students[i]}, Grade: C, Passing`);
  } else if (scores[i] >= 60) {
    console.log(`Name: ${students[i]}, Grade: D, Passing`);
  } else {
    console.log(`Name: ${students[i]}, Grade: F, Failing`);
  }
}
// Log the class average at the end of the loop.
console.log(`Class Average: ${classAverage}`);

/*
Part 2 — Find the Highest Scorer
Write a `while` loop that goes through the scores and tracks the highest score and the name of the student who got it. 
Log the result at the end.

Expected output:
Top student: Alex with a score of 92

Think about: What do I need to keep track of as the loop runs? How do I update my tracking variable when I find a higher score?
*/

let i = 0;
let highScore = scores[0];
let topStudent = students[0];

//Create a while loop to go through the scores array and track the highest score and the name of the student who got it.
while (i < students.length) {
  let currentScore = scores[i];
  if (currentScore > highScore) {
    highScore = currentScore;
    topStudent = students[i];
  }
  i++;
}
console.log(`Top Student: ${topStudent}, with a score of ${highScore}`);