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

  if (user) {
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
      <div className="container" style={{ width: '450px', border: '1px solid #ccc', borderRadius: '5px', marginTop: '30px' }}>
        <div className={'titleContainer'} style={{ marginBottom: '30px' }}>
          <div><h2>Login</h2></div>
        </div>
        <div className={'inputContainer'}>
          <label htmlFor="uname"><b>Usuario</b></label>
          <input className={'inputBox'} value={username} type="text" placeholder="Enter your email here" name="uname" required style={{ borderRadius: '5px' }}
            onChange={(ev) => setUsername(ev.target.value)} />
        </div>

        <div className={'inputContainer'}>
          <label htmlFor="psw"><b>Password</b></label>
          <input className={'inputBox'} value={password} type="password" placeholder="Enter your password here" name="psw" required style={{ borderRadius: '5px' }}
            onChange={(ev) => setPassword(ev.target.value)} />
        </div>

        <div className={'inputContainer'}>
          <input className='loginButton' type="submit" onClick={onButtonClick} value={'Log in'} />
          <p className={loginError == "" ? "hidden" : ""}><label className="errorLabel">{loginError}</label></p>
        </div>
      </div>
    </div>
  )
}

export default Login