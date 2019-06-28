const io = require('socket.io')

module.exports = {
    createUser: (req, res) => {
        const {username} = req.body
        req.session.user = {
            username
        }
        res.status(200).send(req.session.user)
    },
    createRoom: (req, res) => {
        res.status(200).send('Hello world')
    }
}