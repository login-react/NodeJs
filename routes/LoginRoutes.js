/**
 * 存储在浏览器字符串 最大5kb
 * 跨域不共享
 * 每次发送http请求,会将请求域的cookie一起发送给server
 * server可以修改cookie并返回浏览器
 */

const app = require("express");
const router = app.Router();
const loginValid = require("../service/LoginService");
const { setCurrentTime } = require("../utils/setCurrentTime");
router.get("/login-valid", async (req, res) => {
  const { username, password } = req.query;
  // 设置cookie的key 及 value,并设置httpOnly
  res.cookie("username", username, {
    // 只允许后端修改
    httpOnly: true,
    // 设置 expires 必须设置maxAge
    expires: setCurrentTime(),
    maxAge: new Date(setCurrentTime()).getTime(),
  });
  let loginResult = await loginValid.login(username, password);
  res.json({
    msg: "查询成功",
    result: loginResult,
  });
});
/**
 * 上面设置了cookie,每一次请求都将带着cookie
 */
router.get("/login-test", async (req, res) => {
  res.json({
    msg: "查询成功",
    result: req.cookie,
  });
});

module.exports = router;
