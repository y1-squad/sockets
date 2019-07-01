import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {setRoomID} from '../redux/reducers/userReducer'
import axios from 'axios'

export default function Room(props) {
  const dispatch = useDispatch()
  const [roomJoin, setRoom] = useState(false)
  const user = useSelector(reduxState => reduxState.user)
  function createRoom() {
    axios.post('/room/create', {username: user.username})
    .then(res => {
      dispatch(setRoomID(res.data))
      props.history.push('/chat')
    })
  }
  function joinRoom() {
    props.history.push('/chat')
  }
  return (
      <div>
        {roomJoin ?
          <form onSubmit={e => e.preventDefault()}>
            <input type='text' onChange={e => dispatch(setRoomID(e.target.value))} />
            <button onClick={joinRoom}>Join Room</button>
          </form>
          :
          <div>
            <button onClick={createRoom}>Create</button>
            <button onClick={() => setRoom(true)}>Join</button>
          </div>
        }
      </div>
  )
}
