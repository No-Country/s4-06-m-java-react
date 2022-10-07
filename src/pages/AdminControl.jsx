import React, { useState } from "react";
import { useRef } from "react";

import styled from "styled-components";

const AdminControl = () => {
  const [file, setfile] = useState(null);
  const [Product, setProduct] = useState({
    shortDetails: "",
    details: "",
    title: "",
    brand: "",
    view: "",
    stock: "",
    price: "",
    size: "S",
    color: "",
    categoryId: "",
    isEditing: false,
    editProductId: "",
  });

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
    console.log("enviando todo al backend");
    const formData = new FormData();
    formData.append("postimages", file);

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
  };

  return (
    <Wrapper>
      <h1 className="title">ADMIN CONTROL</h1>

      <div className="control-buttons-admin">
        <button className="control-buttons-admin__btn">AGREGAR PRODUCTO</button>
      </div>

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
