import React from "react";
import styled from "styled-components";
import { Footer } from "../components/sharedComponents/footer/Footer";
import InputSearch from "../components/sharedComponents/inputSearch/InputSearch";
import { Nav } from "../components/sharedComponents/nav/Nav";
import { Filters, ProductList, Sort } from "../stylesComponents";

const ProductsPage = () => {
  return (
    <>
      <Wrapper>
        <Nav />
        <h2 className="productsPage-title">NUESTRO PRODUCTOS</h2>
        <div>
          <Filters />
          <Sort />
        </div>
        <ProductList />
        <Footer />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  .productsPage-title {
    font-family: "Aclonica";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    text-align: center;
  }

  @media screen and (min-width: 1024px) {
    .productsPage-title {
      font-size: 54px;
    }
  }
`;

export default ProductsPage;
