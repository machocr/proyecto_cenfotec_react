import { useEffect, useState } from 'react';
import UsuarioEstado from './componentes/seguridad/UsuarioEstado' 
import Login from './componentes/seguridad/Login' 
import React from 'react';

import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import Container1 from './Components/Container1';
import Home from './Components/Home'

import './App.css';


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [usuarioImagen, setUsuarioImagen] = useState('');
  const [usuarioRole, setUsuarioRole] = useState('');

  const userChanged = (e) => {
    let token = localStorage.getItem("token");
    if(token != ""){
      let user  = localStorage.getItem("user");
      user = JSON.parse(user);
      setLoggedIn(true);
      setUsername(user.firstName + " " + user.lastName);
      setUsuarioImagen(user.image);
      setUsuarioRole(user.role)
    }
    else{
      setLoggedIn(false);
      setUsername("");
      setUsuarioImagen("");
    }  
  };

  const userLogout = (e) => {
    setLoggedIn(false);
    localStorage.setItem("token", "");
    localStorage.setItem("user", "");
    userChanged();
  };

  const userLogin = (e) => {
    setLoggedIn(true);
    localStorage.setItem("token", "");
    localStorage.setItem("user", "");
  };

  return (
    <div className="App">
      <div className='content'>
        <div className='header'>
          <div className='header-left'></div>
          <div className='header-center'></div>
          <div className='header-right'>
            <UsuarioEstado loggedIn={loggedIn} nombre={username} imagen={usuarioImagen} role={usuarioRole} handleLogout={userLogout} handleLogin={userLogin}/>
          </div>
        </div>
        <div className='header-clear'></div>
        <div className='body'>
          <Login handleChange={userChanged} visible={!loggedIn} />
        </div>
        <div className='footer'>

        </div>
      </div>
    </div>
    <React.Fragment>
      <NavBar />
      <main >
        {/* <Container1/> */}
        <Home />
      </main>
      <hr></hr>
      <Footer />
    </React.Fragment>
  );
}

export default App;
