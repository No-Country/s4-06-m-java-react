import React from "react";
import styled from "styled-components";
import closeicon from "../assets/images/card/removeCardDetailsIcon.svg";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cart_context";
import { CartContent, PageHero } from "../stylesComponents";

export const CartScreen = () => {
  const { cart } = useCartContext();

  if (cart.length < 1) {
    return (
      <div className="content-vacio">
        <p className="vacio">
          Tu carrito esta vacio porfavor <br /> elige uno de nuestro mejores
          productos
        </p>

        <img
          src="https://www.presteamshop.com/blog/wp-content/uploads/2020/12/como-solucionar-el-error-de-carrito-vacio-en-prestashop.png"
          className="carrito-vacio-imagen"
        />
      </div>
    );
  }
  return (
    <Wrapper>
      <div className="resumen-del-pedido">
        <h2 className="resumen-del-pedido__title">Resumen del pedido</h2>
        <span className="resumen-del-pedido__contador">
          3 productos pedidos
        </span>

        <div className="card-detalles">
          <img src={closeicon} alt="close-icon" className="remove-icon" />
          <p className="card-detalles__paragraph">
            fecha estimada de entrega : 30 septiembre 2022
          </p>

          <div className="card-detalles__body">
            <div className="wrapper-image">
              <img src="https://img01.ztat.net/article/spp-media-p1/c138bbb465f83d049f656bf344ab2102/f03f200bd13046a1a7e82ce8073dbe5c.jpg?imwidth=156" />
            </div>

            <div className="wrapper-details">
              <p>Playera deportiva en algodon con estampado de letras </p>

              <span className="price">$1234</span>
            </div>
          </div>
        </div>
        <div className="card-detalles">
          <img src={closeicon} alt="close-icon" className="remove-icon" />
          <p className="card-detalles__paragraph">
            fecha estimada de entrega : 30 septiembre 2022
          </p>

          <div className="card-detalles__body">
            <div className="wrapper-image">
              <img src="https://img01.ztat.net/article/spp-media-p1/c138bbb465f83d049f656bf344ab2102/f03f200bd13046a1a7e82ce8073dbe5c.jpg?imwidth=156" />
            </div>

            <div className="wrapper-details">
              <p>Playera deportiva en algodon con estampado de letras </p>

              <span className="price">$1234</span>
            </div>
          </div>
        </div>
        <div className="card-detalles">
          <img src={closeicon} alt="close-icon" className="remove-icon" />
          <p className="card-detalles__paragraph">
            fecha estimada de entrega : 30 septiembre 2022
          </p>

          <div className="card-detalles__body">
            <div className="wrapper-image">
              <img src="https://img01.ztat.net/article/spp-media-p1/c138bbb465f83d049f656bf344ab2102/f03f200bd13046a1a7e82ce8073dbe5c.jpg?imwidth=156" />
            </div>

            <div className="wrapper-details">
              <p>Playera deportiva en algodon con estampado de letras </p>

              <span className="price">$1234</span>
            </div>
          </div>
        </div>
      </div>

      <div className="factura">
        <h2 className="resumen-del-pedido-factura__title">Factura</h2>
        <div className="wrapper-factura-details">
          <div className="grid">
            <p className="title-factura-de">Cantidad de productos:</p>
            <p className="title-factura-de">descuento aplicado:</p>
            <p className="title-factura-de">Total:</p>
          </div>
          <div>
            <p className="title-factura-de-end">12</p>
            <p className="title-factura-de-end">$740</p>
            <p className="title-factura-de-end">$740</p>
          </div>
        </div>
        <div className="wrapper-input">
          <input type="checkbox" className="checkbox-input" />
          <p className="checkbox">
            Por favor marque para reconocer nuestra Política de Privacidad y
            Términos
          </p>
        </div>
        <button className="botton-pagar">Pagar $76123764</button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;

  @media screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  .vacio {
    font-size: 4rem;
    text-align: center;
  }

  .resumen-del-pedido {
    width: 620px;
    margin: 0 auto;
  }

  .resumen-del-pedido__title {
    text-align: start;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    color: #212121;
  }

  .resumen-del-pedido__contador {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #212121;
  }

  .card-detalles {
    margin: 0 auto;
    color: white;
    padding: 1rem;
    border-bottom: 1px solid black;

    position: relative;

    .remove-icon {
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
    }
  }

  .card-detalles__paragraph {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    color: #218037;
    margin: 0 auto;
    margin-bottom: 1rem;
  }

  .card-detalles__body {
    display: flex;
    justify-content: space-between;
  }
  .wrapper-image {
    background-color: aliceblue;
    width: 160px;
    height: 163px;

    img {
      display: block;
      width: 160px;
      height: 163px;
      object-fit: cover;
    }
  }
  .wrapper-details {
    p {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      color: #626262;
      width: 80%;
      margin: 0 auto;
    }

    .price {
      position: absolute;
      bottom: 10px;
      right: 10px;
      font-family: "Open Sans";
      font-style: normal;
      font-weight: 600;
      font-size: 15px;
      color: #000000;
    }
  }

  /*factura*/

  .factura {
  }

  .resumen-del-pedido-factura__title {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    text-align: center;
    margin-top: 5rem;
  }
  .wrapper-factura-details {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    width: 55%;
    margin: 0 auto;
    height: 429px;
    color: #e7d8d8;
    text-align: center;

    .title-factura-de {
      text-align: center;
      color: black;
      font-size: 2.5rem;
    }
    p {
      padding: 1rem;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
    }

    .title-factura-de-end {
      text-align: center;
      color: black;
      font-size: 3rem;
    }
  }

  .wrapper-input {
    display: flex;
    margin: 0 auto;
    justify-content: center;
  }
  .checkbox {
    text-align: center;
    display: inline-block;
    color: #4f4f4f;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
  }

  .checkbox-input {
  }
  .botton-pagar {
    width: 447px;
    height: 52px;
    cursor: pointer;

    background: linear-gradient(
      90.34deg,
      #184f63 3.48%,
      #1f5b73 7%,
      #19495b 92.96%,
      #052734 100%
    );
    border: 2px solid #072b39;
    border-radius: 4px;
    margin: 0 auto;
    display: block;
    color: white;
  }
`;
