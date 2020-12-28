module.exports = function (io) {
  io.on("connection", (socket) => {
    socket.on("testInfo", (val) => {
      // 如果 server端 接收到 则insert
      socket.broadcast.emit("reveives", val);
    });
  });
};
