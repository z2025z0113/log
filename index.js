console.log('node js server.2025-05-09 13:30:25');
// use database for this project ,sqlite3.
// format [date time .thing .money .category]
//every day over ,analysis today 's data. to change tomorrow behaviour.

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('log.db', (err) => {
  if (err) {
    console.error('Error opening database ' + err.message);
  } else {
    console.log('Connected to the SQLite database.');
  }
});
db.run(
  `CREATE TABLE IF NOT EXISTS log1995 (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    date TEXT,
    time TEXT,
    thing TEXT,
    money REAL,
    category TEXT
  )`,
  (err) => {
    if (err) {
      console.error('Error creating table ' + err.message);
    } else {
      console.log('Table created or already exists.');
    }
  }
);