//Week 3 Homework

const students = [
  {
    name: "Alex",
    age: 22,
    isEnrolled: true,
    grades: [85, 92, 78, 90],
  },
  {
    name: "Jordan",
    age: 19,
    isEnrolled: true,
    grades: [88, 76, 95, 81],
  },
  {
    name: "Maya",
    age: 24,
    isEnrolled: false,
    grades: [91, 89, 94, 97],
  },
  {
    name: "Chris",
    age: 21,
    isEnrolled: true,
    grades: [65, 72, 70, 68],
  },
  {
    name: "Taylor",
    age: 20,
    isEnrolled: true,
    grades: [58, 64, 61, 55],
  },
];

//1. Using forEach print each students name

students.forEach((student) => console.log(student.name));

//2. Create a function that:
// - Calculates a student's average grade
// - Determines their letter grade based on their average using conditionals
// - Returns both values

const averageGrade = (grades) => {
  let sum = 0;
  let grade;

  for (let i = 0; i < grades.length; i++) {
    sum += grades[i];
  }

  const average = sum / grades.length;

  if (average >= 90) grade = "A";
  else if (average >= 80) grade = "B";
  else if (average >= 70) grade = "C";
  else if (average >= 60) grade = "D";
  else grade = "F";

  return { average, grade };
};

/*3. Using the function above^^^ use a map to add that average and letter grade into the correct student object using the keys "averageGrade" and "letterGrade" so the final object should look something like this:

    name: "Alex",
    age: 22,
    isEnrolled: true,
    grades: [85, 92, 78, 90]
    averageGrade: Decimal // add this new value
    letterGrade: "B" // add this new value
*/

const gradedStudents = students.map((student) => {
  const { average, grade } = averageGrade(student.grades);
  return {
    name: student.name,
    age: student.age,
    isEnrolled: student.isEnrolled,
    grades: student.grades,
    averageGrade: average,
    letterGrade: grade,
  };
});

//4. Use filter to create a new array call topStudents for students who are enrolled AND average grade is 80 or higher

const topStudents = (students) =>
  students.filter(
    (student) => student.isEnrolled && student.averageGrade >= 80,
  );
console.log(topStudents(gradedStudents));
