import React from "react";
import { Link } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import avatarofficer from "../assets/images/auth/security.svg";
import avatar from "../assets/images/auth/avatar.svg";
import shield from "../assets/images/auth/security-shield.svg";
import styled from "styled-components";

const UserAccountScreen = () => {
  const { userData } = useProductsContext();

  return (
    <Wrapper className="UserAccountScreen">
      <div className="header">
        <div className="imageProfile">
          {userData?.role === "ROLE_USER" ? (
            <img src={avatar} className="imageProfile__img" />
          ) : (
            <img src={avatarofficer} className="imageProfile__img" />
          )}
        </div>
      </div>
      <div className="wrapper-content">
        <Link to="/">
          <button className="button-profile">back to Home</button>
        </Link>

        <div className="content-description">
          <h1 className="profile-desc">
            <span>Nombre: </span> {userData.fullName}
          </h1>
          <p className="profile-desc">
            <span>Role: </span> {userData.role}
          </p>
          <p className="profile-desc">
            <span>ID:</span> {userData.id}
          </p>
          <p className="profile-desc">
            <span>Email: </span> {userData.email}
          </p>
        </div>

        {/* <input type="password" placeholder="passwordReset" /> */}

        <img src={shield} alt="shield" className="shieldicon" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .shieldicon {
    width: 150px;
    margin: 0 auto;
    margin-top: 3rem;
  }

  @media screen and (min-width: 1024px) {
    .shieldicon {
      width: 400px;
    }
  }
  .content-description {
    width: 100%;
    margin-top: 4rem;
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
  }
  .profile-desc {
    font-size: 1.7rem;
    font-size: medium;
    margin: 1rem;
    color: #010101;
    span {
      color: #0a5677;
      font-weight: bolder;
    }
  }
  .button-profile {
    width: 200px;
    height: 52px;
    color: white;
    margin: 0 auto;
    display: block;

    background: linear-gradient(
      90.34deg,
      #184f63 3.48%,
      #1f5b73 7%,
      #19495b 92.96%,
      #052734 100%
    );
    border: 2px solid #072b39;
    border-radius: 4px;
    padding: 15px 8px;
  }
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
    margin-top: 10rem;
  }

  @media screen and (min-width: 1024px) {
    .content-description {
      flex-direction: row;
    }
  }
`;

export default UserAccountScreen;
