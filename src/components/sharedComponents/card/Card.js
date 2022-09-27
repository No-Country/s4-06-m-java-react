import favoriteImg from "../../../assets/images/card/favoriteImg.svg";
import Tshirt from "../../../assets/images/card/t-shirt.png";
import star from "../../../assets/images/card/star.svg";
import "./card.css";

export const Card = () => {
  return (
    <article className="card">
      <div className="card__wrapper-image">
        <span className="card__discount">-50%</span>
        <img src={Tshirt} alt="imagenCard" className="card__backgroundImg" />
        <img
          src={favoriteImg}
          alt="favoriteImg"
          className="card__svgFavorite"
        />
      </div>
      <div className="card__content">
        <p className="card__content__paragraph">
          Tommy Hilfiger padded jackets - black with...
        </p>
        <div className="star-srapper">
          <img src={star} className="star-srapper__star" />
          <img src={star} className="star-srapper__star" />
          <img src={star} className="star-srapper__star" />
          <img src={star} className="star-srapper__star" />
          <img src={star} className="star-srapper__star" />
        </div>
        <span className="card__content__price">£55</span>
        <span className="card__content__priceDiscount">£110</span>
      </div>
    </article>
  );
};
