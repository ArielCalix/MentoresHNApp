import React from 'react';
// import logo from './logo.svg';

// import './custom.scss';
// import { NavBar as NavB } from './components/shared/navbar/NavBar'
// import { Header } from './components/shared/header/Header'
import TrainerProfilePage from './Pages/TrainersProfile';
import PureCounter from "@srexi/purecounterjs";
new PureCounter({
  duration: 2,
  delay: 1,
  once: true,
  pulse: false,
  decimals: 0,
  legacy: true,
  filesizing: false,
  currency: false,
  separator: ",",
  selector: '.purecounter'
});
// import HomeVideoMeet from './components/meets/home';


function App() {
  return (
    <div className="App">
      {/* <Header className='App-header'>

        <NavB>
          <ul>
            <li>Hola Mundo</li>
          </ul>
          <NavbarBrand>
            <img src={logo} alt='navbar' />
          </NavbarBrand>
          <Navbar>
            <Nav.Link>
              Hola Mundo en el Navbar
            </Nav.Link>
          </Navbar>
        </NavB> 
      </Header>*/}
      <TrainerProfilePage></TrainerProfilePage>
    </div>
  );
}

export default App;
