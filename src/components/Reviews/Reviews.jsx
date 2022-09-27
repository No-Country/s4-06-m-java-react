import React from "react";
import "./Reviews.css";
import { Stars } from "../stars/Stars";
import Like from "../../assets/reviews/Like.svg";

export const Reviews = () => {
  return (
    <div>
      <div class="review_container">
        <div class="review_container--sub">
          <div class="review_container--subUp">
            <h1 class="review_container--title">
              Reseñas <Stars />
            </h1>
            <h1 class="review_container--viewAll">
              <div class="review_container--viewAndName">
                <span className="viewAll">
                  View All <span className="arrow">ᐳ</span>
                </span>
                <p className="review_container--name"> Alex Gullen </p>
              </div>
            </h1>
          </div>
          <div class="review_container--subHalf">
            Las camisas que me llegaron estan bien, ninguna rota ni con hilos
            colgados, el color fue correcto y hasta ahora no se han despintado
            ni ndada por el estilo.
          </div>
          <div className="review_container--subDown">
            <div className="review-wrapperContent">
              <span className="review-wrapperContent__comments">
                535 Comentarios
              </span>
              <span className="review-wrapperContent__date">Jan 21, 2021</span>
            </div>
            <div class="review-wrapperIcon">
              <span className="review-wrapperIcon__title">Helpful</span>
              <img
                src={Like}
                className="review-wrapperIcon__icon"
                alt="iconLike"
              />
            </div>

            {/* 535 Comentarios
              <span class="review_container--date">Jan 21, 2021</span> */}
          </div>
        </div>
      </div>
    </div>
  );
};
