import React, {useState} from "react";
import {useDispatch} from 'react-redux'
import {setUsername} from '../redux/reducers/userReducer'

const Form = (props) => {
  const [username, setUser] = useState('')
  const dispatch = useDispatch()
  function login() {
    dispatch(setUsername(username))
    props.history.push('/room')
  }
  return (
    <div className="container">
      <form onSubmit={e => e.preventDefault()}>
        <label className="label">Username</label>
        <input
          className="input"
          type="username"
          name="username"
          onChange={e => setUser(e.target.value)}
          value={username}
          required
        />
          <button type="submit" className="button" onClick={login}>
            Login
          </button>
      </form>
    </div>
  );
};

export default Form;
