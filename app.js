const express = require("express");
const app = express();
const colors = require("colors-console");

let port = 9999;
const userRoute = require("./routes/UserRoutes");
const loginRoute = require("./routes/LoginRoutes");
const fileReadRoute = require("./routes/FileRoutes");
app.use("/user", userRoute);
app.use("/login", loginRoute);
app.use("/file", fileReadRoute);
app.listen(port, () =>
  console.log("⛑⛑⛑⛑", colors("red", `express port ${port}已经开启成功...`))
);
