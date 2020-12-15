const app = require("express");
const router = app.Router();
const { exec } = require("../db/mysql");
const VersionService = require("../service/VersionService");

router.get("/createCar", async (req, res) => {
  let result = await VersionService.findAppVersion(req.query);
  res.json({
    msg: "查询版本",
    result,
  });
});
router.put("/putAppVersion", async (req, res) => {
  let result = await VersionService.UpdateAppVersion(req.body);
  res.json({
    msg: "查询版本",
    result,
    pkgUrl: "../static/__UNI__EBA4ADD.wgt",
  });
});

module.exports = router;
