const express = require("express");
const app = express();
const userRoute = require("./routes/UserRoutes");

app.use("/user", userRoute);
app.listen(9999, () => console.log("connect success"));
