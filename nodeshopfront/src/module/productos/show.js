import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";

import ListaProductos from "./ListaProductos";
import BarraBusqueda from "./BarraBusqueda";

class tableComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listProducts: [],
      busquedaProductos: "",
      searchCategory: false,
      searchMouse: false,
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
    return <div>{this.loadFillData()}</div>;
  }
  handleInput = (e) => {
    this.setState({ busquedaProductos: e.target.value });
  };
  handleChangeChk = (e) => {
    if (this.state.searchCategory === true) {
      this.setState({ searchCategory: false });
    } else {
      this.setState({ searchCategory: true });
    }
  };
  handleChangeMouses = () => {
    if (this.state.searchMouse === true) {
      this.setState({ searchMouse: false });
    } else {
      this.setState({ searchMouse: true });
    }
  };
  loadFillData() {
    let filtradoProductos = this.state.listProducts.filter((producto) => {
      if (this.state.searchCategory) {
        return producto.catNombre
          .toLowerCase()
          .includes(this.state.busquedaProductos.toLowerCase());
      } else {
        return producto.nombre
          .toLowerCase()
          .includes(this.state.busquedaProductos.toLowerCase());
      }
    });
    return (
      <div>
     {/*    <input type="checkbox" onChange={this.handleChangeChk} /> Buscar x
        categoría*/} 
        <BarraBusqueda handleInput={this.handleInput} />
        <input type="checkbox" onChange={this.handleChangeMouses} /> Solo Mouses
        {/* */}
        <ListaProductos
          filtradoProductos={filtradoProductos}
          Mouse={this.state.searchMouse}
        />
        {/* */}
      </div>
    );
  }
}

export default tableComponent;
