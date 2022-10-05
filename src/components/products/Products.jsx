import React from "react";
import { Link } from "react-router-dom";
import { cardItems } from "../../utils/constants/constants";
import "./products.css";
const Products = () => {
  return (
    <div className="wrapper-products">
      {cardItems.map((card) => (
        <Link to={`/products/${card.id}`} key={card.id}>
          <div className="card-product">
            <div className="card-product__image">
              <img
                src={card.img}
                className="card-product__image__img"
                alt={card.price}
              />
            </div>

            <p className="card-product__paragraph">
              Playera deportiva en algodon... Playera deportiva en algodon...
              Playera deportiva en algodon... Playera deportiva en algodon...
            </p>
            <span className="card-product__price">$140</span>

            <p className="card-product__delivery">
              Entrega para el jueves, 25 de sept
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Products;
