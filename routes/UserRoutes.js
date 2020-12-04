const app = require("express");
const router = app.Router();

router.get("/list", (req, res) => {
  res.json({
    msg: "成功了",
    code: 200,
  });
});
module.exports = router;
