import React from 'react';
import logo from './logo.svg';
import './custom.scss';
import Button from 'react-bootstrap/Button';
import Nav from "react-bootstrap/Nav";
import { Navbar, NavbarBrand } from 'react-bootstrap';
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
        <Button variant='primary'>
          Hola Munfo
        </Button>
      </header>
    </div>
  );
}

export default App;
