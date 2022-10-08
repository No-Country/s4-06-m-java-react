import axios from "axios";
import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GetUserId } from "../utils/constants/constants";
import Swal from "sweetalert2";

export const SingleUserScreen = () => {
  const [user, setuser] = useState([]);

  const { id } = useParams();

  const history = useNavigate();

  const getSingleUser = async (url) => {
    try {
      const response = await axios.get(url);
      const data = await response.data;
      setuser([data]);
    } catch (error) {
      console.log(error);
    }
  };

  const HandlerUserRemove = async (id) => {
    try {
      const response = await axios.delete(`${GetUserId}${id}`);
      const data = await response.data;

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "USER REMOVE",
        showConfirmButton: false,
        timer: 1500,
      });

      history("/admin");
    } catch (error) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Error",
        text: error,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  useEffect(() => {
    getSingleUser(`${GetUserId}${id}`);
  }, [id]);

  const handlerbtnBack = () => {
    history(-1);
  };

  return (
    <Wrapper>
      <div className="UserScren">
        <div className="header">
          <h1 className="header__user">USER</h1>
          <button className="button-back" onClick={handlerbtnBack}>
            BACK
          </button>
        </div>

        {user.map((el) => {
          return (
            <div className="card" key={el.id}>
              <div className="wrapper-image">
                <img src={el.image.fileUrl} />
              </div>

              <div className="content">
                <p className="content__paragraph">
                  <span className="content__span">ID : </span>
                  {el.id}
                </p>
                <p className="content__paragraph">
                  <span className="content__span">NAME : </span>
                  {el.fullName}
                  mosquera
                </p>
                <p className="content__paragraph">
                  <span className="content__span">EMAIL : </span>
                  {el.email}
                  mosquera
                </p>

                <button
                  className="btn-user"
                  onClick={() => HandlerUserRemove(el.id)}
                >
                  REMOVE USER
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .button-back {
    background-color: black;
    color: white;
    width: 140px;
    padding: 1rem;
    margin: 0 auto;
    display: block;
    border-radius: 14px;
  }
  .btn-user {
    background-color: red;
    border: none;
    color: white;
    padding: 1rem;
    border-radius: 10px;
    margin: 0 auto;
    display: block;
    margin-top: 3rem;
  }
  .content__paragraph {
    font-size: 16px;
    text-align: center;
  }
  .UserScren {
    background-color: #c7e2e992;
    height: 100vh;
  }

  .content__span {
    color: #1cd14f;
    font-weight: bold;
  }
  .header {
    .header__user {
      background-color: #000000;
      color: white;
      margin: 0;
      height: 10vh;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .card {
    background-color: #000000f6;
    color: white;
    width: 90%;
    margin: 0 auto;
    margin-top: 3rem;
    max-width: 839px;
  }

  .wrapper-image {
    width: 100px;
    height: 100px;
    background-color: red;
    margin: 0 auto;
    border-radius: 50%;

    img {
      width: 100%;
      object-fit: cover;
      height: 100px;
      border-radius: 50%;
    }
  }
`;
