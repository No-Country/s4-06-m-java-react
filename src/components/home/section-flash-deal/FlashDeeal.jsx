import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useProductsContext } from "../../../context/products_context";
import { Card } from "../../sharedComponents/card/Card";
import { CardSimple } from "../../sharedComponents/card/CardSimple";

import "./FlashDeeal.css";

export const FlashDeeal = () => {
  const { featured_products: featured } = useProductsContext();

  const [timeHours, setHours] = useState("");
  const [timeMinutes, setMinutes] = useState("00");
  const [timeSeconds, setSeconds] = useState("00");

  let interval = useRef();

  const startTime = () => {
    const countdownDate = new Date("Dec 30 , 2022 04:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTime();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <div className="FlashDeeal">
      <div className="FlashDeeal__wrapper-deal">
        <p className="FlashDeeal__paragraph">
          Nuestra nueva colección exclusiva solo estara disponible por dos dias.
          no te lo pierdas
        </p>

        <div className="timer">
          <div className="timer-box">
            <span className="timer-box__number">{timeHours}</span>
            <span className="timer-box__days">Horas</span>
          </div>
          <div className="timer-box">
            <span className="timer-box__number">{timeMinutes}</span>
            <span className="timer-box__days">Minutos</span>
          </div>
          <div className="timer-box">
            <span className="timer-box__number">{timeSeconds}</span>
            <span className="timer-box__days">Segundos</span>
          </div>
        </div>
      </div>
      <div className="FlashDeeal__cardSimpleGrid">
        {featured.slice(0, 4).map((item) => {
          return (
            <Card
              key={item.id}
              id={item.id}
              porcent="-50%"
              image={item.imgList[0].fileUrl}
              text="Tommy Hilfiger padded jackets - black with..."
              price="55"
              stars={item.stars}
            />
          );
        })}
      </div>
    </div>
  );
};
