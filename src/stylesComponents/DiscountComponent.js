import React from "react";
import styled from "styled-components";
export const DiscountComponent = () => {
  return <Discount>50%</Discount>;
};

const Discount = styled.span`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  background: #218037;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  border-radius: 0px 20px 20px 0px;
  padding: 7px;
  color: white;
  position: absolute;
  top: 10%;
  left: 7px;
`;
