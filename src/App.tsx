import React, { useEffect, useState } from 'react';
import { Routes, Route, useResolvedPath, Link } from 'react-router-dom';
import { Header } from './components/shared/header/Header'
import TrainerProfilePage from './Pages/TrainersProfile';
import Navigation from './components/shared/navbar/NavBar';
import HomeMeet from './components/meets/homeMeet';
import DashBoardPage from './Pages/DashBoardPage';
import { connect } from 'react-redux';
import { setUserLogin } from './store/login/actionCreator'
import styled from 'styled-components';

const LinkItem = styled(Link)`
&.get-started {
    margin-right: 5%;
    margin-bottom: 1em;
    border-radius: 50px;
    padding: 8px 25px;
    white-space: nowrap;
    transition: 0.3s;
    font-size: 14px;
    display: inline-block;
    border: 0em;
    background: ${props => props.theme.success};
    color: ${props => props.theme.textColor};

    &:hover {
        background: ${props => props.theme.successTransparent};
        color: ${props => props.theme.success};
        border: 1px solid ${props => props.theme.success};
    }
}
`

function App(props) {
  let resolver = useResolvedPath("/");
  const [hideNavBar, setHideNavBar] = useState(false);
  const hideMenu = () => {
    setHideNavBar(true);
  }
  useEffect(() => {
    const urlparams = new URLSearchParams(window.location.search);
    const roomId = urlparams.get("id");
    if (roomId) { resolver.pathname = '/Meet' }
    else { resolver.pathname = '/DashBoard' }
  }, [resolver])
  const login = () => {
    const userInfo = { userName: "Ariel", password: "Algo mas" }
    props.setUserlogin(userInfo)
  }
  return (
    <div className="App">
      {!hideNavBar && <Header className='App-header d-flex flex-row'>
        <Navigation isLogged={props.isLogged} />
        {!props.isLogged && <LinkItem className='get-started' to="/Login">Registrarse</LinkItem>}
      </Header>}
      {props.isLogged ?
        <Routes>
          <Route path="/" element={<DashBoardPage></DashBoardPage>}></Route>
          <Route path="/DashBoard" element={<DashBoardPage></DashBoardPage>}></Route>
          <Route path="/Meet" element={<HomeMeet onClick={hideMenu}></HomeMeet>}></Route>
          <Route path="/TrainersProfile" element={<TrainerProfilePage onClick={hideMenu}></TrainerProfilePage>}>
          </Route>
        </Routes> :
        <Routes>
          <Route path="/" element={<>Mentores</>}></Route>
          <Route path="/Servicios" element={<>Servicios</>}></Route>
          <Route path="/SuccessCases" element={<>Casos de Exito</>}></Route>
          <Route path="/Login" element={<><button onClick={login}>Login</button></>}></Route>
        </Routes>
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userName: state.userInfo.userName,
    token: state.userInfo.token,
    isLogged: state.userInfo.isLogged
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUserlogin: (userInfo) => dispatch(setUserLogin(userInfo)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
