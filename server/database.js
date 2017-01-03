const pg = require('pg');

const DATABASE_URL = 'postgres://spnypbauqtkiqz:c16333dbf85de04e35a47218d9a5fd2bedefa0739ad72678970b5f70bbfbc41d@ec2-50-17-207-16.compute-1.amazonaws.com:5432/dcmsti8l9anfmc';

const db = {};

pg.defaults.ssl = true;
pg.connect(DATABASE_URL, (err, db_) => {

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
