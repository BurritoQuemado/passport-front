import React, { Component } from 'react';
import Scanner from "../components/scanner";

export default class Escanear extends Component {
    constructor(props){
        super(props);
        this.state = {
            user_id: this.props.user_id,
        }
    }


    render(){
        return (
            <>
                <Scanner user_id={this.state.user_id} />
            </>
        );
    }
}