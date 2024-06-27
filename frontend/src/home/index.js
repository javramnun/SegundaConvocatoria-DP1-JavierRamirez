import React from 'react';
import '../App.css';
import '../static/css/home/home.css'; 

export default function Home(){
    return(
        <div className="home-page-container">
            <div className="hero-div">
                <h1>Bienvenido a Dixit!</h1>
                <h3 className='mt-2'>Inicie sesión para jugar</h3>

                <div style={{ display: 'flex', justifyContent: 'space-between', width: 420 }}>
                    <a href="/dashboard" style={{borderRadius: 8, padding: 10, textDecoration: 'none',
                    fontSize: 22, color: 'black', width: 200, textAlign: 'center',
                    backgroundColor: '#c0c0ef', marginTop: 20}}>
                    Registrarse</a> 

                    <a href="/login" style={{borderRadius: 8, padding: 10, textDecoration: 'none',
                    fontSize: 22, color: 'black', width: 200, textAlign: 'center',
                    backgroundColor: '#c0c0ef', marginTop: 20}}>
                    Iniciar Sesión</a> 
                </div>   
                
                      
            </div>
        </div>
    );
}