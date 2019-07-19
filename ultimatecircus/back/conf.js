const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "cousin33",
  database: "wildcircus"
});
const portnumber = 8000;

module.exports = { db, portnumber };
