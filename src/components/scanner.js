import React, { Component } from 'react';
import QrReader from 'react-qr-scanner';
import ImgSello from '../media/sello.png'

class Scanner extends Component {
    constructor(props){
      super(props);
      this.state = {
        delay: 1000,
        result: "no data",
        scanning: true,
        valid_qr: false,
        visited_equipment: "",
        valid_scans: [],
        user_id: this.props.user_id
      }
    }

    componentDidMount(){
      fetch('http://localhost:3000/equipments')
      .then(response => response.json())
      .then(equipment => {
        this.setState({valid_scans: equipment})
      });
    }

    setEquipmentName = (name, send) => {
      this.setState({visited_equipment: name}, () => {
        this.sendData(send);
      });
    }

    setValidQR = (found) => {
      this.setState({valid_qr: found})
    } 

    validateQR = (text) => {
      this.state.valid_scans.forEach(valid => {
        if(valid.code === text){
          this.setValidQR(true);
          this.setEquipmentName(valid.name, true);
        }
      });
    } 
    
    sendData = (send) => {
      if(send) {
        fetch('http://localhost:3000/attend', {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            user_id: this.state.user_id,
            equipment_name: this.state.visited_equipment
          })
        })
        .then(response => response.json())
        .then(this.props.backToEquipmentList())
      }
    }

    handleScan = (data) => {
      if(data != null){
        this.setState({
          scanning: false,
          result: data.text,
        });
        this.validateQR(data.text);
      }
    };

    handleError = (err) => {
      alert('Algo ha salido mal.')
    }

    cleanScan = () => {
      this.setState({
        result: "no data",
        valid_qr: false,
        scanning: true,
        visited_equipment: "",
      });
    }

    render () {
      return (
          <div className=''>
          <div className="text-center px-4 pt-16 pb-10 sm:px-2 lg:px-8 lg:pt-24 lg:pb-10">
            <h2 className="text-3xl font-bold tracking-tight text-morado_abalat sm:text-4xl uppercase">Escanea el código QR</h2>
          </div>
          <div className='pt-6 pb-6 pr-4 pl-4 bg-gray-200'>
            { this.state.scanning?
            <QrReader
            delay={this.state.delay}
            onError={this.handleError}
            onScan={this.handleScan}
          /> : 
          <div className='justify-center mt-6'>
            <h1 className='text-center'>QR Escaneado</h1>
          </div>
          }  
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
                        Escanear otro QR
                    </button>
                </div>
              </div>
            : <div className='justify-center mt-6'>
                <div className="px-4 py-3 text-center sm:px-6">
                    <button
                        onClick={this.props.backToEquipmentList}
                        className="inline-flex justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm lg:text-2xl lg:font-semibold font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-azul_abalat focus:ring-offset-2"
                    >
                        Regresar
                    </button>
                </div>
              </div>
          }
        </div>
      );
    }
}

export default Scanner;