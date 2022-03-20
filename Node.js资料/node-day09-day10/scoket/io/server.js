/**
 * Socket 为客户端和服务器提供了双向通信机制
 * npm install socket.io -S
 */
var express = require('express')
var app = express()
var http = require('http').createServer(app);
var io = require('socket.io')(http)

app.use(express.static('./public'))

io.on('connection', (socket) => {
    // console.log('a user connected')
    // 双向通信机制方法
    socket.on('receive', (data) => {
        socket.broadcast.emit('message', data)
    })
})

http.listen(3000, 'localhost', () => {
    console.log('listening on *:3000');
})