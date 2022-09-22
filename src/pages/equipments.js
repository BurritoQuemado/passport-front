import React, { Component } from "react";
import EquipmentList from "../components/equipmentList";

export default class Equipments extends Component {

    constructor(props){
        super(props);
        this.state = {
            user_id: Number(this.props.user_id),
            user_attendee: []
        }
    }

    componentDidMount(){
        fetch(`https://pure-atoll-64455.herokuapp.com/attendance_list/${encodeURIComponent(this.state.user_id)}`)
        .then(response => response.json())
        .then(equipment => {
            this.setState({user_attendee: equipment})
        });

        console.log(this.state.user_id);
    }

    render(){
        return(
            <EquipmentList equipment_list={this.state.user_attendee}/> 
        );
    }
}