import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";
import AmountButtons from "./AmountButtons";

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();
  const { id, colors } = product;
  const [mainColor, setmainColor] = useState(colors[0]);
  const [amount, setamount] = useState(1);

  const increase = () => {
    setamount((prev) => prev + 1);
  };
  const decrease = () => {
    setamount((prev) => {
      let tempAmount = prev - 1;

      if (tempAmount < 1) {
        tempAmount = 1;
      }

      return tempAmount;
    });
  };

  return (
    <Wrapper>
      <div className="colors">
        <span>colores : </span>
      </div>

      {colors.map((color, index) => {
        return (
          <button
            key={index}
            className={`${
              mainColor === color ? "color-btn active" : "color-btn"
            }`}
            style={{ background: color.name }}
            onClick={() => setmainColor(color)}
          >
            {mainColor === color ? <FaCheck /> : null}
          </button>
        );
      })}

      <div className="btn-container">
        <div className="incrementButton">
          <AmountButtons
            amount={amount}
            increase={increase}
            decrease={decrease}
          />
        </div>
        <Link to="/cart">
          <button
            type="button"
            onClick={() => addToCart(id, mainColor.name, amount, product)}
            className="addProductbtn"
          >
            Agregar a tu carrito
          </button>
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  position: relative;
  height: 100px;
  justify-content: center;
  width: 100%;
  .buttonsColors {
    display: flex;
  }
  .addProductbtn {
    position: absolute;
    width: 95%;
    left: 50%;
    transform: translateX(-50%);
    height: 30px;
    background: linear-gradient(
      90.34deg,
      #184f63 3.48%,
      #1f5b73 7%,
      #19495b 92.96%,
      #052734 100%
    );
    border: 2px solid #072b39;
    border-radius: 4px;
    cursor: pointer;
    color: white !important;
    padding: 5px 10px;
    margin-top: 30px;
    border: none;
    cursor: pointer;
    font-size: 1.3rem;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    outline: 1px solid;
    outline-color: rgba(49, 138, 172, 0.4);
    transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
    /* box-shadow: 2px 2px 2px 2px #082710; */
  }
  .addProductbtn:hover {
    box-shadow: inset 0 0 20px rgba(49, 138, 172, 0.5),
      0 0 20px rgba(49, 138, 172, 0.4);
    outline-color: rgba(49, 138, 172, 0);
    outline-offset: 80px;
  }
  .colors {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;

    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    display: inline-block;
    width: 1.7rem;
    height: 1.7rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    display: flex;
    align-items: center;
  }
  .incrementButton {
    margin-bottom: 20px;
  }
  .btn {
    margin-top: 1rem;
    width: 140px;
  }
  @media screen and (min-width: 1024px) {
    .addProductbtn {
      width: 100%;
      height: 50px;
      font-size: 20px;
    }
  }
`;
export default AddToCart;
