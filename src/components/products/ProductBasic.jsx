import React, { useState } from 'react';
import Product from './product.json';
import './productBasic.css';
import Sliders from '../sharedComponents/sliders/Sliders';

export default function ProductBasic() {
  const [color, setColor] = useState(0);
  const [talla, setTalla] = useState(0);
  const response = JSON.parse(JSON.stringify(Product));
  const {
    title,
    marca,
    shortdetails,
    carrousel,
    heating,
    view,
    stock,
    price,
    colors,
    tallas,
  } = response;

  const entrega = fechaEntrega();
  const colorOption = colors.map((color, ind) => {
    const clase = colorDet(color);
    return (
      <input
        key={ind}
        className={clase}
        type="radio"
        id={colors[ind]}
        name="color"
        value={colors[ind]}
        onChange={(e) => setColor(e.target.value)}
      />
    );
  });

  const tallaOption = tallas.map((talla, ind) => {
    const clase = tallaDet(talla);
    return (
      <div key={ind}>
        <input
          className="product__talla"
          type="radio"
          id={tallas[ind]}
          name="talla"
          value={tallas[ind]}
          onChange={(e) => setTalla(e.target.value)}
        />
        <label className="product__talla-label" htmlFor={tallas[ind]}>
          {clase}
        </label>
      </div>
    );
  });
  console.log(talla);

  return (
    <>
      <Sliders carrousel={carrousel} />
      <div className="product">
        <p className="product__shortdetails">
          {shortdetails.charAt(0).toUpperCase() + shortdetails.slice(1)}
        </p>

        <h4 className="product__marca">
          Marca {marca.charAt(0).toUpperCase() + marca.slice(1)}
        </h4>
        <div className="product__contenedor-heating">
          <p className="product__heating">★★★★★</p>
          <p className="product__view">{view} reviews</p>
          <p className="product__stock">
            {stock ? 'In stock' : 'Out of stock'}
          </p>
        </div>
        <p className="product__price">
          Precio: <span>${price} </span>
        </p>
        <p className="product__delivery">Entrega para el {entrega}</p>
        <h3 className="product__color-title">Color</h3>
        <div className="select-container">{colorOption}</div>
        <h3 className="product__color-title">Talle</h3>
        <div className="select-container">{tallaOption}</div>
      </div>
    </>
  );
}

/*Calcula fecha de entrega en 5 dias*/
function fechaEntrega() {
  const fecha = new Date();
  const dia = fecha.getDate() + 5;
  const mes = fecha.getMonth();
  const anio = fecha.getFullYear();

  const calculoFechaEntrega = new Date(anio, mes, dia);
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const fechaEntrega = calculoFechaEntrega.toLocaleDateString('es-ES', options);
  return fechaEntrega.toString();
}
/* asignar color segun clase*/

function colorDet(numeroColor) {
  let colorClass;
  switch (numeroColor) {
    case 1:
      colorClass = 'red';
      break;
    case 2:
      colorClass = 'blue';
      break;
    case 3:
      colorClass = 'black';
      break;
    case 4:
      colorClass = 'white';
      break;

    default:
      colorClass = '-';
      break;
  }
  return colorClass;
}
/* asignar talla segun numero*/
function tallaDet(numeroTalla) {
  let tallaClass;
  switch (numeroTalla) {
    case 101:
      tallaClass = 'XXS';
      break;
    case 102:
      tallaClass = 'XS';
      break;
    case 103:
      tallaClass = 'M';
      break;
    case 104:
      tallaClass = 'L';
      break;
    case 105:
      tallaClass = 'XL';
      break;
    case 106:
      tallaClass = 'XXL';
      break;
    case 107:
      tallaClass = 'XXL';
      break;

    default:
      tallaClass = '-';
      break;
  }
  return tallaClass;
}
