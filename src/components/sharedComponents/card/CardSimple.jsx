import imagePromocion from "../../../assets/images/cardSimple/promoImage.png";
import "./cardSimple.css";
export const CardSimple = () => {
  return (
    <div className="CardSimple">
      <img
        className="CardSimple__image"
        src={imagePromocion}
        alt="cardSimple"
      />

      <div className="wrapper-box-description-simple">
        <p className="wrapper-box-description-simple__paragraph">
          Maxi Dress in White
        </p>
        <span className="wrapper-box-description-simple__price">2300</span>
      </div>
    </div>
  );
};
