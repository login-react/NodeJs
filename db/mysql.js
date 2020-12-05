const mysql = require("mysql");
const coon = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345678",
  port: 3306,
  database: "boblog",
});
coon.connect();

function exec(sql) {
  const promise = new Promise((resolve, reject) => {
    coon.query(sql, (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });
  return promise;
}
module.exports = {
  exec,
};
