const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('./routes/routes')(app)

app.listen(8080, '172.31.85.14');
console.log('Server Up!')