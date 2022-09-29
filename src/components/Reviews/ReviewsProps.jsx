import React from "react";
import { Stars } from "../stars/Stars";
import { Reviews } from "./Reviews";

export const ReviewsProps = () => {
  return (
    <div>
      <Reviews
        name="Jorge"
        text="Las camisas que me llegaron estan bien, ninguna rota ni con hilos
          colgados, el color fue correcto y hasta ahora no se han despintado ni
          ndada por el estilo."
        comments="535 Comentarios"
        date="Jan 21, 2021"
        stars=<Stars />
      />
      <Reviews
        name="Carmen"
        text="Las playeras son entallado regular, no las senti ni mas chicas ni mas grandes de lo que indica la etiqueta
        no se transparenta puestas (si las ves contra luz un poco), y la calidad de las costuras se ve bien
        no estan nada mal."
        comments="112 Comentarios"
        date="Mar 9, 2021"
        stars=<Stars />
      />
    </div>
  );
};
