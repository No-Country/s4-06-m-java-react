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

  console.log("id :   " + id);
  console.log("mainColor:  " + mainColor.name);
  console.log("amount:   " + amount);
  console.log(product);
  return (
    <Wrapper>
      <div className="colors">
        <span>colors : </span>
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
        <AmountButtons
          amount={amount}
          increase={increase}
          decrease={decrease}
        />

        <Link to="/cart">
          <button
            type="button"
            onClick={() => addToCart(id, mainColor.name, amount, product)}
          >
            Agregar al carrito
          </button>
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 2rem;
  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
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
    width: 1.5rem;
    height: 1.5rem;
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
    margin-top: 2rem;
  }

  .btn {
    margin-top: 1rem;
    width: 140px;
  }
`;
export default AddToCart;
