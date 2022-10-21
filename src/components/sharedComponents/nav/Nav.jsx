import EcoSport from "../../../assets/images/nav/Eco-sport.svg";

import cart from "../../../assets/images/nav/cart.svg";
import styled from "styled-components";

import { Link as LinkDom } from "react-router-dom";
import { Link } from "react-scroll";
import { useProductsContext } from "../../../context/products_context";
import { useCartContext } from "../../../context/cart_context";

import hamburger from "../../../assets/images/nav/hamburger-menu.svg";
import closeIcon from "../../../assets/images/nav/close.svg";

export const Nav = (props) => {
  const { isLoggedIn, Handlerlogout, userData, isNavOpen, setisNavOpen } =
    useProductsContext();
  const { total_items } = useCartContext();

  const handlerOpenNav = () => {
    setisNavOpen(true);
  };
  const handlerCloseNav = () => {
    setisNavOpen(false);
  };

  return (
    <Wrapper>
      <div className="nav_content">
        <LinkDom to="/">
          <img src={EcoSport} alt="ecoSport" className="nav_imagen" />
        </LinkDom>
        <img
          src={hamburger}
          alt="hamburger-menu"
          className="nav_hamburger"
          onClick={handlerOpenNav}
        />

        <ul className={`nav__list ${isNavOpen && "active"}`}>
          <img
            src={closeIcon}
            alt="icon-close"
            className="icon-close"
            onClick={handlerCloseNav}
          />
          <LinkDom to="/" onClick={handlerCloseNav}>
            <li className="item">Home</li>
          </LinkDom>

          <Link
            to="nuevas-ofertas"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={handlerCloseNav}
          >
            <li className="item">Ofertas</li>
          </Link>
          <LinkDom to="/products" onClick={handlerCloseNav}>
            <li className="item">Tienda</li>
          </LinkDom>
          {isLoggedIn && (
            <LinkDom to="/profileUser" onClick={handlerCloseNav}>
              <li className="item">Perfil</li>
            </LinkDom>
          )}
          {userData?.role === "ROLE_ADMIN" && isLoggedIn && (
            <LinkDom to="/admin" onClick={handlerCloseNav}>
              <li className="item">Panel</li>
            </LinkDom>
          )}

          {isLoggedIn && (
            <li className="item" onClick={Handlerlogout}>
              Logout
            </li>
          )}

          {!isLoggedIn && (
            <LinkDom to="/login" onClick={handlerCloseNav}>
              <li className="item">Register</li>
            </LinkDom>
          )}
        </ul>

        <div className="cart">
          <LinkDom to="/cart">
            <img className="cart__image" src={cart} alt="shoppingCart" />
          </LinkDom>
          <span className="number-items">{total_items}</span>
        </div>
      </div>
      {props.inputSearch}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  //nav
  position: fixed;
  width: 100%;
  background-color: #ffffffef;
  z-index: 1000;
  top: 0;
  max-width: 1440px;
  padding: 0 2rem;
  .nav_content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 7vh;
  }
  .nav__list {
    position: fixed;
    z-index: 1000;
    height: 59vh;
    width: 70%;
    top: 7vh;
    left: -100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 50%;
    background-color: white;
    font-family: "Aclonica";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    border: 1px solid black;
    transition: left 1.5s ease;
    a .item {
      color: #052734;
    }
  }
  .nav__list.active {
    left: 0;
  }

  .nav_imagen {
    width: 100px;
  }

  .nav_hamburger {
    width: 45px;
    height: 45px;
    color: #052734;
    cursor: pointer;
  }

  // carrito

  .cart {
    position: fixed;
    top: 74px;
    right: 30px;
    z-index: 1000;

    .cart__image {
      width: 30px;
      height: 30px;
    }

    .number-items {
      position: absolute;
      top: -16px;
      right: -12px;
      background-color: #052734;
      padding: 1rem;
      border-radius: 50%;
      width: 10px;
      height: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
    }
  }

  .icon-close {
    width: 30px;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }

  @media screen and (min-width: 1024px) {
    .nav_imagen {
      width: 150px;
    }
    .nav__list {
      position: unset;
      height: unset;
      width: auto;
      display: flex;
      flex-direction: row;
      justify-content: unset;
      align-items: unset;
      height: unset;
      border: unset;
      .item {
        color: #052734;
        padding: 0 2rem;
      }
      .item:hover {
        color: #0f6e94;
      }
    }

    .icon-close {
      display: none;
    }

    .nav_hamburger {
      display: none;
    }
  }
`;
