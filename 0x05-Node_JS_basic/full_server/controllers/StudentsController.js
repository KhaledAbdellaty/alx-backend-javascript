const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    const dataPath = process.argv.length > 2 ? process.argv[2] : '';
    readDatabase(dataPath).then((data) => {
      response.write('This is the list of our students\n');
      response.write(`Number of students in CS: ${data.CS.length}. List: ${data.CS.join(', ')}\n`);
      response.write(`Number of students in SWE: ${data.SWE.length}. List: ${data.SWE.join(', ')}`);
    }).catch((err) => response.status(500)
      .send(err instanceof Error ? err.message : err.toString()))
      .finally(() => {
        response.end();
      });
  }

  static getAllStudentsByMajor(request, response) {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      response.status(500)
        .send('Major parameter must be CS or SWE');
      response.end();
      return;
    }
    readDatabase('./database.csv').then((data) => {
      response.write(`List: ${data[major].join(', ')}`);
    }).catch((err) => response.status(500)
      .send(err instanceof Error ? err.message : err.toString()))
      .finally(() => {
        response.end();
      });
  }
}

export default StudentsController;
module.exports = StudentsController;
