import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import SportCenterLogo from '../sportcenterlogo.png';
import UsuarioEstado from '../Components/security/UserState';
import Login from '../Components/security/Login';
import Home from '../Components/pages/Home';

function Menu() {

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
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <div className="row">
                            <div className="col-md-4">
                                <img src={SportCenterLogo} className="img-fluid rounded-circle" width="70" height="70" />
                            </div>
                            <div className="col-md-8">
                                Administración de Centros Deportivos
                                <h6 className='fw-bold fst-italic' >Administración deportiva en manos expertas</h6>
                            </div>
                        </div>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* <div className={loggedIn ? "" : "hidden"} style={{ marginLeft: "100px" }}> */}

                        <div className="collapse navbar-collapse" id="navbarNavDropdown" style={{ marginLeft: "100px" }}>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to='/'>Inicio</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Registros
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li>
                                            <Link className="dropdown-item" to='registroUsuario'>Usuarios</Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to='registroreserva'>Reservas</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='calendarios'>Calendarios</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='reservas'>Ver Reservas</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='acercade'>Acerca de...</Link>
                                </li>

                            </ul>
                        </div>

                    {/* </div> */}
                </div>
            </nav>


            <UsuarioEstado loggedIn={loggedIn} nombre={username} imagen={usuarioImagen} role={usuarioRole} handleLogout={userLogout} handleLogin={userLogin} />

            {/* <Login handleChange={userChanged} visible={!loggedIn} />
            <div className={loggedIn ? "" : "hidden"}>
                <Home />
            </div> */}
        </div>


    )
}

export default Menu;