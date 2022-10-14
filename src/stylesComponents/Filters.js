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
        <form onSubmit={(e) => e.preventDefault} className="wrapper-form">
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
        </form>
        <div className="wrapper-select-company">
          <h5 className="select-title">Company</h5>
          <select
            name="brand"
            value={brand}
            onChange={updateFilters}
            className="company"
          >
            {branden.map((c, index) => {
              return (
                <option key={index} value={c} className="option-company">
                  {c}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .option-company {
    background-color: #052734;
  }

  .wrapper-select-company {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }
  .select-title {
    font-size: 2rem;
    margin: 0;
    margin-bottom: 1rem;
  }
  .company {
    background-color: #052734;
    border: none;
    border-radius: 3rem;
    color: white;
    padding: 1rem;
  }
  .wrapper-form {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
  }
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
    display: flex;
    height: 200px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  button {
    text-transform: uppercase;
    background-color: black;
    color: white;
    padding: 0.3rem;
    border: 1px solid black;
    margin-top: 0.7rem;
    border-radius: 5px;
    width: 100%;
    display: block;
  }

  @media screen and (min-width: 1024px) {
    .wrapper-categorias {
      flex-direction: row;
      justify-content: space-between;
      height: 90px;
      margin-top: -40px;
    }
    button {
      margin-left: 1rem;
    }
  }
`;

export default Filters;
