import React from "react";
import { Link } from "react-router-dom";
import IconBack from "../../assets/images/auth/iconBack.svg";
import "./login.css";
const LoginScreen = () => {
  return (
    <div className="LoginScreen">
      <div className="wrapper-auth">
        <Link to="/">
          <img src={IconBack} alt="iconBack" className="iconBack" />
        </Link>
        <h2 className="wrapper-auth__title">Iniciar Sesion</h2>
        <label className="wrapper-auth__label">Correo</label>
        <input
          className="wrapper-auth__input"
          type="text"
          placeholder="ingresa tu correo"
        />
        <label className="wrapper-auth__label">contrasena</label>
        <input
          className="wrapper-auth__input"
          type="text"
          placeholder="In8$a"
        />
        <span className="wrapper-auth__info">
          Debe contener caracteres con letras y numeros{" "}
        </span>
        <div className="wrapper-auth__footer">
          <span className="wrapper-auth__footer__cuenta">
            Aun no tienes cuenta ?
          </span>
          <Link to="/register">
            <span className="wrapper-auth__footer__register">Registrarse</span>
          </Link>
        </div>
        <button className="button button--blue mt-btn ">Iniciar Seccion</button>
      </div>
    </div>
  );
};

export default LoginScreen;
