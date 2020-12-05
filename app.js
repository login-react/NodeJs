const express = require("express");
const app = express();
const userRoute = require("./routes/UserRoutes");
const loginRoute = require("./routes/LoginRoutes");
const fileReadRoute = require("./routes/FileRoutes");
app.use("/user", userRoute);
app.use("/login", loginRoute);
app.use("/file", fileReadRoute);
app.listen(9999, () => console.log("connect success"));
