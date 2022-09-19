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
      logged_in: false,
      current_user: {
        id: '',
        visited_equipment: []
      }
    }
  }

  changeLogginStatus = (data) => {
    this.setState({ logged_in: data });
    console.log(this.state)
  }

  setUserData = (data) => {
    data.id? 
    this.setState({
      current_user: {
        id: data.id,
      }
    }) 
    : this.setState({
      current_user: {
        visited_equipment: data.visited_equipment
      }
    })
  }

  componentDidMount(){
    console.log(this.state)
  }

  render(){
    return (
      <Layout logged_in={this.state.logged_in}>
        <Routes>
          <Route path="/" element={ <Home logged_in={ this.state.logged_in } /> } />
          <Route path="/equipos" element={ <Equipments user_info={this.state.current_user} /> } />
          <Route path="/equipo/:eqName" element={ <Equipment /> } />
          <Route path='/login' element={ <LoginPage changeLogginStatus={this.changeLogginStatus} setUserData={this.setUserData} /> } />
          <Route path='/registro' element={ <RegisterPage /> } />
          <Route path="/escanear" element={ <Escanear /> } />
          <Route path="*" element={ <PageNotFound /> } />
        </Routes>
      </Layout>
    );
  }
}

export default App;
