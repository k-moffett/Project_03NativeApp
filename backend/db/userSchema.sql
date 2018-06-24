DROP TABLE if EXISTS users;

CREATE TABLE users (
    id INT AUTO_INCREMENT,
    name VARCHAR(50),
    password VARCHAR(100),
    PRIMARY KEY(id)
);

INSERT INTO users (name, password)
VALUES ('Kurt', 'derptaradyshoo46%32!');