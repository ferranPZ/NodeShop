import React from "react";
import { Link } from "react-router-dom";
function Producto(props) {
  return (
    <div className="col-12 col-md-6 col-lg-4 d-flex align-items-stretch">
      <div className="card w-100 mh-100" style={{ height: "530px" }}>
        <img
          className="card-img-top"
          src={`http://localhost:3000/app/files/${props.imagen}`}
          alt="Card image cap"
          style={{ height: "270px" }}
        />
        <div className="card-body" style={{ height: "270px" }}>
          <h4 className="card-title">
            <b>{props.nombre}</b>
          </h4>
          <p className="card-text">{props.descripcion}</p>
        </div>
        <div className="card-footer">
          <div className="row">
            <div className="col">
              <p className="text-danger">
                <del className="mr-1">${props.valor}</del> $
                {props.valor - (props.valor * 10) / 100}
              </p>
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
