import React, { useState } from 'react'

const Login = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState('')
  const [loginResponse, setLoginResponse] = useState('')
  const [userResponse, setUserResponse] = useState('')

  const { visible } = props;

  const onButtonClick = () => {
    login();
  }

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
        if(json.id > 0){
            setLoginError("");
            setLoginResponse(json);
            localStorage.setItem("token", json.accessToken);
            getUser(json.id)
        }
        else{
            setLoginError(json.message);
            setLoginResponse("");
            setUserResponse("");
            localStorage.setItem("token", "");
            localStorage.setItem("user", "");
            raiseUserChanged();
        }
      })
      .catch(console.log('Error de Login'))
    }

  const getUser = (id) => {
    fetch('https://dummyjson.com/users/' + id)
      .then(res => res.json())
      .then(json => {
        if(json.id > 0){
            setLoginError("");
            setUserResponse(json)
            localStorage.setItem("user", JSON.stringify(json));
            raiseUserChanged();
        }
        else{
            setLoginError(json.message);
            setLoginResponse("");
            setUserResponse("");
            localStorage.setItem("token", "");
            localStorage.setItem("user", "");
        }
      })
  }

  const raiseUserChanged = () => {
    props.handleChange();
  }

  return (
    <div className={visible? "": "hidden"}> 
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
    </div>
  )
}

export default Login