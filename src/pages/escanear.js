import React, { Component } from 'react';
import Scanner from "../components/scanner";

export default class Escanear extends Component {
    constructor(){
        super();
        this.state = {
            user_id: '7'
        }
    }

    componentDidMount(){
        fetch('http://localhost:3000/equipments')
        .then(resp => resp.json())
        .then(equips => {
            this.setState({equipment_list: equips})
        })
    }

    render(){
        return (
            <>
                <Scanner user_id={this.state.user_id}/>
            </>
        );
    }
}