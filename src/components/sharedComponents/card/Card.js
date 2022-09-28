import favoriteImg from "../../../assets/images/card/favoriteImg.svg";
import star from "../../../assets/images/card/star.svg";
import "./card.css";

export const Card = (props) => {
  return (
    <article className="card">
      <div className="card__wrapper-image">
        <span className="card__discount">{props.porcent}</span>
        <img
          src={props.image}
          alt="imagenCard"
          className="card__backgroundImg"
        />
        <img
          src={favoriteImg}
          alt="favoriteImg"
          className="card__svgFavorite"
        />
      </div>
      <div className="card__content">
        <p className="card__content__paragraph">{props.text}</p>
        <div className="star-srapper">
          <img src={star} className="star-srapper__star" alt="star" />
          <img src={star} className="star-srapper__star" alt="star" />
          <img src={star} className="star-srapper__star" alt="star" />
          <img src={star} className="star-srapper__star" alt="star" />
          <img src={star} className="star-srapper__star" alt="star" />
        </div>
        <span className="card__content__price">£${props.price}</span>
        <span className="card__content__priceDiscount">£${props.discount}</span>
      </div>
    </article>
  );
};
