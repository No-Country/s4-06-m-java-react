import EcoSport from "../../../assets/images/nav/Ecosport.svg";
import cart from "../../../assets/images/nav/cart.svg";
import { Link as LinkDom } from "react-router-dom";
import { Link } from "react-scroll";
import "./Nav.css";

export const Nav = (props) => {
  return (
    <div className="nav">
      <div className="nav__ecoSport-wrapper">
        <LinkDom to="/">
          <img src={EcoSport} alt="ecoSport" />
        </LinkDom>
        <div className="cart">
          <LinkDom to="/">
            <p className="cart__name">Cuenta</p>
          </LinkDom>
          <LinkDom to="/login">
            <p className="cart__name">login / register</p>
          </LinkDom>
          <img className="cart__image" src={cart} alt="shoppingCart" />
        </div>
      </div>
      {props.inputSearch}

      <ul className="nav__list">
        <li className="nav__item nav__item">
          <LinkDom to="/">Home</LinkDom>
        </li>
        <li className="nav__item nav__item">
          <Link
            to="nuevas-ofertas"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Nuevas Ofertas
          </Link>
        </li>
        <li className="nav__item nav__item">
          <LinkDom to="/">tienda</LinkDom>
        </li>
        <li className="nav__item nav__item">
          <LinkDom to="/">pedidos</LinkDom>
        </li>
      </ul>
    </div>
  );
};
