import React from "react";
import MainContent from '../components/mainContent'

export default function Home(props) {
    const {logged_in} = props;
    return (
        <MainContent logged_in={logged_in} />
    );
}