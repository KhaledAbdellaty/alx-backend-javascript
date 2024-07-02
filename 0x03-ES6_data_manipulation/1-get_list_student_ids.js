export default function getListStudentIds(arr) {
  if (arr instanceof Array) return arr.map((value) => value.id);
  return [];
}
