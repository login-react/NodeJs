const mysql = require("mysql");
const coon = mysql.createConnection({
  host: "119.45.228.169",
  user: "root",
  password: "Yingying147258",
  port: 1298,
  database: "docs",
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
