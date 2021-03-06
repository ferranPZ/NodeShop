import React from "react";
import Producto from "./Producto";

import FirstComponents from "./comp/FirstComponents";

function ListaProductos(props) {
  let filtradoCatgorizado = props.filtradoProductos;

  if (props.searchFilterCategory === "Mouse") {
    filtradoCatgorizado = props.filtradoProductos.filter(function (productos) {
      return productos.catNombre === "Mouse";
    });
  } else if (props.searchFilterCategory === "Teclado") {
    filtradoCatgorizado = props.filtradoProductos.filter(function (productos) {
      return productos.catNombre === "Teclado";
    });
  } else if (props.searchFilterCategory === "Pantalla") {
    filtradoCatgorizado = props.filtradoProductos.filter(function (productos) {
      return productos.catNombre === "Pantalla";
    });
  }

  return (
    <div>
      <FirstComponents filtradoProductos={filtradoCatgorizado} />
    </div>
  );
  /*
  let productos = filtradoCatgorizado.map((producto, index) => {
    return (
      <Producto
        key={index}
        nombre={producto.nombre}
        catNombre={producto.catNombre}
        descripcion={producto.descripcion}
        idProducto={producto.idProducto}
        imagen={producto.imagen}
        unidades={producto.unidades}
        valor={producto.valor}
      />
    );
  });
  */
  //return <div className="row">{productos}</div>;
}
export default ListaProductos;
