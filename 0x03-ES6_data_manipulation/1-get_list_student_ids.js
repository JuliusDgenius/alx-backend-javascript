import getListStudents from './0-get_list_students';

export default function getListStudentIds(arr) {
  if (Array.isArray(arr)) {
    const studentIds = [];
    arr.map((student) => studentIds.push(student.id));
    return studentIds;
  }
  return [];
}
