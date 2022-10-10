import React from "react";
import { useFilterContext } from "../context/filter_context";
import { BsFillGridFill, BsList } from "react-icons/bs";
import styled from "styled-components";
const Sort = () => {
  const {
    filtered_products: products,
    grid_view,
    setGridView,
    setListView,
    updateSort,
    sort,
  } = useFilterContext();
  return (
    <Wrapper>
      <div className="btn-container">
        <button
          type="button"
          className={`${grid_view ? "active" : null}`}
          onClick={setGridView}
        >
          <BsFillGridFill />
        </button>
        <button
          type="button"
          className={`${!grid_view ? "active" : null}`}
          onClick={setListView}
        >
          <BsList />
        </button>
      </div>

      <p>{products.length} productos encontrados</p>

      <form className="sort-container">
        <label htmlFor="sort" className="sort-name-label">
          sort by
        </label>
        <select
          name="sort"
          id="sort"
          className="sort-input"
          value={sort}
          onChange={updateSort}
        >
          <option value="price-lowest">price (lowest)</option>
          <option value="price-highest">price (highest)</option>
          <option value="name-a">name (A-Z)</option>
          <option value="name-z">name (Z-A)</option>
        </select>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .btn-container {
    display: flex;
    justify-content: center;
  }

  .sort-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .sort-name-label {
    font-size: 2rem;
    margin-right: 1rem;
  }

  .sort-input {
    background-color: #052734;
    border: none;
    border-radius: 3rem;
    color: white;
    padding: 1rem;
  }
`;

export default Sort;
