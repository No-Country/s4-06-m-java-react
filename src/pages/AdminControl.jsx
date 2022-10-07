import React from "react";
import styled from "styled-components";

const AdminControl = () => {
  const add = {
    shortDetails: "detalle2",
    details: "detalle2",
    title: "titulo",
    brand: "Adidas",
    view: "4545",
    stock: true,
    price: "200",
    size: "S",
    color: "RED",
    categoryId: 5,
  };
  return (
    <Wrapper>
      <h1 className="title">ADMIN CONTROL</h1>

      <div className="control-buttons-admin">
        <button className="control-buttons-admin__btn">EDITAR PRODUCTO</button>
        <button className="control-buttons-admin__btn">EDITAR OTRA COSA</button>
        <button className="control-buttons-admin__btn">EDITAR OTRA COSA</button>
        <button className="control-buttons-admin__btn">EDITAR OTRA COSA</button>
      </div>

      <div className="wrapper-content">
        <label>IMAGEN</label>
        <input type="file" className="file input" />
        <label>precio</label>
        <input type="texto" className="input" />
        <label>titulo</label>
        <input type="texto" className="input" />
        <label>Descripcion</label>
        <input type="texto" className="input" />
        <label>Descripcion</label>
        <input type="texto" className="input" />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .file {
    margin-bottom: 3rem;
  }

  .input {
    display: block;
  }
  .control-buttons-admin {
    display: flex;
    width: 50%;
    margin: 0 auto;
    justify-content: space-around;
    margin-bottom: 3rem;
    flex-direction: column;
  }

  @media screen and (min-width: 1024px) {
    .control-buttons-admin {
      flex-direction: row;
    }
  }

  .control-buttons-admin__btn {
    background-color: black;
    color: white;
    padding: 1rem;
    margin-top: 2rem;
  }
  .title {
    text-align: center;
    font-size: 3rem;
  }
  .wrapper-content {
    width: 100%;
    margin: 0 auto;
  }
  .input {
    width: 100%;
  }

  @media screen and (min-width: 1024px) {
    .wrapper-content {
      width: 50%;
    }
  }
`;

export default AdminControl;
