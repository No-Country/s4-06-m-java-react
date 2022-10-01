import React from "react";
import { cardItems } from "../../utils/constants/constants";
import "./products.css";
const Products = () => {
  return (
    <div className="wrapper-products">
      {cardItems.map((card) => (
        <div className="card-product" key={card.id}>
          <div className="card-product__image">
            <img
              src={card.img}
              className="card-product__image__img"
              alt={card.price}
            />
          </div>

          <p className="card-product__paragraph">{card.text}</p>
          <span className="card-product__price">$140</span>

          <p className="card-product__delivery">
            Entrega para el jueves, 25 de sept
          </p>
        </div>
      ))}
    </div>
  );
};

export default Products;
