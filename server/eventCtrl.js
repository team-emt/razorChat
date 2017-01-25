const db = require('./database');
// require razorframe to add error-handling functionality
const { rz } = require('razorframe');

module.exports = {

  addToDb: (MSG) => {
    console.log(`function addToDb argument: ${MSG.contents}`);
    let text = MSG.contents;
    db.query(`
    INSERT INTO events 
    (_id, string )
    VALUES 
    (default, '${text}')
    `, (err, result) => {

       /**
        * Error handling function is part of Razorframe.js
        * Pass in number of attempts wanted as second argument
        */
        if (err) rz.onError(MSG, 2);
        else console.log(`row added.`);
      });
  },

  showAll: (socket) => {
    let toEmit;

    // imported 'db' is actually the 'pool' object
    // results from query are organized in an array
    // assigning 'toEmit' variable to the results + emitting back to client
    db.query(`SELECT string FROM events`, (err, results) => {
      if (err) console.error(err);
      toEmit = results.rows.map((row) => { return row.string });
      socket.emit('dbOnLoad', toEmit);
    });
  }

}
