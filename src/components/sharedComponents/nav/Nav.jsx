import EcoSport from "../../../assets/images/nav/Ecosport.svg";
import cart from "../../../assets/images/nav/cart.svg";
import searchIcon from "../../../assets/images/nav/searchIcon.svg";

import "./Nav.css";

export const Nav = () => {
  return (
    <div className="nav">
      <div className="nav__ecoSport-wrapper">
        <img src={EcoSport} alt="ecoSport" />
        <div className="cart">
          <p className="cart__name">Cuenta</p>
          <img className="cart__image" src={cart} alt="shoppingCart" />
        </div>
      </div>

      <div className="input-wrapper">
        <div className="input-wrapper__icon">
          <img src={searchIcon} alt="searchIcon" />
        </div>
        <input
          className="input-wrapper__input"
          type="text"
          placeholder="Buscar"
        />
      </div>

      <ul className="nav__list">
        <li className="nav__item ">Home</li>
        <li className="nav__item nav__item--weigth">Ofertas</li>
        <li className="nav__item nav__item--weigth">Tienda</li>
        <li className="nav__item nav__item--weigth">Pedidos</li>
      </ul>
    </div>
  );
};
