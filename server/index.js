require('dotenv').config()
const express = require('express')
const app = express()
const {SERVER_PORT, SESSION_SECRET} = process.env
const session = require('express-session')
const r_ctrl = require('./controllers/room_controller')
const SocketConnection = require('./controllers/socket_controller')
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    maxAge: 1000 * 60 * 60
}))
app.use(express.json())
const server = app.listen(SERVER_PORT, () => {
    console.log(`Server working on port ${SERVER_PORT}`)
})

SocketConnection(server)

app.post('/user', r_ctrl.createUser)
app.post('/room/create', r_ctrl.createRoom)
app.post('/room/join', r_ctrl.joinRoom)