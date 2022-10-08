import React, { useState } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { UserControl } from "../components/products/UserControl";

const AdminControl = () => {
  const [file, setfile] = useState(null);

  const [isActiveProductsControler, setisActiveProductsControler] =
    useState(true);

  const [isAlluserActive, setisAlluserActive] = useState(false);

  const handlerProductActive = () => {
    setisActiveProductsControler(true);
    setisAlluserActive(false);
  };
  const handlerUserActive = () => {
    setisAlluserActive(true);
    setisActiveProductsControler(false);
  };

  const handlerUpload = (e) => {
    setfile(e.target.files);
  };

  const inputPrice = useRef();
  const shortDetailsInput = useRef();
  const detailsinput = useRef();
  const titleInput = useRef();
  const brandInput = useRef();
  const selectSizeInput = useRef();

  const handleSubmitAdd = (e) => {
    e.preventDefault();

    const title = titleInput.current.value;
    const price = inputPrice.current.value;
    const shortDetails = shortDetailsInput.current.value;
    const details = detailsinput.current.value;
    const brand = brandInput.current.value;
    const selectsize = selectSizeInput.current.value;

    const content = {
      price,
      shortDetails,
      details,
      title,
      brand,
      size: selectsize,
    };

    console.log(content);

    console.log(file[0]);

    const f = new FormData();
    f.append("postimages", file[0]);
    f.append("product", content);

    console.log(f);
  };

  const ProductsControler = (
    <form className="wrapper-content">
      <label>IMAGEN</label>
      <input type="file" className="file input" onChange={handlerUpload} />
      <label>titulo</label>
      <input type="texto" className="input" ref={titleInput} />
      <label>precio</label>
      <input type="number" className="input" ref={inputPrice} />
      <label>details</label>
      <input type="texto" className="input" ref={detailsinput} />
      <label>brand</label>
      <input type="texto" className="input" ref={brandInput} />
      <label>shortDetails</label>
      <input type="texto" className="input" ref={shortDetailsInput} />
      <label>size</label>
      <select name="size" id="size" ref={selectSizeInput}>
        <option value="S">S</option>
        <option value="X">X</option>
        <option value="XL">XL</option>
        <option value="XXL">XXL</option>
      </select>

      <button
        className="control-buttons-admin__btn--blue"
        onClick={handleSubmitAdd}
      >
        AGREGAR PRODUCTO
      </button>
    </form>
  );

  const userControl = <UserControl />;

  return (
    <Wrapper>
      <h1 className="title">ADMIN CONTROL</h1>
      <div className="control-buttons-admin">
        <Link to={"/"}>
          <button className="control-buttons-admin__btn">BACK</button>
        </Link>
        <button
          className="control-buttons-admin__btn"
          onClick={handlerProductActive}
        >
          AGREGAR PRODUCTO
        </button>
        <button
          className="control-buttons-admin__btn"
          onClick={handlerUserActive}
        >
          ALL USERS
        </button>
      </div>

      {isActiveProductsControler && ProductsControler}
      {isAlluserActive && userControl}
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

  .control-buttons-admin__btn--blue {
    background-color: #216407;
    color: white;
    padding: 1rem;
    margin-top: 2rem;
    border: none;
    margin: 0 auto;
    display: block;
    margin-top: 3rem;
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
