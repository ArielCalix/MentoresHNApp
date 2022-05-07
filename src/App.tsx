import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import logo from './logo.svg';

// import './custom.scss';
// import { NavBar as NavB } from './components/shared/navbar/NavBar'
import { Header } from './components/shared/header/Header'
import TrainerProfilePage from './Pages/TrainersProfile';
import Navigation from './components/shared/navbar/NavBar';
// import CoursesPage from './Pages/CoursesPage';
import HomeMeet from './components/meets/homeMeet';


function App() {
  return (
    <div className="App">
      <Header className='App-header'>
        <Navigation />
        {/*
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
      */}
      </Header>
      <Routes>
        <Route path="/" element={<HomeMeet></HomeMeet>}>
        </Route>
        <Route path="TrainersProfile" element={<TrainerProfilePage></TrainerProfilePage>}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
