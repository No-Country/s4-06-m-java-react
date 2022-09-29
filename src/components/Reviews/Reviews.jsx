import React from "react";
import "./Reviews.css";
import Like from "../../assets/reviews/Like.svg";

export const Reviews = (props) => {
  return (
    <div class="review_container">
      <div class="review_container--sub">
        <div class="review_container--subUp">
          <h1 class="review_container--title"> Reseñas {props.stars}</h1>
          <div className="review_container--viewAllandName">
            <div class="review_container--viewAll">
              <div className="viewAll">
                View All <span className="arrow">ᐳ</span>
              </div>
            </div>
            <div className="review_container--name">
              <p className="review_container--name-name"> {props.name} </p>
            </div>
          </div>
        </div>
        <div class="review_container--subHalf">
          {/* Las camisas que me llegaron estan bien, ninguna rota ni con hilos
          colgados, el color fue correcto y hasta ahora no se han despintado ni
          ndada por el estilo. */}
          {props.text}
        </div>
        <div className="review_container--subDown">
          <div className="review-wrapperContent">
            <span className="review-wrapperContent__comments">
              {props.comments}
            </span>
            <span className="review-wrapperContent__date">{props.date}</span>
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
  );
};
