const fs = require('fs');

async function readDatabase(path) {
  let data;
  try {
    data = await fs.promises.readFile(path, 'utf-8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }
  const students = data.split('\n').slice(1)
    .map((student) => student.split(','))
    .map((student) => ({
      firstName: student[0],
      lastName: student[1],
      age: student[2],
      field: student[3],
    }));
  const fields = students.map((student) => student.field);
  const uniqueFields = new Set(fields);
  const studentsByField = {};
  for (const field of uniqueFields) {
    studentsByField[field] = [];
  }
  for (const student of students) {
    studentsByField[student.field].push(student.firstName);
  }
  return studentsByField;
}

export default readDatabase;
module.exports = readDatabase;
