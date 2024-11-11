
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Search from './Search';
import { ReactComponent as Logo } from "../logo.svg";


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function NavBar() {
  return (
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
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">

                    <Nav.Link href="#home">Inicio</Nav.Link>
                    <NavDropdown title="Registros" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">Usuarios</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Reservas</NavDropdown.Item>
                      {/* <NavDropdown.Divider /> */}
                    </NavDropdown>
                    <Nav.Link href="#link">Calendarios</Nav.Link>
                    <Nav.Link href="#link">Reservas</Nav.Link>

                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>

            <Search/>

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
                      {/* <NavDropdown.Divider /> */}
                    </NavDropdown>
                    <Nav.Link href="#link">Calendarios</Nav.Link>
                    <Nav.Link href="#link">Reservas</Nav.Link>


                </Nav>
               <Search/>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavBar;