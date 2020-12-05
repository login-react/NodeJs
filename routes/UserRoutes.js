const app = require("express");
const router = app.Router();
const { exec } = require("../db/mysql");
router.get("/list", (req, res) => {
  const { name } = req.query;
  const sql = `select * from admin where nickname like '%${name}%'`;
  exec(sql)
    .then((result) => {
      return res.json({
        msg: "查询成功",
        result,
      });
    })
    .catch((err) => {
      return res.json({
        msg: "查询失败",
        result: err,
      });
    });
});
module.exports = router;
