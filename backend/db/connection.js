const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'project03.crw7awixshbk.us-east-1.rds.amazonaws.com',
  user     : 'scraw',
  password : 'H6f3eo7g90',
  database : 'project03_db'
});
 
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
 
connection.end();