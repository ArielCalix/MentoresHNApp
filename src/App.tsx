import React, { useEffect, useState } from 'react';
import { Routes, Route, useResolvedPath } from 'react-router-dom';
import { Header } from './components/shared/header/Header'
import TrainerProfilePage from './Pages/TrainersProfile';
import Navigation from './components/shared/navbar/NavBar';
import HomeMeet from './components/meets/homeMeet';
import DashBoardPage from './Pages/DashBoardPage';


function App() {
  let resolver = useResolvedPath("/");
  const [hideNavBar, setHideNavBar] = useState(false);
  const hideMenu = () => {
    setHideNavBar(true);
  }
  useEffect(() => {
    const urlparams = new URLSearchParams(window.location.search);
    const roomId = urlparams.get("id");
    console.log(roomId)
    if (roomId) { resolver.pathname = '/Meet' }
    else { resolver.pathname = '/DashBoard' }
  }, [resolver])
  return (
    <div className="App">
      {!hideNavBar && <Header className='App-header'>
        <Navigation />
      </Header>}
      <Routes>
        <Route path="/" element={<DashBoardPage></DashBoardPage>}></Route>
        <Route path="/DashBoard" element={<DashBoardPage></DashBoardPage>}></Route>
        <Route path="/Meet" element={<HomeMeet onClick={hideMenu}></HomeMeet>}></Route>
        <Route path="/TrainersProfile" element={<TrainerProfilePage onClick={hideMenu}></TrainerProfilePage>}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
