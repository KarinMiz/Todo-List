const dotenv = require("dotenv");
dotenv.config();

const Pool = require("pg").Pool;

const pool = new Pool({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
});

module.exports = pool;










// const { Pool } = require("pg");
// const connectDb = async () => {
//   try {
//     const pool = new Pool({
//       host: process.env.PGHOST,
//       user: process.env.PGUSER,
//       password: process.env.PGPASSWORD,
//       database: process.env.PGDATABASE,
//     });
//     await pool.connect();
//     const res = await pool.query("SELECT * FROM tasks");
//     console.log(res);
//     await pool.end();
//   } catch (error) {
//     console.log(error);
//   }
// };
// connectDb();

// // const mysql = require("mysql");

// // const connection = mysql.createConnection(config);

// // connection.connect(function (err) {
// //   if (err) throw err;
// //   console.log("Connected to my sql db!");
// // });

// // module.exports = connection;

