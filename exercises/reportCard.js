/*
You have an array of students with their names and scores. Use forEach to print a report card for each student that includes their name, score, and letter grade.
*/

//DATA
const students = [
  { name: "Alex", score: 92 },
  { name: "Jordan", score: 67 },
  { name: "Sam", score: 45 },
  { name: "Taylor", score: 81 },
  { name: "Morgan", score: 73 },
]

students.forEach(function (student) {
  let grade
  
  if (student.score >= 90) {
    grade = "A"
  } else if (student.score >= 80) {
    grade = "B"
  } else if (student.score >= 70) {
    grade = "C"
  } else if (student.score >= 60) {
    grade = "D"
  } else {
    grade = "F"
  }

  console.log(
    `Report Card: ${student.name} | Score: ${student.score} | Grade: ${grade}`,
  )
})
