import { CardSimple } from "../../sharedComponents/card/CardSimple";

import "./FlashDeeal.css";

export const FlashDeeal = () => {
  return (
    <div className="FlashDeeal">
      <div className="FlashDeeal__wrapper-deal">
        <p className="FlashDeeal__paragraph">
          Nuestra nueva colección exclusiva solo estara disponible por dos dias.
          no te lo pierdas
        </p>

        <div className="timer">
          <div className="timer-box">
            <span className="timer-box__number">08</span>
            <span className="timer-box__days">Days</span>
          </div>
          <div className="timer-box">
            <span className="timer-box__number">08</span>
            <span className="timer-box__days">Days</span>
          </div>
          <div className="timer-box">
            <span className="timer-box__number">08</span>
            <span className="timer-box__days">Days</span>
          </div>
        </div>

        <button className="button timer__button button--Darkblue">
          SHOP NOW
        </button>
      </div>
      <div className="FlashDeeal__cardSimpleGrid">
        <CardSimple />
        <CardSimple />
        <CardSimple />
        <CardSimple />
      </div>
    </div>
  );
};
