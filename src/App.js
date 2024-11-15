import React from 'react';
import { useState } from 'react';
import UsuarioEstado from './Components/security/UserState';
import Login from './Components/security/Login';
import Home from './Components/Home';
import Footer from './Components/Footer';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { ReactComponent as Logo } from "./logo.svg";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import './App.css';


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [usuarioImagen, setUsuarioImagen] = useState('');
  const [usuarioRole, setUsuarioRole] = useState('');

  const userChanged = (e) => {
    let token = localStorage.getItem("token");
    if (token != "") {
      let user = localStorage.getItem("user");
      user = JSON.parse(user);
      setLoggedIn(true);
      setUsername(user.firstName + " " + user.lastName);
      setUsuarioImagen(user.image);
      setUsuarioRole(user.role)
    }
    else {
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
    <div id="MainContainer">
      <React.Fragment>
        <>
          {[false].map((expand) => (
            <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3" bg="dark" data-bs-theme="dark" >
              <Container fluid>
                <Navbar expand="lg" className="bg-body-tertiary">
                  <Container>
                    <Navbar.Brand href="#home">
                      <Logo alt="" width="30" height="30" className="d-inline-block align-top" />
                      Administracion de Centros Deportivos
                      <h6>Slogan goes here</h6>
                    </Navbar.Brand>
                    <div className={loggedIn ? "" : "hidden"}>
                      <Navbar.Toggle aria-controls="basic-navbar-nav" />
                      <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                          <Nav.Link href="#home">Inicio</Nav.Link>
                          <NavDropdown title="Registros" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Usuarios</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Reservas</NavDropdown.Item>
                          </NavDropdown>
                          <Nav.Link href="#link">Calendarios</Nav.Link>
                          <Nav.Link href="#link">Reservas</Nav.Link>
                        </Nav>
                      </Navbar.Collapse>
                    </div>
                  </Container>
                </Navbar>

                <UsuarioEstado loggedIn={loggedIn} nombre={username} imagen={usuarioImagen} role={usuarioRole} handleLogout={userLogout} handleLogin={userLogin} />

                {/* Toggle NavBar */}
                <div className={loggedIn ? "" : "hidden"}>
                  <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}>
                    <i className="bi bi-list"></i>
                  </Navbar.Toggle>
                  <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="end">
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                        <Logo alt="" width="30" height="30" className="d-inline-block align-top" />
                        Administracion de Centros Deportivos
                      </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                      <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <NavDropdown title="Registros" id="basic-nav-dropdown">
                          <NavDropdown.Item href="#action/3.1">Usuarios</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.2">Reservas</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#link">Calendarios</Nav.Link>
                        <Nav.Link href="#link">Reservas</Nav.Link>
                      </Nav>
                    </Offcanvas.Body>
                  </Navbar.Offcanvas>
                </div>
                
              </Container>
            </Navbar>
          ))}
        </>

        <main >
          <Login handleChange={userChanged} visible={!loggedIn} />
          <div className={loggedIn ? "" : "hidden"}>
            <Home />
          </div>
        </main>
        <Footer />
      </React.Fragment>

    </div>
  );
}

export default App;
