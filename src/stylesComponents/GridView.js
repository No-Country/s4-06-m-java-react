import React from "react";
import styled from "styled-components";
import { Card } from "../components/sharedComponents/card/Card";
// import products_reducer from "../reducers/products_reducer";
import Product from "./Product";

const GridView = ({ products }) => {
  return (
    <Wrapper>
      <div className="products-container">
        {products.map((product) => {
          return (
            <Card
              key={product.id}
              image={product.imgList[0].fileUrl}
              text={product.details}
              stars={product.stars}
              price={product.price}
              title={product.title}
              id={product.id}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  img {
    height: 275px;
  }

  .products-container {
    display: grid;
    justify-content: center;
    margin-top: 1rem;
    gap: 1rem;
  }

  @media (min-width: 992px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .products-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default GridView;
