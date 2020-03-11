BEGIN;

CREATE TABLE fruits(
   id SERIAL PRIMARY KEY,
   name VARCHAR NOT NULL
);


INSERT INTO fruits(name) 
VALUES('Orange'),('Apple'),('Papaya'),('Banana');



COMMIT;