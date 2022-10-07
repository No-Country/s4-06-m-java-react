import React from "react";
import { Link } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import avatarofficer from "../assets/images/auth/security.svg";
import avatar from "../assets/images/auth/avatar.svg";
import styled from "styled-components";

const UserAccountScreen = () => {
  const { userData } = useProductsContext();

  return (
    <Wrapper className="UserAccountScreen">
      <div className="header">
        <div className="imageProfile">
          <img src={avatar} className="imageProfile__img" />
          {/* <img src={avatarofficer} className="imageProfile__img" /> */}
        </div>
      </div>
      <div className="wrapper-content">
        <Link to="/">
          <button>back to Home</button>
        </Link>
        <h1>Nombre: {userData.fullName}</h1>
        <p>Role:{userData.role}</p>
        <p>Id: {userData.id}</p>
        <p>Email: {userData.email}</p>

        {/* <input type="password" placeholder="passwordReset" /> */}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;

  .header {
    height: 10vh;
    background-color: #052734;
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
  }

  .imageProfile {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin-top: 1rem;
  }
  .imageProfile__img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }
  .wrapper-content {
    background-color: white;
    width: 70%;
    margin: 0 auto;
    margin-top: 3rem;
  }
`;

export default UserAccountScreen;
