function sortStudentsByScore(students) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  for (let i = 0; i < students.length; i++) {
    for (let j = 0; j < students.length - 1; j++) {
      if (students[j].score < students[j + 1].score) {
        let result = students[j];
        students[j] = students[j + 1];
        students[j + 1] = result;
      }
    }
  }
  console.log(students[1].score);
  return students;
}

console.log(
  sortStudentsByScore([
    { id: "S001", name: "Anan", score: 85 },
    { id: "S002", name: "Boon", score: 92 },
    { id: "S003", name: "Chai", score: 78 },
    { id: "S004", name: "Dao", score: 95 },
    { id: "S005", name: "Ek", score: 88 },
    { id: "S006", name: "Fah", score: 80 },
  ])
);
