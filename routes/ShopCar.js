const app = require("express");
const router = app.Router();
const { exec } = require("../db/mysql");
const ShopCarService = require("../service/ShopCar");

router.post("/createCar", async (req, res) => {
  let result = await ShopCarService.createCar(req.body);
  res.json({
    msg: "加入购物车成功",
    result,
  });
});

router.post("/findAllShopCar", async (req, res) => {
  let result = await ShopCarService.findAll();
  console.log("result :>> ", result);
  res.json({
    msg: "查询成功",
    result,
  });
});

module.exports = router;
