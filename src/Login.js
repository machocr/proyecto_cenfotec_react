import React, { useState, useContext } from 'react'
import { UserContext } from './Context/User'
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState('')
  const { user, setUser, setUserData } = useContext(UserContext);
  const navigate = useNavigate();

  const onButtonClick = () => {
    login();
  }

  if(user) {
      navigate('/')
  };

  const login = async () => {
    fetch('https://dummyjson.com/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password,
        expiresInMins: 30, // optional, defaults to 60
      }),
    })
      .then(res => res.json())
      .then(json => {
        if (json.id > 0) {
          setLoginError("");
          setUser(true);
          getUser(json.id);
        }
        else {
          setLoginError(json.message);
          setUser(false);
          setUserData(null);
        }
      })
  }

  const getUser = (id) => {
    fetch('https://dummyjson.com/users/' + id)
      .then(res => res.json())
      .then(json => {
        if (json.id > 0) {
          setLoginError("");
          setUserData(json);
        }
        else {
          setLoginError(json.message);
          setUser(false);
          setUserData(null);
        }
      })
  }

  return (
    <div className={'mainContainer'}>
      <div className={'titleContainer'}>
        <div>Login</div>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={username}
          placeholder="Enter your email here"
          onChange={(ev) => setUsername(ev.target.value)}
          className={'inputBox'}
        />
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={password}
          placeholder="Enter your password here"
          onChange={(ev) => setPassword(ev.target.value)}
          className={'inputBox'}
        />
      </div>
      <br />
      <div className={'inputContainer'}>
        <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Log in'} />
        <p className={loginError == ""? "hidden" : ""}><label className="errorLabel">{loginError}</label></p>
      </div>
    </div>
  )
}

export default Login