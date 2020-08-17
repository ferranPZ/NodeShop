import React from "react";

function BarraBusqueda(props) {
  return (
    <div>
      <input onChange={props.handleInput} type="text" />
    </div>
  );
}

export default BarraBusqueda;
