import React from 'react';

import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import Container1 from './Components/Container1';
import Home from './Components/Home'

import './App.css';


function App() {
  return (
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
