import { Link } from "react-router-dom";
import { useProductsContext } from "../../../context/products_context";
import Stars from "../../../stylesComponents/Stars";

import "./card.css";

export const Card = (props) => {
  const { removeProduct, isLoggedIn, userData } = useProductsContext();

  return (
    <>
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
        {isLoggedIn && userData?.role === "ROLE_ADMIN" && (
          <button
            className="Eliminar-Producto"
            onClick={() => removeProduct(props.id)}
          >
            elimnar producto
          </button>
        )}
        <div className="card__content">
          <p className="card__content__paragraph">{props.text}</p>
          <p className="card__content__price">${props.price}</p>
          <p className="card__content__paragraph">
            Entrega para el jueves, 25 de sept
          </p>
        </div>
        <Link className="card" to={`/products/${props.id}`}>
          <button className="agregar-Carrito">Agregar al carrito</button>
        </Link>
      </article>
    </>
  );
};
