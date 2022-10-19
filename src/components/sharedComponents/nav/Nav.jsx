import EcoSport from "../../../assets/images/nav/Eco-sport.svg";
import cart from "../../../assets/images/nav/cart01.png";
import { Link as LinkDom } from "react-router-dom";
import { Link } from "react-scroll";
import "./Nav.css";
import { useProductsContext } from "../../../context/products_context";
import { useCartContext } from "../../../context/cart_context";

export const Nav = (props) => {
  const { isLoggedIn, Handlerlogout, userData } = useProductsContext();

  const { total_items } = useCartContext();

  return (
    <div className="nav">
      <div className="nav__ecoSport-wrapper">
        <LinkDom to="/">
          <img src={EcoSport} alt="EcoSport" />
        </LinkDom>      
        <div className="div-nav__list">
        <ul className="nav__list">
        <li className="nav__item ">
          <LinkDom to="/">Home</LinkDom>
        </li>
        <li className="nav__item">
          <Link
            to="nuevas-ofertas"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Ofertas
          </Link>
        </li>
        <li className="nav__item nav__linkDom">
          <LinkDom to="/products"
          
          >Tienda</LinkDom>       
          
        </li>   
      </ul>
      </div>
        <div className="cart">
          {isLoggedIn && (
            <LinkDom to="/profileUser">
              <p className="cart__name">TU PERFIL</p>
            </LinkDom>
          )}

          {isLoggedIn && (
            <p className="LOGOUT" onClick={Handlerlogout}>
              LOGOUT
            </p>
          )}
          {userData?.role === "ROLE_ADMIN" && isLoggedIn && (
            <LinkDom to="/admin">
              <p className="ADMINCONTROL">ADMIN CONTROL</p>
            </LinkDom>
          )}

          {!isLoggedIn && (
            <LinkDom to="/login">
              <p className="cart__name">register</p>
            </LinkDom>
          )}
          <LinkDom to="/cart">
            <img className="cart__image" src={cart} alt="shoppingCart" />
          </LinkDom>
          <span className="number-items">{total_items}</span>
        </div>
      </div>
      {props.inputSearch}

      
    </div>
  );
};
