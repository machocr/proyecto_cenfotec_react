import React from "react";
import { Routes, Route } from 'react-router-dom';
import { useContext } from "react";
import { UserContext } from "./Context/User";
import AuthLayout from "./Auth/Auth";

import Login from './Login';
import Home from './Components/pages/Home';
import RegistroReserva from './Components/forms/RegistroReserva';
import Calendarios from './Components/pages/Calendarios';
import Reservas from './Components/pages/Reservas';
// import AcercaDe from './Components/pages/AcercaDe';
import Default from './Components/pages/Default';
import Layout from './Components/pages/Layout';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import './App.css';


function App() {
  const { user } = useContext(UserContext);

  return (
    <div id="MainContainer">
       <Routes>
        <Route path='/' element={<Layout />}>
          <Route element={<AuthLayout authenticated={user} />}>
            <Route path='registroreserva' element={<RegistroReserva />} />
            <Route path='calendarios' element={<Calendarios />} />
            <Route path='reservas' element={<Reservas />} />
            <Route path='/' element={<Home />} />
            <Route path='*' element={<Default />} />
          </Route>
          <Route path='login' element={<Login />} />
        </Route>
      </Routes>


    </div>
  );
}

export default App;
