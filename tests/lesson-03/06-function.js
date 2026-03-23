// 1) multiply
function multiply(a, b) {
  return a * b;
}
console.log(multiply(2, 3));
console.log(multiply(4, 5));

// 2) findMin
function findMin(a, b, c) {
  return Math.min(a, b, c);
}
console.log(findMin(10, 5, 8));
console.log(findMin(2, 7, 1));

// 3) getTopStudents
function getTopStudents(students, threshold) {
  const topNames = [];
  for (const student of students) {
    if (student.score >= threshold) {
      topNames.push(student.name);
    }
  }
  return topNames;
}

const studentList = [
  { name: "An", score: 8.5 },
  { name: "Binh", score: 6.5 },
  { name: "Chau", score: 9.0 },
];
console.log(getTopStudents(studentList, 8));

// 4) calculateInterest
function calculateInterest(principal, rate, years) {
  return principal + (principal * rate * years) / 100;
}
console.log(calculateInterest(1000, 5, 2));

