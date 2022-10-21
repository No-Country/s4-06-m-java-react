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
        <h2 className="productsPage-title">NUESTROS PRODUCTOS</h2>
        {/* <Sort /> */}
        <div className="grid">
          <Filters />
          <ProductList />
        </div>
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
      margin-top: 9rem;
    }
    .grid {
      display: grid;
      grid-template-columns: 300px 1fr;
      gap: 2rem;
    }
  }
`;

export default ProductsPage;
