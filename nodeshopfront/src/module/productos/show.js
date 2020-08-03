import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import axios from "axios";
 
class tableComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listProducts: [],
    };
  }

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts() {
    axios
      .get("http://localhost:3000/producto")

      .then((res) => {
        if (res) {
          const data = res.data.body;
          this.setState({ listProducts: data });
        } else {
          alert("Error web service");
        }
      })
      .catch((error) => {
        alert("Error server " + error);
      });
  }

  render() {
    return<div className="card">
    <div className="card-header">
      <h5 className="card-title">Productos</h5>
      <div className="card-tools">
        <button
          type="button"
          className="btn btn-tool"
          data-card-widget="collapse"
        >
          <i className="fas fa-minus" />
        </button>
        <button
          type="button"
          className="btn btn-tool"
          data-card-widget="remove"
        >
          <i className="fas fa-times" />
        </button>
      </div>
    </div><div className="row">
      
      
      {this.loadFillData()}
    </div>
    </div>;
  }

  loadFillData() {
    return this.state.listProducts.map((data, index) => {
      return (
        <div className="col-md-6" key={index}>
          <div className="d-flex flex-column px-5 mt-2 mb-3">
            <h3>
              <a href="/products/65582-lenovo-ideapad-l340-15irh-gaming-81lk000bcl">
                {data.nombre}
              </a>
            </h3>
            <div className="image-container d-flex flex-column justify-content-center">
              <a href="/products/65582-lenovo-ideapad-l340-15irh-gaming-81lk000bcl">
                <img
                  src={data.imagen}
                  alt={data.nombre}
                  width={300}
                  height={300}
                />
              </a>
            </div>
            <div className="description-container">
              <dl>
                <dt>Procesador</dt>
                <dd>
                {data.descripcion}
                </dd>
                <dt>RAM</dt>
                <dd>8 GB DDR4 (2400 MHz)</dd>
                <dt>Pantalla</dt>
                <dd>LED 15.6" (1920x1080) / 60 Hz</dd>
                <dt>Almacenamiento</dt>
                <dd>
                  <ul>
                    <p>SSD 256GB</p>
                  </ul>
                </dd>
                <dt>Tarjetas de video</dt>
                <dd>
                  <ul>
                    <p>Intel UHD Graphics 630 (Integrada)</p>
                    <p>NVIDIA GeForce GTX 1050 (3 GB)</p>
                  </ul>
                </dd>
                <dt>Unidades disponibles</dt>
                <dd>
                  <ul>
                    <p>{data.unidades}</p>
                  </ul>
                </dd>
              </dl>
            </div>
            <div className="d-flex flex-row justify-content-between align-items-center mt-auto pt-2">
              <div className="price flex-grow">
                <a href="/products/65582-lenovo-ideapad-l340-15irh-gaming-81lk000bcl">
                ${data.valor}
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }
}

export default tableComponent;
