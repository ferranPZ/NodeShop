import React from "react";
import { Link } from "react-router-dom";
function Producto(props) {
  return (
    <div className="col-12 col-md-6 col-lg-4     d-flex align-items-stretch">
      <div className="card">
        <img
          className="card-img-top"
          src={`http://localhost:3000/app/files/${props.imagen}`}
          alt="Card image cap"
        />
        <div className="card-body">
          <h4 className="card-title">{props.nombre}</h4>
          <p className="card-text">{props.descripcion}</p>
          <div className="row">
            <div className="col">
              <p className="text-danger">${props.valor}</p>
            </div>
            <div className="col">
              <Link
                className="btn btn-primary float-right"
                to={"/details/" + props.idProducto}
              >
                Ver
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Producto;
