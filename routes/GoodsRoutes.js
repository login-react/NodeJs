const app = require("express");
const router = app.Router();
const { exec } = require("../db/mysql");
const UserService = require("../service/UserService");
router.get("/goodLists", (req, res) => {
  const { name } = req.query;
  // where nickname like '%${name}%'
  const sql = `select * from Goods`;
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
