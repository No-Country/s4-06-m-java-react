import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import {
  reviewUrlPost,
  single_product_url as url,
} from "../utils/constants/constants";
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
import { Nav } from "../components/sharedComponents/nav/Nav";
import { useRef } from "react";

const SingleProduct = () => {
  const history = useNavigate();

  const { id } = useParams();
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
    postReview,
    userData,
    isLoggedIn,
  } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
  }, [id]);

  const inputComment = useRef();
  const selectStar = useRef();

  const handlerSubmit = (e) => {
    e.preventDefault();

    const comment = inputComment.current.value;
    const score = selectStar.current.value;
    const username = userData.fullName;
    const idProducto = id;

    const body = {
      idProduct: idProducto,
      score: score,
      username: username,
      comment: comment,
    };

    postReview(reviewUrlPost, body);
  };

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history("/");
      }, 3000);
    }
  }, [error]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  const {
    brand,
    colors,
    details,
    imgList,
    price,
    shortDetails,
    size,
    stock,
    title,
    stars,
  } = product;
  return (
    <Wrapper>
      <div className="sectionn section-center page">
        <Nav />
        <Link to="/products" className="as">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
            <path
              fill="#222"
              d="M55.991 36.458a16.441 16.441 0 0 1-16.42 16.43H10.009a2 2 0 0 1 0-4h29.562a12.425 12.425 0 0 0 0-24.849h-23.98l6.545 5.381a2 2 0 1 1-2.54 3.09L8.739 23.583c-.024-.02-.042-.044-.065-.065a1.906 1.906 0 0 1-.148-.15l-.016-.015c-.014-.016-.032-.028-.046-.044v-.006c-.021-.025-.036-.054-.055-.08a1.759 1.759 0 0 1-.109-.163c-.008-.013-.019-.025-.026-.039s-.025-.033-.034-.051-.021-.054-.033-.08a2.135 2.135 0 0 1-.072-.178l-.007-.018a1.735 1.735 0 0 1-.087-.353c-.006-.037-.018-.072-.021-.109s0-.071 0-.106-.009-.057-.009-.087.008-.058.009-.088v-.105c0-.035.015-.073.021-.11a1.727 1.727 0 0 1 .087-.353l.007-.018c.022-.061.045-.12.072-.178.012-.026.019-.054.033-.08s.024-.033.034-.051.018-.026.026-.039a1.759 1.759 0 0 1 .107-.163c.019-.026.034-.055.055-.08v-.005c.02-.025.045-.042.066-.066.046-.05.093-.1.144-.144.023-.021.041-.045.065-.065l.01-.009L19.6 11.567a2 2 0 1 1 2.54 3.09l-6.545 5.382h23.98a16.438 16.438 0 0 1 16.416 16.419Z"
            />
          </svg>
        </Link>

        <PageHero />
        <div className="single-product">
          <ProductImages images={imgList} />

          <section className="content">
            <div className="titleandStars">
              <h2>{title}</h2>
              <div>
                {" "}
                <span className="starts">
                  <Stars stars={stars} />{" "}
                </span>
              </div>
            </div>
            <div className="price">
              <span className="textPrecio">Precio:</span>{" "}
              <span className="realPrice">{formatPrice(price)}</span>
            </div>
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

            {stock > 0 ? (
              <AddToCart product={product} />
            ) : (
              <p>Sorry the product is not more in our stock</p>
            )}
          </section>
        </div>

        {isLoggedIn ? (
          <>
            <h1 className="agregaResena">Agregar una reseña del producto</h1>

            <form className="form-review" onSubmit={handlerSubmit}>
              <input
                type="text"
                placeholder="comentario"
                ref={inputComment}
                className="inputComentario"
              />
              <label htmlFor="stars" className="labelResenas">
                Evalua el producto:
              </label>

              <select name="stars" id="stars" ref={selectStar}>
                <option value="4">4 estrella</option>
                <option value="3.5">3.5 estrella</option>
                <option value="3">3 estrella</option>
                <option value="2.5">2.5 estrella</option>
                <option value="2.0">2.0 estrella</option>
                <option value="1.5">1.5 estrella</option>
                <option value="1.0">1.0 estrella</option>
                <option value="0.5">0.5 estrella</option>
              </select>
              <button type="submit" className="submitResenas">
                Enviar Reseña
              </button>
            </form>
          </>
        ) : (
          <h2 className="agregaResena">
            ¿ Te gustaria agregar una reseña ?, Porfavor, registrate.
          </h2>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  background-color: #f8f8f8;
  display: flex;
  justify-content: center;
  align-items: center;

  .info {
    font-size: 15px;
  }
  .desc {
    font-size: 15px;
  }
  .textPrecio {
    font-size: 18px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
  }
  .price {
    font-size: 22px;
  }
  .titleandStars {
    display: flex;
    justify-content: space-between;
    width: 80%;
    align-items: center;
    margin-top: 10px;
  }
  .labelResenas {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  .agregaResena {
    text-align: center;
    font-size: 2rem;
    margin-top: 3rem;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 600;
  }

  .inputComentario {
    height: 30px;
    border-radius: 20px;
    padding: 1rem;
    margin-bottom: 1rem;
  }

  .form-review {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 3rem;

    select {
      height: 30px;
      border-radius: 20px;
      margin-bottom: 1rem;
      padding-left: 0.5rem;
    }

    .submitResenas {
      height: 30px;
      background: linear-gradient(
        90.34deg,
        #184f63 3.48%,
        #1f5b73 7%,
        #19495b 92.96%,
        #052734 100%
      );
      border: 2px solid #072b39;
      border-radius: 4px;
      cursor: pointer;
      color: white;
    }
    .submitResenas:hover {
      background-color: #46dc46f1;
    }
  }

  .single-product {
    padding-bottom: 3rem;
    padding: 5px;
  }
  h2 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
  }

  @media screen and (min-width: 1024px) {
    h2 {
      font-size: 30px;
    }
    .realPrice {
      margin-left: 100px;
      font-size: 40px;
    }
    .agregaResena {
      text-align: center;
      font-size: 3rem;
    }
    .form-review {
      width: 50%;
    }
    .single-product {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 70%;
      margin: 0 auto;
    }
  }

  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }

  .as {
    svg {
      width: 40px;
      margin-top: 100px;
      margin-left: 2rem;
    }
  }

  @media screen and (min-width: 1024px) {
    .as {
      svg {
        margin-left: 10rem;
      }
    }
  }
  .price {
    color: hsl(22, 28%, 21%);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
    font-size: 20px;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
    font-size: 20px;
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
