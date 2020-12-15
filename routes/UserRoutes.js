const app = require("express");
const router = app.Router();
const { exec } = require("../db/mysql");
const UserService = require("../service/UserService");
router.get("/list", (req, res) => {
  const { name } = req.query;
  // where nickname like '%${name}%'
  const sql = `select * from Users`;
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
    msg: "用户新增成功",
    result,
  });
});

/**
 * 获取验证码
 */
router.get("/getValidCode", (req, res) => {
  let code = UserService.getValidCode();
  res.json({
    msg: "获取验证成功",
    code,
  });
});

/**
 * 用户登录
 */
router.post("/uniLogin", async (req, res) => {
  let result = await UserService.uniUserLogin(req.body);
  res.json({
    msg: "登录成功",
    code: 1000,
    result,
  });
});

router.get("/userFindById", async (req, res) => {
  let result = await UserService.getByUserId(req.query);
  res.json({
    msg: "查询用户成功",
    result,
  });
});
module.exports = router;
