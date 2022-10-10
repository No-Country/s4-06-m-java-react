import React from "react";
import styled from "styled-components";
import { formatPrice } from "../utils/helpers/helpers";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Stars from "./Stars";

const Product = ({ imgList, title, price, id, stars }) => {
  return (
    <Wrapper>
      <Link to={`/products/${id}`}>
        <div className="container">
          <img src={imgList[0].fileUrl} alt={title} />
        </div>
        <Stars stars={stars} />
        <p>Playera deportiva con estampado de lineas dagonales</p>
        <footer>
          <h5>{title}</h5>
          <p>{formatPrice(price)}</p>
        </footer>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.article``;
export default Product;
