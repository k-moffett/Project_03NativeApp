DROP TABLE if EXISTS users;

CREATE TABLE users (
    id INT AUTO_INCREMENT,
    displayName VARCHAR(50),
    email VARCHAR(50),
    password VARCHAR(100),
    PRIMARY KEY(id)
);

INSERT INTO users (name, password)
VALUES ('Kurt', 'derptaradyshoo46%32!');