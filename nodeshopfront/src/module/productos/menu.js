import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";
import axios from "axios";

import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

import Datatable from "react-data-table-component";

const tablaProductos = [
  {
    idProducto: 1,
    nombre: "uno",
  },
  {
    idProducto: 2,
    nombre: "dos",
  },
  {
    idProducto: 3,
    nombre: "tres",
  },
  {
    idProducto: 4,
    nombre: "cuatro",
  },
  {
    idProducto: 5,
    nombre: "cinco",
  },
];

const columnas = [
  {
    name: "ID",
    selector: "idProducto",
  },
  {
    name: "Nombre",
    selector: "nombre",
  },
];

const paginacionOpciones = {
  rowsPerPageText: "Filas por Páginas",
  rangeSeparatorText: "de",
  selectAllRowsItem: true,
  selectAllRowsItemText: "Todos",
};

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

class menuComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listProducts: [],
    };
  }
  state = {
    busqueda: "",
    listaBusqueda: "",
  };
  onChange = async e => {
    e.persist();
    await this.setState({ busqueda: e.target.value });
 this.filtrarElementos();
  };

  componentDidMount() {
    this.setState({ listaBusqueda: tablaProductos });
    this.loadProducts();
  }

  filtrarElementos = () => {
    var search = tablaProductos.filter(item => {
      if (item.idProducto.toLowerCase().includes(this.state.busqueda) ||
      item.nombre.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"").includes(this.state.busqueda)
      ) {
        return item;
      }
    });
    this.setState({listaBusqueda: search});
  };

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
    return (
      <div>
        <button
          className="show-example-btn"
          aria-label="Show SweetAlert2 success message"
          onClick={() => this.alert()}
        >
          Show success message
        </button>

        {/* Button trigger modal */}
        <button
          type="button"
          className="btn  bg-gradient-primary float-right my-2"
          data-toggle="modal"
          data-target="#exampleModalCenter"
        >
          Crear nuevo producto
        </button>
        {/* Modal */}
        <div
          className="modal fade"
          id="exampleModalCenter"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  Modal title
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                {/** */}

                <button type="button" className="btn btn-info swalDefaultInfo">
                  Launch Info Toast
                </button>

                {/** */}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Cancelar
                </button>
                <button type="button" className="btn btn-primary">
                  Guardar
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="barraBusqueda">
          <input
            type="text"
            placeholder="Buscar"
            className="textField"
            name="busqueda"
            defaultValue={this.state.busqueda}
            onChange={this.onChange}
          />
          <button>hola</button>
        </div>

        <Datatable
          columns={columnas}
          data={this.state.listaBusqueda}
          title="Productos"
          pagination
          paginationComponentOptions={paginacionOpciones}
        />

        {/*
        {/*Table 
        <table className="table table-hover table-striped">
          <thead className="thead-dark">
            <tr>
              <th width="50px" scope="col">#</th>
              <th width="100px" scope="col">Nombre</th>
              <th width="200px" scope="col">Descripción</th>
              <th width="50px" scope="col">Acción</th>
            </tr>
          </thead>
          <tbody>{this.loadFillData()}</tbody>
        </table> */}
      </div>
    );
  }
  /*
  loadFillData() {
    return this.state.listProducts.map((data, index) => {
      return (
        <tr key={index}>
          <td>{data.idProducto}</td>
          <td>{data.nombre}</td>
          <td>{data.descripcion}</td>
          <td>
            <Link className="btn btn-outline-info " to={"/edit/" + data.id}>
              Edit id:{data.idProducto}
            </Link>

            <button
              className="btn btn-outline-danger"
              onClick={() => this.onDelete(data.idProducto)}
            >
              {" "}
              Delete{" "}
            </button>
          </td>
        </tr>
      );
    });
  }
*/
  onDelete(id) {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this imaginary file!",
      //  type: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, keep it",
    }).then((result) => {
      if (result.value) {
        this.sendDelete(id.idProducto);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your imaginary file is safe :)", "error");
      }
    });
  }

  sendDelete(userId) {
    // url de backend
    const baseUrl = "http://localhost:3000/usuario/delete"; // parameter data post
    // network
    axios
      .post(baseUrl, {
        id: userId,
      })
      .then((response) => {
        if (response.data.success) {
          Swal.fire("Deleted!", "Your employee has been deleted.", "success");
          this.loadUsuario(); //para recargar
        }
      })
      .catch((error) => {
        alert("Error 325 ");
      });
  }

  alert() {
    Toast.fire({
      icon: "success",
      title: "Creado con éxito",
    });
  }
}

export default menuComponent;
