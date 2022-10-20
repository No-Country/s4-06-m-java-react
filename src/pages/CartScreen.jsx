import React from "react";
import styled from "styled-components";
import closeicon from "../assets/images/card/removeCardDetailsIcon.svg";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cart_context";
import { formatPrice } from "../utils/helpers/helpers";
import AmountButtons from "../stylesComponents/AmountButtons";
import { Nav } from "../components/sharedComponents/nav/Nav";
import{Footer} from "../components/sharedComponents/footer/Footer"
import { useProductsContext } from "../context/products_context";

export const CartScreen = () => {
  const { token } = useProductsContext();
  const { cart, total_amount, removeItem, toggleAmount, total_items } =
    useCartContext();

  const increase = (id) => {
    toggleAmount(id, "inc");
  };

  const decrease = (id) => {
    toggleAmount(id, "dec");
  };

  if (cart.length < 1) {
    return (
      <div className="div-cart-vacio">
      <Nav />
      <div className="content-vacio">
      
        <p className="vacio">
          Tu carro esta vacio <br /> elige nuestros mejores
          productos
        </p>

        <Link to="/products">
          <button className="vacio-continue-shopping">SHOPPING </button>
        </Link>
        <dev className="div__img__cart">
        <img
          src="https://www.presteamshop.com/blog/wp-content/uploads/2020/12/como-solucionar-el-error-de-carrito-vacio-en-prestashop.png"
          className="carrito-vacio-imagen"
        />
        </dev>
      
      </div>
      <Footer />
      </div>
    );
  }
  return (
    <div className="container-principal">
      <Nav />
      <Wrapper>
        <div className="resumen-del-pedido">
          <h2 className="resumen-del-pedido__title">Resumen del pedido</h2>
          <span className="resumen-del-pedido__contador">
            {total_items} productos pedidos
          </span>

          {cart.map((item) => {
            return (
              <div className="card-detalles" key={item.id}>
                <img
                  src={closeicon}
                  alt="close-icon"
                  className="remove-icon"
                  onClick={() => removeItem(item.id)}
                />
                <p className="card-detalles__paragraph">
                  fecha estimada de entrega : 30 septiembre 2022
                </p>

                <div className="card-detalles__body">
                  <div className="wrapper-image">
                    <img src={item?.image} alt={item.name} />
                  </div>

                  <div className="wrapper-details">
                    <p>Playera deportiva en algodon con estampado de letras </p>
                    <div
                      style={{
                        width: "15px",
                        height: "15px",
                        backgroundColor: `${item.color}`,
                        borderRadius: "50%",
                        marginLeft: "5rem",
                        marginTop: "1rem",
                        marginBottom: "1rem",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    ></div>

                    <AmountButtons
                      amount={item?.amount}
                      increase={() => increase(item.id)}
                      decrease={() => decrease(item.id)}
                    />

                    <span className="price">
                      {" "}
                      {formatPrice(item.price * item.amount)}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}

          <hr />

          <Link to="/products">
            <button className="botton-pagar">continue shopping</button>
          </Link>

          {/* <button className="botton-pagar" onClick={clearCart}>
          Eliminar todos los productos
        </button> */}
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
              <p className="title-factura-de-end">{total_items}</p>
              <p className="title-factura-de-end">
                {formatPrice(total_amount)}
              </p>
              <p className="title-factura-de-end">
                {formatPrice(total_amount)}
              </p>
            </div>
          </div>
          <div className="wrapper-input">
            <input type="checkbox" className="checkbox-input" />
            <p className="checkbox">
              Por favor marque para reconocer nuestra Política de Privacidad y
              Términos
            </p>
          </div>

          {!token ? (
            <Link to="/login">
              <button className="botton-pagar">
                REGISTRATE ANTES DE PAGAR
              </button>
            </Link>
          ) : (
            <Link to="/address">
              <button className="botton-pagar">
                Pagar {formatPrice(total_amount)}
              </button>
            </Link>
          )}
        </div>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  @media screen and (min-width: 1024px) {
    /* flex-direction: row;
    justify-content: start;
    align-items: flex-start; */
    display: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: flex-start;
  }

  .vacio {
    font-size: 4rem;
    text-align: center;
  }

  .resumen-del-pedido {
    /* width: 620px; */
    margin: 0 auto;
  }

  .subtotal {
    color: black;
    font-size: 2rem;
    margin-left: 3rem;
  }
  .resumen-del-pedido__title {
    text-align: start;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 19px;
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
    height: 227px;

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
    font-size: 10px;
  }

  .card-detalles__body {
    display: flex;
    justify-content: space-between;
  }
  .wrapper-image {
    background-color: aliceblue;
    /* width: 160px;
    height: 163px; */

    img {
      display: block;
      width: 267px;
      height: 202px;
      object-fit: cover;
    }
  }
  .wrapper-details {
    p {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 600;
      font-size: 13px;
      text-align: center;
      color: #626262;
      /* width: 80%; */
      /* margin: 18px auto; */
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
    /* width: 55%; */
    margin: 0 auto;
    color: #e7d8d8;
    text-align: center;

    .title-factura-de {
      text-align: center;
      color: black;
      font-size: 1.5rem;
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
      font-size: 2rem;
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
    /* width: 447px;
    height: 52px; */
    cursor: pointer;
    width: 100%;
    padding: 1rem;

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

  @media screen and (min-width: 1024px) {
    .botton-pagar {
      width: 50%;
    }
  }
`;
