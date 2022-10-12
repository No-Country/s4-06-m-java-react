import React from "react";
import styled from "styled-components";

export const FacturaElectronica = () => {
  /*logica */
  return (
    <Wrapper>
      <div className="contenedor-negro">
        <p className="rojo">asd</p>
        <p className="verde">asd</p>
        <p className="azul">asd</p>
      </div>
    </Wrapper>
  );
};
/*aqui viene el css*/

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  .contenedor-negro {
    background-color: black;
    color: white;
    width: 50%;
  }
  .rojo {
    color: red;
  }

  .verde {
    color: green;
  }

  .azul {
    color: #ff1500;
  }
`;
