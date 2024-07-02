export default function getStudentsByLocation(arr, location) {
  return arr.filter((student) => student.location === location);
}
