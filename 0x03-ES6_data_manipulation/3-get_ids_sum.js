export default function getStudentIdsSum(arr) {
  return arr.reduce((x, v) => x + v.id, 0);
}
