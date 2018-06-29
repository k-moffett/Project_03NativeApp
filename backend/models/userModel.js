const connection = require('../db/connection')
connection.connect();

const userModel = {
    createUser(data) {
        console.log(data, 'userModel')
        connection.query(`INSERT INTO users (displayName, email, password) VALUES (${connection.escape(data.displayName)}, ${connection.escape(data.email)}, ${connections.escape(data.password)}))`, function (error, results, fields) {
            if (error) throw error;
            console.log('The solution is: ', results[0].solution);
          });
    }
}