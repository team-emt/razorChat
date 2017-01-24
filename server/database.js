const pg = require('pg');

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  host: process.env.DB_HOST,
  port: "5432",
  database: process.env.DB_DATABASE,
  ssl: true
}

const pool = new pg.Pool(config);
const db = {};

pool.connect((err, db_) => {

  if (err) console.error(`Error with database connection: ${err}`);
  console.log(`connected to postgres!`);
  db_.query(`CREATE TABLE IF NOT EXISTS events
    (
    _id serial primary key,
    string varchar
    )`, (err, result) => {
      if (err) console.log(err);
      else console.log(`heyo!`);
    })

  db.conn = db_;
});

module.exports = db;
