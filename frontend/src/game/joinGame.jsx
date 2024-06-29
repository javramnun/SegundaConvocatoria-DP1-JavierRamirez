import React from 'react';
import '../App.css';
import '../static/css/home/home.css'; 

export default function joinGame(){

    const codigo = Math.floor(100000 + Math.random() * 900000);

    return(
        <div className="home-page-container">
            <div className="hero-div">
                <h1>Código de Sala:</h1>
                <h2>{codigo}</h2>

            </div>
        </div>
    );
}