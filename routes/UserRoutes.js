const app = require("express");
const router = app.Router();
const { exec } = require("../db/mysql");
const UserService = require("../service/UserService");
router.get("/list", (req, res) => {
  const { name } = req.query;
  // where nickname like '%${name}%'
  const sql = `select * from Goods `;
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
/**
 * 新增用户
 */
router.post("/addUser", async (req, res) => {
  console.log("req.body :>> ", req.body);
  let result = await UserService.AddUser(req.body);
  res.json({
    msg: "sdfsadf",
    result,
  });
});
module.exports = router;
