const mysql = require('mysql');

const config = {
  host: "localhost",
  user: "root",
  password: "MSKarin1803!",
  database: "todolist_schema"
}

const connection = mysql.createConnection(config);

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected to my sql db!");
});

module.exports = connection;