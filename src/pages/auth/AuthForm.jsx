import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import IconBack from "../../assets/images/auth/iconBack.svg";

import "./AuthForm.css";
import { useProductsContext } from "../../context/products_context";

const AuthForm = () => {
  const history = useNavigate();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const nameInputRef = useRef();

  const { Handlerlogin, handlerUserData } = useProductsContext();

  const [isLogin, setIsLogin] = useState(true);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const sumbitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredName = nameInputRef.current?.value;

    if (isLogin) {
      async function getResponseRegister() {
        const response = await fetch(
          "https://sport-eco.herokuapp.com/auth/register",
          {
            method: "POST",
            body: JSON.stringify({
              fullName: enteredName,
              email: enteredEmail,
              password: enteredPassword,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();

        console.log(data);
      }
      getResponseRegister();
    } else {
      async function getResponseLogin() {
        try {
          const response = await fetch(
            "https://sport-eco.herokuapp.com/auth/login",
            {
              method: "POST",
              body: JSON.stringify({
                email: enteredEmail,
                password: enteredPassword,
              }),
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          const data = await response.json();

          Handlerlogin(data.token);

          handlerUserData(data);

          history("/");
        } catch (error) {
          console.log(error);
        }
      }
      getResponseLogin();
    }
  };

  return (
    <form className="LoginScreen" onSubmit={sumbitHandler}>
      <div className="wrapper-auth">
        <h2 className="wrapper-auth__title">
          <Link to="/">
            <img src={IconBack} alt="iconBack" className="iconBack" />
          </Link>
          {isLogin ? "Crear Cuenta" : "Iniciar Sesion"}
        </h2>
        {isLogin ? (
          <label className="wrapper-auth__label">Nombre Completo</label>
        ) : (
          ""
        )}
        {isLogin ? (
          <input
            className="wrapper-auth__input"
            type="text"
            placeholder="Ingresa tu nombre completo"
            required
            ref={nameInputRef}
          />
        ) : (
          ""
        )}
        <label className="wrapper-auth__label">Correo Electronico</label>
        <input
          className="wrapper-auth__input"
          type="text"
          placeholder="Ingresa tu correo"
          required
          ref={emailInputRef}
        />
        <label className="wrapper-auth__label">Constraseña</label>
        <input
          className="wrapper-auth__input"
          type="text"
          placeholder="Ingresa la contraseña"
          required
          ref={passwordInputRef}
        />
        <span className="wrapper-auth__info">
          Debe contener caracteres con letras y numeros{" "}
        </span>
        <div className="wrapper-auth__footer">
          <span className="wrapper-auth__footer__cuenta">
            {isLogin ? "¿ Tienes una cuenta ?" : "¿ Aun no tienes cuenta ?"}
          </span>
          <button
            type="button"
            className="wrapper-auth__footer__register"
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Log In" : "Registrarse"}
          </button>
        </div>
        <button className="button button--blue mt-btn">
          {isLogin ? "Registrarse" : "Iniciar Sesion"}
        </button>
      </div>
    </form>
  );
};

export default AuthForm;
