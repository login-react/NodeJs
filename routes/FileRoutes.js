const app = require("express");
const router = app.Router();
const fs = require("fs");
const path = require("path");
router.get("/read", (req, res) => {
  const fileName = path.resolve(__dirname, "../Record/data.txt");
  fs.appendFileSync(fileName, "你好啊");
  let data = fs.readFileSync(fileName);
  res.json({
    path: fileName,
    result: data.toString(),
  });
});
module.exports = router;
