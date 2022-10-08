import axios from "axios";
import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { GetUserId } from "../utils/constants/constants";

export const SingleUserScreen = () => {
  const [user, setuser] = useState([]);
  const { id } = useParams();

  const getSingleUser = async (url) => {
    const response = await axios.get(url);
    const data = await response.data;
    setuser([data]);
  };

  const HandlerUserRemove = async (id) => {
    const response = await axios.delete(`${GetUserId}${id}`);
    const data = await response.data;
  };

  useEffect(() => {
    getSingleUser(`${GetUserId}${id}`);
  }, [id]);
  return (
    <Wrapper>
      <div className="UserScren">
        <div className="header">
          <h1 className="header__user">USER</h1>
        </div>
        <div className="card">
          <div className="wrapper-image">
            <img />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

// {
//   user.map((el) => {
//     return (
//       <div key={el.id}>
//         <li>email: {el.email}</li>
//         <button onClick={() => HandlerUserRemove(el.id)}>Remove</button>
//       </div>
//     );
//   });
// }

const Wrapper = styled.div`
  .UserScren {
    background-color: red;
    height: 100vh;
  }

  .header {
    .header__user {
      background-color: black;
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
    background-color: black;
    color: white;
    width: 100%;
    height: 300px;
    margin-top: 3rem;
  }

  .wrapper-image {
    width: 100px;
    height: 100px;
    background-color: red;
    margin: 0 auto;
    border-radius: 50%;
  }
`;
