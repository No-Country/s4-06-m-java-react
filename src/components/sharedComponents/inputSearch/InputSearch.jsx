import React from "react";
import searchIcon from "../../../assets/images/nav/searchw.png";
import "./inputSearch.css";
const InputSearch = () => {
  return (
    <div className={`input-wrapper `}>
      <div className="input-wrapper__icon">
        <img src={searchIcon} alt="searchIcon" />
      </div>
      <input
        className="input-wrapper__input"
        type="text"
        placeholder="Buscar"
      />
    </div>
  );
};

export default InputSearch;
