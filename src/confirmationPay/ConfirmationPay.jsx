import React from "react";
import styled from "styled-components";
import greenCircle from "../assets/images/payment/greenCircle.svg";

export const FacturaElectronica = () => {
  /*logica */
  return (
    <Wrapper>
      <div className="contenedor-texto">
        <p className="upContainer">
          <div>
            <img src={greenCircle} alt="greenIcon" />
          </div>
          <div>
            <span className="pagoExitoso">Pago exitoso</span>
            <p>Entrega estimada: 24/sept</p>
          </div>
        </p>

        <p className="midContainer">Factura electronica</p>
        <p className="footerContainer">
          Tienes 30 días para descargar tu factura en el siguiente Link.{" "}
          <span className="seeDetails">Ver detalles</span>{" "}
        </p>
      </div>
      <button className="buttonConfirm">Aceptar</button>
    </Wrapper>
  );
};
/*aqui viene el css*/

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 320px;
  height: 324px;
  border: 1px solid #b2bcca;
  border-radius: 4px;
  ///////
  .contenedor-texto {
    font-family: "Roboto";
    font-style: normal;
    color: #212121;
    width: 90%;
    height: 75%;
    display: flex;
    flex-direction: column;
  }
  .upContainer {
    display: flex;
    justify-content: space-around;
    font-weight: 400;
    font-size: 18px;
    line-height: 9px;
  }

  .pagoExitoso {
    color: #218037;
  }

  .midContainer {
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
  }
  .footerContainer {
    font-weight: 300;
    font-size: 16px;
    line-height: 22px;
  }
  .seeDetails {
    color: #218037;
  }
  .buttonConfirm {
    cursor: pointer;
    width: 290px;
    height: 42px;
    color: white;
    background: linear-gradient(
      90.34deg,
      #184f63 3.48%,
      #1f5b73 7%,
      #19495b 92.96%,
      #052734 100%
    );
    border: 2px solid #072b39;
    border-radius: 4px;
  }
  @media screen and (min-width: 1024px) {
    width: 520px;
    height: 324px;

    .footerContainer {
      font-size: 14.5px;
    }
    .seeDetails {
      font-size: 15.7px;
    }
    .buttonConfirm {
      width: 480px;
      height: 52px;
      font-size: 18px;
    }
    .upContainer {
      display: flex;
      justify-content: left;
      gap: 15px;
      font-weight: 400;
      font-size: 18px;
      line-height: 9px;
    }
  }
`;
