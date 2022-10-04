import React from "react";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import IconBack from "../../assets/images/auth/iconBack.svg";
import "./AuthForm.css";

const AuthForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const nameInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  return (
    <div className="LoginScreen">
      <div className="wrapper-auth">
        <Link to="/">
          <img src={IconBack} alt="iconBack" className="iconBack" />
        </Link>

        <h2 className="wrapper-auth__title">
          {isLogin ? "Iniciar Sesion" : "Registrarse"}
        </h2>
        {isLogin ? (
          ""
        ) : (
          <label className="wrapper-auth__label">Nombre Completo</label>
        )}
        {isLogin ? (
          ""
        ) : (
          <input
            className="wrapper-auth__input"
            type="text"
            placeholder="ingresa tu nombre completo"
            required
            ref={nameInputRef}
          />
        )}
        <label className="wrapper-auth__label">Correo Electronico</label>
        <input
          className="wrapper-auth__input"
          type="text"
          placeholder="ingresa tu correo"
          required
          ref={emailInputRef}
        />
        <label className="wrapper-auth__label">Constraseña</label>
        <input
          className="wrapper-auth__input"
          type="text"
          placeholder="In8$a"
          required
          ref={passwordInputRef}
        />
        <span className="wrapper-auth__info">
          Debe contener caracteres con letras y numeros{" "}
        </span>
        <div className="wrapper-auth__footer">
          <span className="wrapper-auth__footer__cuenta">
            {isLogin ? "¿ Aun no tienes cuenta ?" : "¿ Tienes una cuenta ?"}
          </span>
          <button
            type="button"
            className="wrapper-auth__footer__register"
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Registrarse" : "Iniciar Sesion"}
          </button>
        </div>
        <button className="button button--blue mt-btn ">
          {isLogin ? "Iniciar Sesion" : "Registrarse"}
        </button>
      </div>
    </div>
  );
};

export default AuthForm;
