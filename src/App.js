import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Equipments from './pages/equipments';
import Equipment from './pages/equipment';
import PageNotFound from './pages/pageNotFound';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import Escanear from './pages/escanear';
import Layout from './components/layout';



function App () {

  const [user_id, setUserId] = useState(sessionStorage.getItem("user_id") || '');
  const [logged, setLogged] = useState(sessionStorage.getItem("user_id") || false);

  const setLoggedIn = (logged, user_id) => {
    setLogged(logged);
    setUserId(user_id);
    sessionStorage.setItem("user_id", user_id);
    sessionStorage.setItem("logged", logged);
  }

  const logout = () => {
    setLogged(false);
    setUserId('')
    sessionStorage.setItem("user_id", null);
    sessionStorage.setItem("logged", null);
  }

  useEffect(() => {
    var current_user = sessionStorage.getItem("user_id");
    var current_logged = sessionStorage.getItem("logged");
    if(current_user !== null || current_logged !== null) {
      setLoggedIn(current_logged, current_user);
    }
  }, []);

  return (
    <Layout logged_in={logged} logout={logout}>
      <Routes>
        <Route path="/" element={ <Home logged_in={logged} /> } />
        <Route path="/equipos" element={ <Equipments user_id={user_id} /> } />
        <Route path="/equipo/:eqName" element={ <Equipment /> } />
        <Route path='/login' element={ <LoginPage setLoggedIn={setLoggedIn} /> } />
        <Route path='/registro' element={ <RegisterPage /> } />
        <Route path="/escanear" element={ <Escanear user_id={user_id} /> } />
        <Route path="*" element={ <PageNotFound /> } />
      </Routes>
    </Layout>
  );
}

export default App;
