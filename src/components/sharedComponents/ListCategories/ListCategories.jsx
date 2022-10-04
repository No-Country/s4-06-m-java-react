import React from "react";
import { linksCategories } from "../../../utils/constants/constants";
import NavLinkPersonalizado from "../../../helpers/NavLinkPersonalizado";

import "./listCategories.css";
const ListCategories = () => {
  return (
    <ul className="list-categories">
      {linksCategories.map((category) => (
        
      <li  key={category.id} >
        <NavLinkPersonalizado  to={category.url} clase="list-categories__itemActive" claseInactive="list-categories__item">
          {category.text}
        </NavLinkPersonalizado>
      </li>
      ))}
    </ul>
  );
};

export default ListCategories;
