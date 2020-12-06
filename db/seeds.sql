CREATE DATABASE burgers_db;
USE burgers_db;


CREATE TABLE burgers_db (
  id int AUTO_INCREMENT,
  burger_name varchar(30) NOT NULL,
  devoured BOOLEAN,
  PRIMARY KEY(id)
);