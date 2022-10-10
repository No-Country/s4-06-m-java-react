import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";
import { formatPrice, getUniquesValues } from "../utils/helpers/helpers";
import { FaCheck } from "react-icons/fa";

const Filters = () => {
  const {
    filters: { text, category, brand, color, min_price, price, max_price },
    updateFilters,
    clearFilters,
    all_products,
  } = useFilterContext();

  const categories = getUniquesValues(all_products, "category");
  const branden = getUniquesValues(all_products, "brand");

  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={(e) => e.preventDefault}>
          {/*search input*/}
          <div className="search-input">
            <input
              type="text"
              name="text"
              placeholder="search"
              className="search-input"
              value={text}
              onChange={updateFilters}
            />
          </div>

          <div>
            <h5 className="filter-title-categorias">Categorias</h5>
            <div className="wrapper-categorias">
              {categories.map((category, index) => {
                return (
                  <button
                    key={index}
                    onClick={updateFilters}
                    name="category"
                    type="button"
                    className={`${
                      category === category.toLowerCase() ? "active" : null
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="form-control">
            <h5>Company</h5>

            <select
              name="company"
              value={brand}
              onChange={updateFilters}
              className="company"
            >
              {branden.map((c, index) => {
                return (
                  <option key={index} value={c}>
                    {c}
                  </option>
                );
              })}
            </select>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }

  .search-input {
    position: absolute;
    top: 7%;
    width: 70%;
    left: 50%;
    transform: translateX(-50%);
  }

  .filter-title-categorias {
    font-size: 3rem;
    text-align: center;
    margin: 0;
    margin-bottom: 3rem;
  }

  .wrapper-categorias {
    background-color: red;
    display: flex;
    flex-direction: column;
    height: 200px;
    justify-content: center;
    align-items: center;
  }

  button {
    text-transform: uppercase;
    background-color: transparent;
    border: 1px solid black;
    margin-top: 0.7rem;
  }
`;

export default Filters;
