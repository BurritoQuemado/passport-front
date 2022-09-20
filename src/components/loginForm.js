import React, { Component } from "react";
import { Link } from "react-router-dom";


class LoginForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }
  

  handleSubmit = () => {
    fetch('http://localhost:3000/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
    .then(response => response.json())
    .then(data => {
      this.props.setLoggedIn(true, data.id);
      this.props.signin();
    })
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }
  
  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }


  render() {
    return(
      <>
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Correo Electronico
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                onChange={this.onEmailChange.bind(this)}
                required
                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-black shadow-sm focus:border-azul_abalat focus:outline-none focus:ring-azul_abalat sm:text-sm"
              />
            </div>
          </div>
    
          <div className="space-y-1">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Contraseña
            </label>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                onChange={this.onPasswordChange.bind(this)}
                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-black shadow-sm focus:border-azul_abalat focus:outline-none focus:ring-azul_abalat sm:text-sm"
              />
            </div>
          </div>
    
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <button className="font-medium text-azul_abalat hover:text-azul_abalat">
                Recuperar contraseña
              </button>
            </div>
          </div>
        </form>
        <div className="mt-4">
          <button
            onClick={this.handleSubmit.bind(this)}
            className="flex w-full justify-center rounded-md border border-transparent bg-morado_abalat py-2 px-4 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-azul_abalat focus:ring-offset-2"
          >
            Ingresar
          </button>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="text-sm">
            <Link to='/registro' className="font-medium text-azul_abalat hover:text-azul_abalat">
              No tengo una cuenta
            </Link>
          </div>
        </div>
      </>
      );
  };  
}

export default LoginForm;