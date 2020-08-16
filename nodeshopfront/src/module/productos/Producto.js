import React from "react";
import { Link } from "react-router-dom";
function Producto(props) {
  return (
    <div className="col-md-4">
      <figure className="card card-product">
        <div className="img-wrap">
          <img src={`http://localhost:3000/app/files/${props.imagen}`} 
              className="img-thumbnail"
              alt={props.nombre}
              width={300}
              height={50}
          />
        </div>
        <figcaption className="info-wrap">
          <h4 className="title">{props.nombre}</h4>
          <p className="desc">{props.descripcion}</p>
          <div className="rating-wrap">
            <div className="label-rating">132 reviews</div>
            <div className="label-rating">154 orders </div>
          </div>
        </figcaption>
        <div className="bottom-wrap">
       
          <Link 
              className="btn fas fa-edit btn-warning"
              to={"/details/" + props.idProducto}
            ></Link>
        
          <div className="price-wrap h5">
            <span className="price-new">{props.valor}</span> 
 
          </div>
        </div>
      </figure>
    </div>
  );
}

export default Producto;
