import React, { Component } from "react";
import { Link } from "react-router-dom"
import HomeImg from '../media/home.png'

class MainContent extends Component {

    constructor(props){
      super(props);
    }

    render() {
      const logged = this.props.logged_in;
      return (
          <>
          <main className="lg:relative">
            <div className="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-48 lg:text-left">
              <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                  <span className="block xl:inline">Pasaporte Abalat</span>{' '}
                  <span className="block text-azul_abalat xl:inline">AMMTAC 2022</span>
                </h1>
                <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                  { logged ? <div className="rounded-md shadow">
                    <Link
                      to="/equipos"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-azul_abalat px-8 py-3 text-base font-medium text-white md:py-4 md:px-10 md:text-lg"
                    >
                      Ver Equipos
                    </Link>
                  </div>
                  : <>
                  <div className="rounded-md shadow">
                    <Link
                      to="/registro"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-azul_abalat px-8 py-3 text-base font-medium text-white md:py-4 md:px-10 md:text-lg"
                    >
                      Registrarse
                    </Link>
                  </div>
                  <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                    <Link
                      to="/login"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-azul_abalat hover:bg-gray-50 md:py-4 md:px-10 md:text-lg"
                    >
                      Ingresar
                    </Link>
                  </div>
                  </>
                  }
                </div>
              </div>
            </div>
            <div className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src={ HomeImg }
                alt="home_img"
              />
            </div>
          </main>
          </>
      )
    }
}

export default MainContent;