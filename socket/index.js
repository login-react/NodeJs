module.exports = function (io) {
  io.on("connection", (socket) => {
    console.log("🙎‍♀️ socket.io start success");
    socket.on("chatsEmit", (val) => {
      // 如果 server端 接收到 则insert
      socket.broadcast.emit("reveives", val);
    });
  });
};
