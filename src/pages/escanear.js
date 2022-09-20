import React from 'react';
import Scanner from "../components/scanner";
import { useNavigate } from 'react-router-dom';

export default function Escanear (props) {
    const navigate = useNavigate();

    const backToEquipmentList = () => {
        navigate('/equipos');
    }

    return (
        <>
            <Scanner user_id={props.user_id} backToEquipmentList={backToEquipmentList} />
        </>
    );
}