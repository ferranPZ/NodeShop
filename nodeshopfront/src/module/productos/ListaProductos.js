import React from "react";
import Producto from "./Producto";

function ListaProductos(props) {
  let filtradoCatgorizado = props.filtradoProductos;
  if (props.Mouse) {
    filtradoCatgorizado = props.filtradoProductos.filter(function (productos) {
      return productos.catNombre === "Mouse";
    });
  }
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
  return <div className="row">{productos}</div>;
}
export default ListaProductos;
