import React from "react";
import styled from "styled-components";
import { FaPlus, FaMinus } from "react-icons/fa";

const AmountButtons = ({ increase, decrease, amount }) => {
  console.log(amount);
  return (
    <Wrapper className="amount-btns">
      <button type="button" className="amount-btn" onClick={decrease}>
        <FaMinus />
      </button>
      <h2 className="Amount">{amount}</h2>
      <button type="button" className="amount-btn" onClick={increase}>
        <FaPlus />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  width: 140px;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  color: black;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  margin-left: 3rem;
  h2 {
    margin-bottom: 0;
  }
  button {
    border: 1px solid #b2bcca;
    background-color: transparent;
    border-radius: 3px;
    cursor: pointer;
    padding: 1rem 0;
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1.6rem;
  }
  h2 {
    margin-bottom: 0;
  }
`;

export default AmountButtons;
