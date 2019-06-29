import React, {useState} from "react";
import {useDispatch, useSelector} from 'react-redux'
import {setUsername} from '../redux/reducers/userReducer'

const Form = () => {
  const [username, setUser] = useState('')
  const dispatch = useDispatch()
  const user = useSelector(reduxState => reduxState.user)
  return (
    <div className="container">
      <form onSubmit={e => e.preventDefault()}>
        <label className="label">Username</label>
        <input
          className="input"
          type="username"
          name="username"
          onChange={setUser}
          value={username}
          required
        />
          <button type="submit" className="button" onClick={() => dispatch(setUsername(username))}>
            Login
          </button>
        <p>{user.username}</p>
      </form>
    </div>
  );
};

export default Form;
