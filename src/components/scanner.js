import React, { Component } from 'react';
import QrReader from 'react-qr-scanner';
import ImgSello from '../media/sello.png'
const valid_scans = [
  {
    id: 'ARGN-080',
    name: 'Alinity'
  },
  {
    id: '1235',
    name: 'InGenius'
  },
  {
    id: '1236',
    name: 'Luminex'
  },
  {
    id: '1237',
    name: 'MiSeq'
  },
  {
    id: '1238',
    name: 'Pentra 80 XL'
  },
  {
    id: '1239',
    name: 'Reveos'
  },
  {
    id: '1232',
    name: 'TrimaAccel'
  }
];


export class Scanner extends Component {
    state = {
      delay: 100,
      result: "no data",
      valid_qr: false,
      visited_equipment: ""
    };

    validateQR = (text) => {
        let found = false;
        valid_scans.forEach(valid => {
          if(valid.id === text){
            found = true;
            this.setState({
              visited_equipment: valid.name
            });
            //send data too
          }
        });
        return found;
    } 

    handleScan = (data) => {
      if(data != null){
        this.setState({
          result: data.text,
          valid_qr: this.validateQR(data.text)
        });
      }
      console.log(this.state.valid_qr);
    };

    handleError = (err) => {
      console.error(err);
    }

    cleanScan = () => {
      this.setState({
        result: "no data",
        valid_qr: false
      });
    }

    render () {
      return (
          <div className=''>
          <div className="text-center px-4 pt-16 pb-10 sm:px-2 lg:px-8 lg:pt-24 lg:pb-10">
            <h2 className="text-3xl font-bold tracking-tight text-morado_abalat sm:text-4xl uppercase">Escanea el código QR</h2>
          </div>
          <div className='pt-6 pb-6 pr-4 pl-4 bg-gray-200'>
            <QrReader
              delay={this.state.delay}
              onError={this.handleError}
              onScan={this.handleScan}
            />
          </div>
          {
            this.state.valid_qr ? 
            <div className='justify-center mt-6'>
              <h1 className='text-center'>Bien hecho has conseguido el sello de {this.state.visited_equipment}</h1>
              <img
                  className="mx-auto h-32 w-auto"
                  src={ ImgSello }
                  alt="Abalat"
              />
             <div className="px-4 py-3 text-center sm:px-6">
                  <button
                      onClick={this.cleanScan}
                      className="inline-flex justify-center rounded-md border border-transparent bg-azul_abalat py-2 px-4 text-sm lg:text-2xl lg:font-semibold font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-azul_abalat focus:ring-offset-2"
                  >
                      Volver a escanear
                  </button>
              </div>
            </div>
            : null
          }
        </div>
      );
    }
}