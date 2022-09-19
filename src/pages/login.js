import React, { Component } from "react";
import LoginForm from "../components/loginForm";
import LogoAbalat from "../media/logo.png";


class LoginPage extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const {setUserData , changeLogginStatus } = this.props;
        return (
            <>
                <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <img
                        className="mx-auto h-32 w-auto"
                        src={ LogoAbalat }
                        alt="Abalat"
                    />
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Ingresa a tu Pasaporte Abalat</h2>
                    </div>
    
                    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <LoginForm changeLogginStatus={changeLogginStatus} setUserData={setUserData} />
                    </div>
                    </div>
                </div>
            </>
        );
    }
}

export default LoginPage;