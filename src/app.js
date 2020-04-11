const express = require('express');
const app = express();
const http = require ('http'). createServer(app)


app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use(require('./controllers/authController'))


const socketio = require('socket.io')(http)

socketio.on("connection", (userSocket) => {
    userSocket.on("send_message", (data) => {
        userSocket.broadcast.emit("receive_message", data)
    })
})


module.exports = http;