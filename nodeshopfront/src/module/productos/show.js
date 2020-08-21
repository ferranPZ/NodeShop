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
      searchFilterCategory: "",
      ExampleProducts: [
        {
          idProducto: "1",
          nombre: "Ejemplo",
          descripcion: "es un ejemplo",
          unidades: "1",
          valor: "1",
          estado: "1",
          imagen: "default",
          catNombre: "Mouse",
        },
      ],
    };
  }
  componentDidMount() {
    this.loadProducts();
  }
  getData() {
    let data = sessionStorage.getItem('myData');
    console.log(data);
  }
  deleteData(){
    sessionStorage.removeItem('myData');
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
        alert("No hay conexion o no hay productos " + error);

        this.setState({ listProducts: this.state.ExampleProducts });
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
  handleChangeAll = () => {
    this.setState({ searchFilterCategory: "" });
  };
  handleChangeMouses = () => {
    this.setState({ searchFilterCategory: "Mouse" });
  };
  handleChangeTeclados = () => {
    this.setState({ searchFilterCategory: "Teclado" });
  };
  handleChangePantallas = () => {
    this.setState({ searchFilterCategory: "Pantalla" });
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
        <BarraBusqueda handleInput={this.handleInput} />

        <div className="py-2">
          <label className="mr-3">Filtrar por categoría: </label>
          <div className="icheck-primary d-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              defaultValue="option1"
              onChange={this.handleChangeAll}
              defaultChecked
            />
            
                <button onClick={ () => this.getData()}>Datos de sesion x consola</button>
                <button onClick={ () => this.deleteData()}>Borrar Datos de sesion</button>
            <label className="form-check-label mx-2" htmlFor="inlineRadio1">
              Mostrar todos
            </label>
          </div>
          <div className="icheck-primary d-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              defaultValue="option2"
              onChange={this.handleChangeMouses}
            />
            <label className="form-check-label mx-2" htmlFor="inlineRadio2">
              Mouses
            </label>
          </div>
          <div className="icheck-primary d-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio3"
              defaultValue="option3"
              onChange={this.handleChangeTeclados}
            />
            <label className="form-check-label mx-2" htmlFor="inlineRadio3">
              Teclados
            </label>
          </div>
          <div className="icheck-primary d-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio4"
              defaultValue="option4"
              onChange={this.handleChangePantallas}
            />
            <label className="form-check-label mx-2" htmlFor="inlineRadio4">
              Pantallas
            </label>
          </div>
        </div>

        {/* */}
        <ListaProductos
          filtradoProductos={filtradoProductos}
          searchFilterCategory={this.state.searchFilterCategory}
        />
        {/* */}
      </div>
    );
  }
}

export default tableComponent;
