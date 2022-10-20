import axios from "axios";
import React, { useState } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { UserControl } from "../components/products/UserControl";
import { useProductsContext } from "../context/products_context";
import { productAddUrl } from "../utils/constants/constants";
import { productAdd } from "../utils/helpers/helpers";

const AdminControl = () => {
  const { token, addProductAdmin } = useProductsContext();
  const [isActiveProductsControler, setisActiveProductsControler] =
    useState(true);
  const [isAlluserActive, setisAlluserActive] = useState(false);
  const [image, setimage] = useState({});

  const handlerProductActive = () => {
    setisActiveProductsControler(true);
    setisAlluserActive(false);
  };
  const handlerUserActive = () => {
    setisAlluserActive(true);
    setisActiveProductsControler(false);
  };

  const handlerUpload = (e) => {
    setimage(e.target.files[0]);
  };

  const inputPrice = useRef();
  const shortDetailsInput = useRef();
  const detailsinput = useRef();
  const titleInput = useRef();
  const brandInput = useRef();
  const selectSizeInput = useRef();
  const categoryInput = useRef();

  /*submit*/

  const handleSubmitAdd = (e) => {
    e.preventDefault();

    // const title = titleInput.current.value;
    // const price = inputPrice.current.value;
    // const shortDetails = shortDetailsInput.current.value;
    // const details = detailsinput.current.value;
    // const brand = brandInput.current.value;
    // const selectsize = selectSizeInput.current.value;
    // const category = categoryInput.current.value;

    const product = {
      shortDetails: "Conjunto deportivo",
      details: "Correcto",
      title: "cdfdf",
      brand: "Fila",
      view: 500,
      stock: true,
      star: 3.5,
      price: 4900,
      sizes: ["S", "M", "L", "XS"],
      colors: ["#ff0000", "#0000ff", "#00ff00"],
      categoryId: 1,
    };

    const productJson = JSON.stringify(product);

    // const imagestring = new Blob([JSON.stringify(image)], {
    //   type: "application/json",
    // });

    const formData = new FormData();
    formData.append("postimages", image);
    formData.append("product", productJson);

    console.log(formData.get("postimages"));
    console.log(formData.get("product"));

    addProductAdmin(productAddUrl, formData);
  };

  const ProductsControler = (
    <form className="wrapper-content">
      <label>IMAGEN</label>
      <input
        type="file"
        className="file input"
        name="image"
        id="image"
        onChange={handlerUpload}
      />
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
      <label>categorias</label>
      <select name="category" id="category" ref={categoryInput}>
        <option value="1">Ninos</option>
        <option value="2">hombre</option>
        <option value="3">etc</option>
        <option value="4">etc</option>
        <option value="5">etc</option>
        <option value="6">etc</option>
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
