module.exports =  function (io){
  io.on('connection',(socket) => {
    socket.on("testInfo",val => {
      socket.broadcast.emit('reveives',val)
    });
  })
}