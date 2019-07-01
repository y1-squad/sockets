import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'

function ChatRoom(props) {
    const user = useSelector(reduxState => reduxState.user)
    const [messagesDisplay, setMessages] = useState([])
    const [chatMessage, setChat] = useState('')
    useEffect(() => {
        props.socket.emit('change username', user.username)
        props.socket.emit('join room', user.roomID)
        props.socket.on('chat message', (messages) => {
            setMessages(messages)
        })
    }, [])
    function sendMessage() {
        let data = {
            username: user.username,
            roomID: user.roomID,
            msg: chatMessage
        }
        props.socket.emit('chat message', data)
        setChat('')
    }
    const messageDisplay = messagesDisplay.map((ele, i) => {
        return <li key={i}>{ele.username}: {ele.message}</li>
    })
    return (
        <div>
            <ul>
                {messageDisplay}
            </ul>
            <form onSubmit={e => e.preventDefault()}>
                <input type='text' value={chatMessage} onChange={e => setChat(e.target.value)} />
                <button onClick={sendMessage}>Send Message</button>
            </form>
        </div>
    )
}

export default ChatRoom