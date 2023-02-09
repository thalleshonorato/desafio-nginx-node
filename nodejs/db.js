const mysql = require("mysql2");
const util = require("util");

var pool = mysql
 .createPool({
  host: "database",
  user: "user",
  password: "password",
  database: "db",
  port: 3306,
  connectionLimit: 10,
 });


var sqlCreateTableNames = "CREATE TABLE if not exists db.names (name VARCHAR(255))";
pool.query(sqlCreateTableNames, (err, result) => {
  if (err) throw err;
  console.log(result);
  console.log("Table names created");
});

const query = util.promisify(pool.query).bind(pool);

module.exports = query;