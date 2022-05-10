import React, { useEffect } from 'react';
import { Routes, Route, useResolvedPath } from 'react-router-dom';
// import logo from './logo.svg';

// import './custom.scss';
// import { NavBar as NavB } from './components/shared/navbar/NavBar'
import { Header } from './components/shared/header/Header'
import TrainerProfilePage from './Pages/TrainersProfile';
import Navigation from './components/shared/navbar/NavBar';
// import CoursesPage from './Pages/CoursesPage';
import HomeMeet from './components/meets/homeMeet';


function App() {
  let resolver = useResolvedPath("/");
  useEffect(() => {
    const urlparams = new URLSearchParams(window.location.search);
    const roomId = urlparams.get("id");
    if (roomId)
      resolver.pathname = '/Meet'
  }, [resolver])
  return (
    <div className="App">
      <Header className='App-header'>
        <Navigation />
      </Header>
      <Routes>
        <Route path="/" element={<></>}>
        </Route>
        <Route path="/Meet" element={<HomeMeet></HomeMeet>}>
        </Route>
        <Route path="TrainersProfile" element={<TrainerProfilePage></TrainerProfilePage>}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
