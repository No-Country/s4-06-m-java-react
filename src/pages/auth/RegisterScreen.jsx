import React from "react";
import { Link } from "react-router-dom";
import IconBack from "../../assets/images/auth/iconBack.svg";
import "./register.css";
const RegisterScreen = () => {
  return (
    <div className="RegisterScreen">
      <div className="wrapper-auth">
        <Link to="/">
          <img src={IconBack} alt="iconBack" className="iconBack" />
        </Link>
        <h2 className="wrapper-auth__title">Crear Cuenta</h2>
        <label className="wrapper-auth__label">Nombre y Apellido</label>
        <input
          className="wrapper-auth__input"
          type="text"
          placeholder="Ingresa tu Nombre"
        />
        <label className="wrapper-auth__label">Correo Electronico</label>
        <input
          className="wrapper-auth__input"
          type="text"
          placeholder="Ingresa tu correo"
        />
        <label className="wrapper-auth__label">Contraseña</label>
        <input
          className="wrapper-auth__input"
          type="text"
          placeholder="Ingresa tu contraseña"
        />
        <span className="wrapper-auth__info">
          Debe contener caracteres con letras y numeros{" "}
        </span>
        <div className="wrapper-auth__footer">
          <span className="wrapper-auth__footer__cuenta">
            Ya Tienes Cuenta ?
          </span>
          <Link to="/login">
            <span className="wrapper-auth__footer__register">Log in</span>
          </Link>
        </div>
        <button className="button button--blue mt-btn ">Registrarse</button>
      </div>
    </div>
  );
};

export default RegisterScreen;
