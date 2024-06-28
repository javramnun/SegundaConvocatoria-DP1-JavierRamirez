import React from "react";
import { Link } from "react-router-dom";
import "../../static/css/auth/authButton.css";
import "../../static/css/auth/authPage.css";
import tokenService from "../../services/token.service";

const Logout = () => {
  function sendLogoutRequest() {
    const jwt = window.localStorage.getItem("jwt");
    if (jwt || typeof jwt === "undefined") {
      tokenService.removeUser();
      window.location.href = "/";
    } else {
      alert("There is no user logged in");
    }
  }

  return (
    <div className="auth-page-container">
      <div className="auth-form-container">
        <h2 className="text-center text-md">
          ¿Estás seguro de que deseas cerrar sesión?
        </h2>
        <div className="options-row">
          <Link to="/" style={{borderRadius: 8, padding: 10, textDecoration: 'none',
                        fontSize: 22, color: 'lightgray', width: 200, textAlign: 'center',
                        backgroundColor: '#2f324f', marginTop: 20}}>
            No
          </Link>
          <button onClick={() => sendLogoutRequest()} style={{borderRadius: 8, padding: 10, textDecoration: 'none',
                        fontSize: 22, color: 'lightgray', width: 200, textAlign: 'center',
                        backgroundColor: '#2f324f', marginTop: 20}}>
            Sí
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logout;
