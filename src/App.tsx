import React, { useEffect, useState } from 'react';
import { Routes, Route, useResolvedPath } from 'react-router-dom';
import { Header } from './components/shared/header/Header'
import TrainerProfilePage from './Pages/TrainersProfile';
import Navigation from './components/shared/navbar/NavBar';
import HomeMeet from './components/meets/homeMeet';


function App() {
  let resolver = useResolvedPath("/");
  const [hideNavBar, setHideNavBar] = useState(false);
  const onStartMeet = () => {
    setHideNavBar(true);
  }
  useEffect(() => {
    const urlparams = new URLSearchParams(window.location.search);
    const roomId = urlparams.get("id");
    if (roomId)
      resolver.pathname = '/Meet'
  }, [resolver])
  return (
    <div className="App">
      {!hideNavBar && <Header className='App-header'>
        <Navigation />
      </Header>}
      <Routes>
        <Route path="/" element={<></>}>
        </Route>
        <Route path="/Meet" element={<HomeMeet onClick={onStartMeet}></HomeMeet>}>
        </Route>
        <Route path="TrainersProfile" element={<TrainerProfilePage></TrainerProfilePage>}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
