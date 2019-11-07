CREATE DATABASE premierLeague_db;
USE premierLeague_db;


CREATE TABLE matches (
  match_id INTEGER(11) AUTO_INCREMENT NOT NULL,
  matchDay VARCHAR(50) NOT NULL,
  date VARCHAR(50) NOT NULL,
  team1 VARCHAR(50) NOT NULL,
  team1score INTEGER(10) DEFAULT 0,
  team2 VARCHAR(50) NOT NULL,
  team2score INTEGER(10) DEFAULT 0,
  PRIMARY KEY (match_id)
);