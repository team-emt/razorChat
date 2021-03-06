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

pool.connect((err) => {
  if (err) console.error(err);
  console.log('successfully connected to db through pooling!');
});

pool.query(`
  CREATE TABLE IF NOT EXISTS events (
    _id serial primary key, 
    string varchar
    )`, (err, result) => {
    if (err) console.log(err);
    else console.log(`events table created`);
  });

module.exports = pool;


