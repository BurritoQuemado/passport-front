import React, { Component } from "react";


class RegisterForm extends Component {

    render() {
        return(
            <form action="#" method="POST">
                <div className="overflow-hidden shadow sm:rounded-md">
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
                            autoComplete="institute"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-azul_abalat focus:ring-azul_abalat sm:text-sm"
                        />
                        </div>
                    </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 text-center sm:px-6">
                        <button
                            type="submit"
                            className="inline-flex justify-center rounded-md border border-transparent bg-azul_abalat py-2 px-4 text-sm lg:text-2xl lg:font-semibold font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-azul_abalat focus:ring-offset-2"
                        >
                            Registrarse
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}

export default RegisterForm;