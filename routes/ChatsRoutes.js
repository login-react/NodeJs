const app = require("express");
const router = app.Router();
const chatsService = require("../service/ChatsService");

router.post("/createChats", async (req, res) => {
  await chatsService.crateChats(req.body);
  res.json({
    msg: "插入聊天",
  });
});

router.get("/chatRecord", async (req, res) => {
  let result = await chatsService.findChats();
  console.log("result :>> ", result);
  res.json({
    msg: "查询成功",
    result,
  });
});

module.exports = router;
