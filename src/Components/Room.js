import React, { Component } from 'react'

export default class Room extends Component {

    createRoom() {
        
    }

    joinRoom() {
        if (this.state.room) {
          this.socket.emit("join room", {
            room: this.state.room
          });
        }
      }
    
    render() {
        return (
            <div>
                <button onClick={this.createRoom}>Create</button>
                <button onClick={this.joinRoom}>Join</button>
            </div>
        )
    }
}
