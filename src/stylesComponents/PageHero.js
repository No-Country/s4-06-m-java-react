import React from "react";
import styled from "styled-components";

const PageHero = () => {
  return (
    <Wrapper>
      <div className="hero">
        <h3 className="">Product Details</h3>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  max-width: 909px;
  margin: 0 auto;
  h3 {
    font-size: 30px;
    font-family: "Aclonica";
    font-style: normal;
    font-weight: 400;
  }
  .hero {
    width: 100%;
    height: 58px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
    border-radius: 1rem;
    .hero__title {
      color: black;
      font-size: 40px;
      margin: 0;
      padding: 0;
    }
  }
`;

export default PageHero;
