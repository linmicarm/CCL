/*
Exercise: Build a Grade Calculator
Write a function called getGrade that takes a student's name and their 
test score as parameters. Based on the score, the function should 
log a message telling them their grade.

90 and above → A
80 to 89 → B
70 to 79 → C
60 to 69 → D
Below 60 → F
*/

//My solution://

//Define the function getGrade with parameters name and testScore
const getGrade = (name, testScore) => {
//Use if-else statements to determine the grade based on the test score
  if (testScore >= 90){
    console.log(`${name}, you got an A.`)
  } else if (testScore >= 80){
    console.log(`${name}, you got a B.`)
  } else if (testScore >= 70){
    console.log(`${name}, you got a C.`)
  } else if (testScore >= 60){
    console.log(`${name}, you got a D.`)
  } else if (testScore >= 0){
    console.log(`${name}, you got an F.`)
  } else{
//If the test score is negative, log that the score is impossible
    console.log(`${name}, that score is impossible.`)
  }
}
