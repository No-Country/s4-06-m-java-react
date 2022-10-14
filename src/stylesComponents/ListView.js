import React from "react";
import styled from "styled-components";
import { formatPrice } from "../utils/helpers/helpers";
import { Link } from "react-router-dom";
import Stars from "./Stars";
const ListView = ({ products }) => {
  return (
    <Wrapper>
      {products.map((product) => {
        const { id, title, price, imgList, stars } = product;
        return (
          <article key={id} className="product">
            <img src={imgList[0].fileUrl} alt={title} />
            <div className="details">
              <Stars stars={stars} />
              <h4>{title}</h4>
              <h5 className="price">{formatPrice(price)}</h5>
              <Link to={`/products/${id}`} className="btn">
                DETAILS
              </Link>
            </div>
          </article>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .product {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    background-color: #052734;
    color: white;
    padding: 1rem;
    border-bottom: 2px solid white;
    margin-top: 3rem;
    border-radius: 15px;

    img {
      width: 150px;
      height: 150px;
      border-radius: 10px;
    }
  }

  .details {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border-left: 2px solid white;
  }

  .btn {
    background-color: white;
    color: black;
    border-radius: 2rem;
    padding: 1rem;
  }
`;

export default ListView;
