import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { GetallUsers } from "../../utils/constants/constants";

export const UserControl = () => {
  const [allUsers, setallUsers] = useState([]);
  const getAllUsers = async (url) => {
    const response = await axios.get(url);
    const data = response.data;

    const dataUsersFilter = data.filter((el) => el.id !== 1);
    console.log(dataUsersFilter);
    setallUsers(data);
  };

  useEffect(() => {
    getAllUsers([GetallUsers]);
  }, []);

  return (
    <Wrapper>
      {allUsers.map((card) => {
        return (
          <Link key={card.id} to={`/singleUser/${card.id}`}>
            <div className="card">
              <div className="wrapper-image">
                <img src={card.image.fileUrl} />
              </div>
              <div className="content">
                <p className="content__paragraph">
                  <span>ID: </span>
                  {card.id}
                </p>
                <p className="content__paragraph">
                  <span>Email :</span> {card.email}
                </p>

                <p className="content__paragraph">
                  <span>Fullname :</span> {card.fullName}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(1fr);

  margin: 0 auto;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  gap: 1rem;
  .card {
    display: flex;
    margin: 0 auto;
    background-color: #09476b;
    color: white;
    padding: 1rem;
    align-items: center;
    width: 100%;
    flex-direction: column;
  }

  @media screen and (min-width: 768px) {
    .card {
      flex-direction: row;
    }
  }

  .wrapper-image {
    width: 100px;
    height: 100px;

    border-radius: 100px;

    img {
      width: 100%;
      height: 100px;
      object-fit: cover;
      border-radius: 100px;
    }
  }

  .content {
    margin-left: 2rem;
    margin: 0 auto;
    .content__paragraph {
      font-size: 1.6rem;
      font-weight: bold;

      span {
        color: #0acf84;
      }
    }
  }
`;
