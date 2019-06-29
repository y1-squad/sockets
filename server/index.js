require('dotenv').config()
const express = require('express')
const app = express()
const {SERVER_PORT, SESSION_SECRET} = process.env
const session = require('express-session')
const s_ctrl = require('./controllers/socket_controller')
app.use(session({
    secret: SESSION_SECRET,

}))
app.use(express.json())
app.listen(SERVER_PORT, () => {
    console.log(`Server working on port ${SERVER_PORT}`)
})

app.post('/user', s_ctrl.createUser)
app.post('/create/room', s_ctrl.createRoom)