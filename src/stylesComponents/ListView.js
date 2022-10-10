import React from "react";
import styled from "styled-components";
import { formatPrice } from "../utils/helpers/helpers";
import { Link } from "react-router-dom";
const ListView = ({ products }) => {
  return (
    <Wrapper>
      {products.map((product) => {
        const { id, title, price, imgList } = product;
        return (
          <article key={id}>
            <img src={imgList[0].fileUrl} alt={title} />
            <div>
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

const Wrapper = styled.section``;

export default ListView;
