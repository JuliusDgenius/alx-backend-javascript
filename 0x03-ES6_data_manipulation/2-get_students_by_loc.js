export default function getStudentsByLocation(listOfStudents, city) {
  const filteredList = listOfStudents.filter((student) => student.location === city);
  return filteredList;
}
