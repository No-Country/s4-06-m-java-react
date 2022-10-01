import React from "react";
import { Link } from "react-router-dom";
import { linksCategories } from "../../../utils/constants/constants";

import "./listCategories.css";
const ListCategories = () => {
  return (
    <ul className="list-categories">
      {linksCategories.map((category) => (
        <Link key={category.id}>
          <li className="list-categories__item">{category.text}</li>
        </Link>
      ))}
    </ul>
  );
};

export default ListCategories;
