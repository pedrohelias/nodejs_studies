CREATE DATABASE aprendizado_node;
use aprendizado_node;

CREATE TABLE usuarios(
	nome VARCHAR(100) NOT NULL,
    email VARCHAR(200) NOT NULL UNIQUE,
    idade INT NOT NULL
);

INSERT INTO usuarios(nome, email, idade)
VALUES('Pedro', 'pedrohelias95@hotmail.com', 26);

