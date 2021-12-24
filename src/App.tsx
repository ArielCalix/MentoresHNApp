import React from 'react';
import logo from './logo.svg';
import './custom.scss';
import Nav from "react-bootstrap/Nav";
import { Navbar, NavbarBrand } from 'react-bootstrap';
import HomeVideoMeet from './components/meets/home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav color='dark'>
          <NavbarBrand>
            <img src={logo} alt='navbar' />
          </NavbarBrand>
          <Navbar>
            <Nav.Link>
              Hola Mundo en el Navbar
            </Nav.Link>
          </Navbar>
        </Nav>
        <HomeVideoMeet />
      </header>
    </div>
  );
}

export default App;
