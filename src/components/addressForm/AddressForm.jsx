import React from "react";
import "./AddressForm.css";
import "../../pages/auth/AuthForm.css";
import { useRef } from "react";
import { BarraDeProgreso } from "../../stylesComponents/BarraDeProgreso";
import barraAdresse from "../../assets/images/card/barraAdrese.svg";
import { Link } from "react-router-dom";

export const AddressForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const cityInputRef = useRef();
  const addressInputRef = useRef();
  const postalInputRef = useRef();

  const sumbitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
  };

  return (
    <>
      <BarraDeProgreso svg={barraAdresse} />
      <form className="addressContainer" onSubmit={sumbitHandler}>
        <div className="wrapper-auth">
          <div className="wrapper-address__title">Direccion de envío</div>
          <label className="wrapper-auth__label">Correo </label>
          <input
            className="wrapper-address__input"
            type="text"
            placeholder="Ingresa tu correo.."
            required
            ref={emailInputRef}
          />
          <label className="wrapper-auth__label">Constraseña</label>
          <input
            className="wrapper-address__input"
            type="password"
            placeholder="Ingresa la contraseña.."
            required
            ref={passwordInputRef}
          />
          <label className="wrapper-auth__label">Ciudad/Region</label>
          <input
            className="wrapper-address__input"
            type="text"
            placeholder="Ingresa tu nombre completo.."
            ref={cityInputRef}
          />
          <label className="wrapper-auth__label">Calle y Numero</label>
          <input
            className="wrapper-address__input"
            type="text"
            placeholder="Ingresa tu direccion.."
            ref={addressInputRef}
          />
          <label className="wrapper-auth__label">Codigo Postal</label>
          <input
            className="wrapper-address__input"
            type="number"
            name="numero"
            placeholder="Ingresa tu codigo postal.."
            ref={postalInputRef}
          />
          <label className="wrapper-auth__label">Telefono</label>
          <input
            className="wrapper-address__input"
            type="number"
            name=""
            placeholder="Ingresa tu numero de celular.."
            ref={cityInputRef}
          />
          <div className="wrapper-address__footer ">
            <div type="button" className="wrapper-auth__footer__register">
              <span className="wrapper-address__footer--span">
                Guardar mi direccion de envío.
              </span>
              {""} ¿deseas cambiar de dirección?
            </div>
          </div>

          <Link to="/paymentScreen">
            <button className="button button--blue mt-btn">
              Continuar Con el Pago
            </button>
          </Link>
        </div>
      </form>
    </>
  );
};
