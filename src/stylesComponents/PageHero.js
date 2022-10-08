import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const PageHero = () => {
  return (
    <Wrapper>
      <div className="hero">
        <h3 className="hero__title">Details Product</h3>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  max-width: 909px;
  margin: 0 auto;
  .hero {
    background: linear-gradient(
      90.34deg,
      #184f63 3.48%,
      #1f5b73 7%,
      #19495b 92.96%,
      #052734 100%
    );
    width: 100%;

    height: 58px;
    margin-top: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
    border-radius: 1rem;
    .hero__title {
      color: white;
      font-size: 29px;
    }
  }
`;

export default PageHero;
