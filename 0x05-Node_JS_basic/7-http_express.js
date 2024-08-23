const express = require('express');

const app = express();
const port = 1245;
const students = require('./3-read_file_async');

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  students(process.argv[2]).then((data) => {
    res.write('This is the list of our students\n');
    res.write(`Number of students: ${data.students.length}\n`);
    res.write(`Number of students in CS: ${data.csStudents.length}. List: ${data.csStudents.join(', ')}\n`);
    res.write(`Number of students in SWE: ${data.sweStudents.length}. List: ${data.sweStudents.join(', ')}`);
  }).catch((err) => res.status(500)
    .send(err instanceof Error ? err.message : err.toString()))
    .finally(() => {
      res.end();
    });
});

app.listen(port);

module.exports = app;
