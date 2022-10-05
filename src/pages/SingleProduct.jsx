import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { single_product_url as url } from "../utils/constants/constants";
import { formatPrice } from "../utils/helpers/helpers";

import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from "../stylesComponents";
import { useEffect } from "react";

const SingleProduct = () => {
  const history = useNavigate();

  const { id } = useParams();
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
  }, [id]);

  // useEffect(() => {
  //   if (error) {
  //     setTimeout(() => {
  //       history("/");
  //     }, 3000);
  //   }
  // }, [error]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Loading />;
  }

  const {
    brand,
    color,
    details,
    imgList,
    price,
    shortDetails,
    size,
    stock,
    title,
  } = product;
  return (
    <Wrapper>
      <div className="sectionn section-center page">
        <Link to="/products" className="as">
          back to products
        </Link>

        <div>
          <PageHero />
          <ProductImages images={imgList} />

          <section className="content">
            <h2>{title}</h2>
            <Stars />
            <h5 className="price">{formatPrice(price)}</h5>
            <p className="desc">{shortDetails}</p>

            <p className="info">
              <span>Avaliable:</span>
              {stock ? "In stock" : "out of stock"}
            </p>
            <p className="info">
              <span>Brand:</span>
              {brand}
            </p>

            <hr />

            {stock ? (
              <AddToCart />
            ) : (
              <p>Sorry the product is not more in our stock</p>
            )}
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  background-color: #f8f8f8;
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }

  .as {
    position: absolute;
    background-color: black;
    color: white;
    padding: 1rem;
    border-radius: 10px;
    top: 200px;
    left: 50%;
    transform: translateX(-50%);
  }
  .price {
    color: hsl(22, 28%, 21%);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default SingleProduct;
