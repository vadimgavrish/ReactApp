CREATE DATABASE Boilerplate;
USE Boilerplate;

CREATE TABLE Users
(
	UserId INT NOT NULL AUTO_INCREMENT,
	UserName VARCHAR( 32 ) NOT NULL,
	Password VARCHAR( 32 ),
	Email VARCHAR( 128 ),
	PRIMARY KEY( UserId ),
	INDEX( UserName ASC )
);

INSERT INTO Users ( UserName, Email ) VALUES ( 'root', 'root@boiler.plate' );
INSERT INTO Users ( UserName, Email ) VALUES ( 'red', 'blue@boiler.plate' );
INSERT INTO Users ( UserName, Email ) VALUES ( 'green', 'green@boiler.plate' );
INSERT INTO Users ( UserName, Email ) VALUES ( 'blue', 'blue@boiler.plate' );
