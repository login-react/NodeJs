const app = require("express");
const router = app.Router();
const { exec } = require("../db/mysql");
const ShopCarService = require("../service/ShopCar");
/**
 * 加入购物车
 */
router.post("/createCar", async (req, res) => {
  let result = await ShopCarService.createCar(req.body);
  res.json({
    msg: "加入购物车成功",
    result,
  });
});
/**
 * 购物车查询功能
 */
router.get("/findAllShopCar", async (req, res) => {
  const { id } = req.query;
  let result = await ShopCarService.findAllShopCar(id);
  console.log("result :>>dddddddddddddddddd ", result);
  res.json({
    msg: "查询购物车成功",
    result,
  });
});

module.exports = router;
