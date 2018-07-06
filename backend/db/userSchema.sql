DROP TABLE if EXISTS users;

CREATE TABLE users (
    id INT AUTO_INCREMENT,
    username VARCHAR(50),
    email VARCHAR(50),
    password VARCHAR(100),
    sessid VARCHAR(100),
    PRIMARY KEY(id)
);

`INSERT INTO users (username, email, password, sessid)
VALUES (${connection.escape(newUser.username)}, ${connection.escape(newUser.email)}, ${connection.escape(newUser.password)}, ${connection.escape(newUser.sessid)});`
