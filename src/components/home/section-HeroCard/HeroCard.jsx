import { Link } from "react-router-dom";
import GimImage from "../../../assets/images/homeImages/GimImage.png";

import "./HeroCard.css";

export const HeroCard = () => {
  return (
    <div className="HeroCard">
      <img className="HeroCard__image" src={GimImage} alt="GimImage" />

      <div className="HeroCard__wrapperContent">
        <h3 className="HeroCard__paragraph__title">
          Deporte conciente <br /> Vida Saludable
        </h3>

        <p className="HeroCard__paragraph">
          En eco-sportswear vistes de acuerdo a tus valores. Nuestras prendas
          estan fabricadas con algodon certificados por la ONGT. Somos tus
          aliados, con nuestra marca no solo vistes, tambien cuidas el ambiente
        </p>
        <Link to="/products">
          <button className="button button--blue" type="button">
            Comprar ahora
          </button>
        </Link>
      </div>
    </div>
  );
};
