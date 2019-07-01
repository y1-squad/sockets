const socket = require('socket.io')
const messages = [{message: 'hello', username: 'TestUser123'}]
const SocketConnection = (server) => {
    const io = socket(server)
    io.on('connection', (socket) => {
        console.log('A user has connected')
        socket.on('change username', (username) => {
            socket.username = username
        })
        socket.on('join room', (roomID) => {
            socket.join(roomID)
        })
        socket.on('end room', (roomID) => {
            socket.to(roomID).emit('end room')
        })
        socket.on('chat message', (data) => {
            console.log(`RoomID: ${data.roomID}`)
            console.log(`message: ${data.msg}`)
            console.log(`username: ${data.username}`)
            messages.push({message: data.msg, username: data.username})
            io.to(data.roomID).emit('chat message', messages)
        })
        // socket.on('check room', () => {
        //     socket.emit('check room', socket.rooms)
        // })
        // socket.on('room message', (roomID) => {
        //     console.log(`Room id: ${roomID}`)
        //     console.log(`socket rooms: ${JSON.stringify(socket.rooms)}`)
        //     console.log(`socket room: ${socket.rooms.roomID}`)
        //     socket.to(socket.rooms.roomID).emit('room message', 'Hello World')
        // })
        socket.on('disconnect', () => {
            console.log('A user has disconnected')
        })
    })
}
module.exports = SocketConnection