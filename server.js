const mysql = require("mysql2");
const dotenv = require("dotenv");
const express = require("express");
const port = 4400;

const app = express();
dotenv.config();

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

//question 1

app.get("/patients", (req, res) => {
  const sql =
    "SELECT patient_id, first_name, last_name, date_of_birth FROM patients";

  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});

//question2
app.get("/providers", (req, res) => {
  const sql = "SELECT first_name, last_name, provider_specialty FROM providers";

  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});

//question3
app.get("/patients", (req, res) => {
  const sql = "SELECT first_name FROM patients";

  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});

//question 4
app.get("/providers_specialty/:specialty", (req, res) => {
  const { specialty } = res.params;
  ("SELECT first_name, last_name, provider_speciality FROM providers");

  db.query(sql, [specialty], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
