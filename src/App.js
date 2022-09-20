import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Equipments from './pages/equipments';
import Equipment from './pages/equipment';
import PageNotFound from './pages/pageNotFound';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import Escanear from './pages/escanear';
import Layout from './components/layout';



class App extends Component {

  constructor(){
    super();
    this.state = {
      logged: false,
      user_id: ''
    }
  }

  setLoggedIn = (logged, user_id) => {
    this.setState({
      logged: logged,
      user_id: user_id
    }, () => {
      console.log(this.state)
    })
  }

  logout = () => {
    this.setState({
      logged: false,
      user_id: ''
    })
  }

  render(){
    return (
      <Layout logged_in={this.state.logged} logout={this.logout}>
        <Routes>
          <Route path="/" element={ <Home logged_in={this.state.logged} /> } />
          <Route path="/equipos" element={ <Equipments user_id={this.state.user_id} /> } />
          <Route path="/equipo/:eqName" element={ <Equipment /> } />
          <Route path='/login' element={ <LoginPage setLoggedIn={this.setLoggedIn} /> } />
          <Route path='/registro' element={ <RegisterPage /> } />
          <Route path="/escanear" element={ <Escanear user_id={this.state.user_id} /> } />
          <Route path="*" element={ <PageNotFound /> } />
        </Routes>
      </Layout>
    );
  }
}

export default App;
