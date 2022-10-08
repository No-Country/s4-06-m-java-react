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
      <ul>
        {user.map((el) => {
          return (
            <div key={el.id}>
              <li>email: {el.email}</li>
              <button onClick={() => HandlerUserRemove(el.id)}>Remove</button>
            </div>
          );
        })}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
