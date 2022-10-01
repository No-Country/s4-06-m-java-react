import EcoSport from "../../../assets/images/nav/Ecosport.svg";
import cart from "../../../assets/images/nav/cart.svg";
import "./Nav.css";

export const Nav = (props) => {
  return (
    <div className="nav">
      <div className="nav__ecoSport-wrapper">
        <img src={EcoSport} alt="ecoSport" />
        <div className="cart">
          <p className="cart__name">Cuenta</p>
          <img className="cart__image" src={cart} alt="shoppingCart" />
        </div>
      </div>

      {props.inputSearch}

      <ul className="nav__list">
        <li className="nav__item ">Home</li>
        <li className="nav__item nav__item--weigth">Ofertas</li>
        <li className="nav__item nav__item--weigth">Tienda</li>
        <li className="nav__item nav__item--weigth">Pedidos</li>
      </ul>
    </div>
  );
};
