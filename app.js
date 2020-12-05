const express = require("express");
const app = express();
const userRoute = require("./routes/UserRoutes");
const loginRoute = require("./routes/LoginRoutes");
app.use("/user", userRoute);
app.use("/login", loginRoute);
app.listen(9999, () => console.log("connect success"));
