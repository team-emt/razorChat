const pg = require('pg');
const pool = new pg.Pool(process.env.RZCHAT_DB_URI);
const db = {};

pg.defaults.ssl = true;

pg.connect(process.env.RZCHAT_DB_URI, (err, db_) => {
  console.log('----------------------------------');
  console.log(process.env.RZCHAT_DB_URI);
  console.log(process.env.DATABASE_URL);
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
