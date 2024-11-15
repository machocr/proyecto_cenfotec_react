import React, { useState } from 'react'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
}
  from 'mdb-react-ui-kit';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
        if (json.id > 0) {
          setLoginError("");
          setLoginResponse(json);
          localStorage.setItem("token", json.accessToken);
          getUser(json.id)
        }
        else {
          setLoginError(json.message);
          setLoginResponse("");
          setUserResponse("");
          localStorage.setItem("token", "");
          localStorage.setItem("user", "");
          raiseUserChanged();
        }
      })

  }

  const getUser = (id) => {
    fetch('https://dummyjson.com/users/' + id)
      .then(res => res.json())
      .then(json => {
        if (json.id > 0) {
          setLoginError("");
          setUserResponse(json)
          localStorage.setItem("user", JSON.stringify(json));
          raiseUserChanged();
        }
        else {
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
    <div className={visible ? "" : "hidden"}>
      <MDBContainer fluid>
        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
          <MDBCol col='12'>
            <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
              <MDBCardBody className='p-5 w-100 d-flex flex-column'>
                <h2 className="fw-bold mb-2 text-center">Sign in</h2>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Digite su email o usuario" onChange={(ev) => setUsername(ev.target.value)} value={username} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Digite su password" onChange={(ev) => setPassword(ev.target.value)} value={password} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Recordar password" />
                  </Form.Group>
                  <div className="d-grid gap-2">
                    <Button size='lg' variant="secondary" type="submit" onClick={onButtonClick} value={'Log in'}>
                      Login
                    </Button>
                  </div>
                </Form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>

  )
}

export default Login