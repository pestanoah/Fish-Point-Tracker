const express = require("express");
const sql = require("mssql");
require("dotenv").config();
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000;

// connect to sql database
const sqlConfig = {
  user: "pestanoah",
  password: process.env.SQL_PASS,
  server: "fitness-server-prod.database.windows.net",
  database: "fitness",
};

app.use(bodyParser.json());

// log every request
app.use((req, res, next) => {
  console.log(
    `${req.method} request for '${req.url}' - ${JSON.stringify(req.body)}`
  );
  next();
});

app.get("/api/hello", (req, res) => {
  /**
   * Used for testing the server
   */
  res.send({ express: "Hello world!" });
});

app.post("/api/exercise", async (req, res) => {
  /**
   * Expects a JSON object with the following properties:
   * - name: string
   */

  // add a new exercise to the database
  await sql.connect(sqlConfig);
  const { name } = req.body;
  const result = await sql.query(
    `INSERT INTO Exercise (name) VALUES ('${name}')`
  );
  res.send(result);
});

app.post("/api/set", async (req, res) => {
  /**
   * Add a set to the databse, a set belongs to a workout
   * Expects a Json object with the following properties:
   * - Workoutid: int
   * - Exerciseid: int
   * - Reps: int
   * - Weight: int
   */
  const { Workoutid, Exerciseid, Reps, Weight } = req.body;
  await sql.connect(sqlConfig);
  const result = await sql.query(
    `INSERT INTO Set (Workoutid, Exerciseid, reps, weight) VALUES (${Workoutid}, ${Exerciseid}, ${Reps}, ${Weight})`
  );
  res.send(result);
});

app.post("/api/workout", async (req, res) => {
  /**
   * Add a workout to the database
   * Expects a Json object with the following properties:
   *
   * - day: int
   **/
  const { day } = req.body;
  await sql.connect(sqlConfig);
  const result = await sql.query(`INSERT INTO Workout (day) VALUES (${day})`);
  res.send(result);
});

app.post("/api/program", async (req, res) => {
  /**
   * Add a program to the database
   * Expects a Json object with the following properties:
   * - name: string
   * - description: string
   **/
  // TODO: Might need to connect program to user with the Program_User table
  const { name, description } = req.body;
  await sql.connect(sqlConfig);
  const result = await sql.query(
    `INSERT INTO Program (name, description) VALUES ('${name}', '${description}')`
  );
  res.send(result);
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
