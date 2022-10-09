import React from "react";
import styled from "styled-components";
import { Footer } from "../components/sharedComponents/footer/Footer";
import InputSearch from "../components/sharedComponents/inputSearch/InputSearch";
import { Nav } from "../components/sharedComponents/nav/Nav";
import { Filters, ProductList, Sort } from "../stylesComponents";

const ProductsPage = () => {
  return (
    <Wrapper className="page">
      <Nav inputSearch={<InputSearch />} />
      <div className="section-center products">
        <Filters />
        <Sort />
      </div>
      <ProductList />
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`;

export default ProductsPage;
