const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
console.log("---");
require("./socket")(io);
// io.on("connection",function(socket){
//   // console.log('========info',socket)
//   socket.on("testInfo", val => {
//     console.log('val :>> ', val);
//   });
// });

const colors = require("colors-console");
const bodyParse = require("body-parser");
app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    " Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", " 3.2.1");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
let port = 9999;
const userRoute = require("./routes/UserRoutes");
const loginRoute = require("./routes/LoginRoutes");
const goodsRoute = require("./routes/GoodsRoutes");
const shopCarRoute = require("./routes/ShopCar");
const versionRoute = require("./routes/VersionRoute");
const fileReadRoute = require("./routes/FileRoutes");
const chatsRoute = require("./routes/ChatsRoutes");
app.use(bodyParse.urlencoded({ extended: true }));
app.use(bodyParse.json());
app.use("/user", userRoute);
app.use("/login", loginRoute);
app.use("/file", fileReadRoute);
app.use("/goods", goodsRoute);
app.use("/shopCar", shopCarRoute);
app.use("/version", versionRoute);
app.use("/chat", chatsRoute);
http.listen(port, () =>
  console.log("⛑⛑⛑⛑", colors("red", `express port ${port}已经开启成功...`))
);
