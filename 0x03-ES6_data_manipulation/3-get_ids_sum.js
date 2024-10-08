export default function getStudentIdsSum(listOfStudents) {
  const initialValue = 0;
  return listOfStudents.map((student) => student.id)
    .reduce((sum, currentValue) => sum + currentValue, initialValue);
}
