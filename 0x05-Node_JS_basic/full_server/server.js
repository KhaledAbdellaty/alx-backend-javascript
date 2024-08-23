import express from 'express';

const indexRouter = require('./routes/index');

const app = express();
const port = 1245;

app.listen(port);
app.use('/', indexRouter);
app.use('/students', indexRouter);
app.use('/students/:major', indexRouter);

export default app;
module.exports = app;
