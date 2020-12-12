const app = require("express");
const router = app.Router();
const { exec } = require("../db/mysql");
const GoodsService = require("../service/GoodsService");
router.get("/goodLists", (req, res) => {
  let sql = "";
  const { love } = req.query;
  // where nickname like '%${name}%'
  if (!love) {
    sql = `select * from uniGoods`;
  } else {
    sql = `select * from uniGoods where love=${love}`;
  }
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

router.put("/updateGoods", async (req, res) => {
  let result = await GoodsService.updateGoods(req.body);
  res.json({
    msg: "sdfsadf",
    result,
  });
});

router.post("/seachGoods", async (req, res) => {
  let result = await GoodsService.findById(req.body);
  res.json({
    msg: "查询成功",
    result,
  });
});

module.exports = router;
