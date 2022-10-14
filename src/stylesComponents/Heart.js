import React from "react";
import favoriteImg from "../assets/images/card/favoriteImg.svg";
import styled from "styled-components";
export const Heart = () => {
  return <Image src={favoriteImg} alt="favoriteImg"></Image>;
};

const Image = styled.img`
  position: absolute;
  right: 27px;
  top: 240px;

  @media screen and (min-width: 1024px) {
    right: 9px;
  }
`;
