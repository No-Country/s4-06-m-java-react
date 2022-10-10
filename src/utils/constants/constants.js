import React from "react";
import Star from "../../components/products/Star";
import imageproduct from "../../assets/images/products/Image.png";

export const linksCategories = [
  {
    id: 1,
    text: "HOMBRE",
    url: "/",
  },
  {
    id: 2,
    text: "MUJER",
    url: "/",
  },
  {
    id: 3,
    text: "NINOS",
    url: "/",
  },
  {
    id: 4,
    text: "OFERTAS",
    url: "/",
  },
];

export const cardItems = [
  {
    id: 1,
    img: imageproduct,
    text: "Playera deportiva con estampado de lineas dagonales",
    stars: <Star />,
    price: "$140",
    delivery: "Entrega para el jueves, 25 de sept",
  },
  {
    id: 2,
    img: imageproduct,
    text: "Playera deportiva con estampado bajo curvo y estampados en de letras en blanco",
    stars: <Star />,
    price: "$140",
    delivery: "Entrega para el jueves, 25 de sept",
  },
  {
    id: 3,
    img: imageproduct,
    text: "Playera deportiva con estampado de lineas dagonales",
    stars: <Star />,
    price: "$140",
    delivery: "Entrega para el jueves, 25 de sept",
  },
  {
    id: 4,
    img: imageproduct,
    text: "Playera deportiva con estampado bajo curvo y estampados en de letras en blanco",
    stars: <Star />,
    price: "$140",
    delivery: "Entrega para el jueves, 25 de sept",
  },
  {
    id: 5,
    img: imageproduct,
    text: "Playera deportiva con estampado de lineas dagonales",
    stars: <Star />,
    price: "$140",
    delivery: "Entrega para el jueves, 25 de sept",
  },
  {
    id: 6,
    img: imageproduct,
    text: "Playera deportiva manga larga",
    stars: <Star />,
    price: "$140",
    delivery: "Entrega para el jueves, 25 de sept",
  },
  {
    id: 7,
    img: imageproduct,
    text: "Playera deportiva con estampado de lineas dagonales",
    stars: <Star />,
    price: "$140",
    delivery: "Entrega para el jueves, 25 de sept",
  },
  {
    id: 8,
    img: imageproduct,
    text: "Playera deportiva con estampado de lineas dagonales",
    stars: <Star />,
    price: "$140",
    delivery: "Entrega para el jueves, 25 de sept",
  },
  {
    id: 9,
    img: imageproduct,
    text: "Playera deportiva con estampado de lineas dagonales",
    stars: <Star />,
    price: "$140",
    delivery: "Entrega para el jueves, 25 de sept",
  },
  {
    id: 10,
    img: imageproduct,
    text: "Playera deportiva con estampado de lineas dagonales",
    stars: <Star />,
    price: "$140",
    delivery: "Entrega para el jueves, 25 de sept",
  },
  {
    id: 11,
    img: imageproduct,
    text: "Playera deportiva con estampado de lineas dagonales",
    stars: <Star />,
    price: "$140",
    delivery: "Entrega para el jueves, 25 de sept",
  },
  {
    id: 12,
    img: imageproduct,
    text: "Playera deportiva con estampado de lineas dagonales",
    stars: <Star />,
    price: "$140",
    delivery: "Entrega para el jueves, 25 de sept",
  },
];
/*product*/

export const products_url = "https://sport-eco.herokuapp.com/product/all";

export const single_product_url = `https://sport-eco.herokuapp.com/product/`;

export const productbyIdDelete = `https://sport-eco.herokuapp.com/product/`;

export const productAdd = `https://sport-eco.herokuapp.com/product/add`;

/**users*/

export const GetallUsers = "https://sport-eco.herokuapp.com/user/all";
export const GetUserId = "https://sport-eco.herokuapp.com/user/";
export const deleteUserById = "https://sport-eco.herokuapp.com/user/";

/*FAKE API*/

// export const products_url = "https://course-api.com/react-store-products";

// export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
