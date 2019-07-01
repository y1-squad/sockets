import React from 'react'
import io from 'socket.io-client'
import ChatRoom from './ChatRoom'

function Parent() {
    const socket = io()
    return (
        <ChatRoom socket={socket} />
    )
}

export default Parent