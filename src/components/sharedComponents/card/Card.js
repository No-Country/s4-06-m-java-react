import { Link } from "react-router-dom";
import favoriteImg from "../../../assets/images/card/favoriteImg.svg";
import star from "../../../assets/images/card/star.svg";
import { DiscountComponent } from "../../../stylesComponents/DiscountComponent";
import Stars from "../../../stylesComponents/Stars";

import "./card.css";

export const Card = (props) => {
  return (
    <Link className="card" to={`/products/${props.id}`}>
      <article>
        <div className="card__wrapper-image">
          <img
            src={props.image}
            alt="imagenCard"
            className="card__backgroundImg"
          />
          {props.Heart}
          {props.Discount}
          <Stars stars={props.stars} />
        </div>
        <div className="card__content">
          <p className="card__content__paragraph">{props.text}</p>
          <p className="card__content__paragraph">${props.price}</p>
          <p className="card__content__paragraph">
            Entrega para el jueves, 25 de sept
          </p>
        </div>
      </article>
    </Link>
  );
};
