import React, { Component } from "react";
import { Link } from "react-router-dom";

class RegisterForm extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            lname: '',
            email: '',
            institute: '',
            password: '',
            confirm_password: '',
            match: false
        }
    }

    onEmailChange = (event) =>{
        this.setState({email: event.target.value});
    }

    onNameChange = (event) =>{
        this.setState({name: event.target.value});
    }

    onLnameChange = (event) =>{
        this.setState({lname: event.target.value});
    }

    onInstituteChange = (event) =>{
        this.setState({institute: event.target.value});
    }

    onPasswordChange = (event) =>{
        this.setState({password: event.target.value});
    }

    onConfirmPasswordChange = (event) =>{
        this.setState({confirm_password: event.target.value});
    }

    checkPasswords = () => {
        if (this.state.password === this.state.confirm_password) {
            this.setState({match: true})
        }
    }

    handleSubmit = () => {
        this.checkPasswords();
        if(this.state.match){
            fetch('http://localhost:3000/register', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name: this.state.name + " " + this.state.lname,
                    email: this.state.email,
                    institute: this.state.institute,
                    password: this.state.password
                })
            })
            .then(response => response.json())
            .then(this.props.login())
        } 
    }

    render() {
        return(
            <>
                <div className="overflow-hidden shadow sm:rounded-md">
                    <form action="#" method="POST">
                        <div className="bg-white px-4 py-5 sm:p-6">
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                    Nombre(s)
                                </label>
                                <input
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    autoComplete="given-name"
                                    onChange={this.onNameChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-azul_abalat focus:ring-azul_abalat sm:text-sm"
                                />
                                </div>
            
                                <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                    Apellidos
                                </label>
                                <input
                                    type="text"
                                    name="last-name"
                                    id="last-name"
                                    onChange={this.onLnameChange}
                                    autoComplete="family-name"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-azul_abalat focus:ring-azul_abalat sm:text-sm"
                                />
                                </div>
            
                                <div className="col-span-6 sm:col-span-4">
                                <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                    Correo Electronico
                                </label>
                                <input
                                    type="text"
                                    name="email-address"
                                    id="email-address"
                                    autoComplete="email"
                                    onChange={this.onEmailChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-azul_abalat focus:ring-azul_abalat sm:text-sm"
                                />
                                </div>
            
                                <div className="col-span-6">
                                <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                                    Institución
                                </label>
                                <input
                                    type="text"
                                    name="institute"
                                    id="institute"
                                    onChange={this.onInstituteChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-azul_abalat focus:ring-azul_abalat sm:text-sm"
                                />
                                </div>
                                <div className="col-span-6">
                                <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                                    Contraseña
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    onChange={this.onPasswordChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-azul_abalat focus:ring-azul_abalat sm:text-sm"
                                />
                                </div>
                                <div className="col-span-6">
                                <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                                    Confirmar Contraseña
                                </label>
                                <input
                                    type="password"
                                    name="confirm_password"
                                    id="confirm_pasword"
                                    onChange={this.onConfirmPasswordChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-azul_abalat focus:ring-azul_abalat sm:text-sm"
                                />
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="bg-gray-50 px-4 py-3 text-center sm:px-6">
                        <button
                            onClick={this.handleSubmit.bind(this)}
                            className="inline-flex justify-center rounded-md border border-transparent bg-azul_abalat py-2 px-4 text-sm lg:text-2xl lg:font-semibold font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-azul_abalat focus:ring-offset-2"
                            >
                            Registrarse
                        </button>
                    </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <div className="text-sm">
                        <Link to='/login' className="font-medium text-azul_abalat hover:text-azul_abalat">
                            Ya tengo una cuenta
                        </Link>
                    </div>
                </div>
            </>
        );
    }
}

export default RegisterForm;