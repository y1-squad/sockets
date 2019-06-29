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
      props.history.push('/room')
    })
  }
  function joinRoom() {
    props.history.push('/room')
  }
  return (
      <div>
        {roomJoin ?
          <form onSubmit={e => e.preventDefault()}>
            <input type='text' onChange={e => useDispatch(setRoomID(e.target.value))} />
            <button>Join Room</button>
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
