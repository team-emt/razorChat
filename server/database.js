const pg = require('pg');
const url = require('url');
const params = url.parse(process.env.RZCHAT_DB_URI);
const auth = params.auth.split(':');

const config = {
  user: auth[0],
  password: auth[1],
  host: params.hostname,
  port: params.port,
  database: params.pathname.split('/')[1],
  ssl: true
};

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
