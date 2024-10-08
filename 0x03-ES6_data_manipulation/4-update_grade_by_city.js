export default function updateStudentGradeByCity(listOfStudents, city, newGrade) {
  const filteredList = listOfStudents.filter((student) => student.location === city)
    .map((student) => {
      const gradeObj = newGrade.find((grade) => grade.studentId === student.id);

      return {
        ...student, // Spread the student object
        grade: gradeObj ? gradeObj.grade : 'N/A', // Add the grade if found
      };
    });
  return filteredList;
}
