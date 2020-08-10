import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";


import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import { withRouter } from "react-router-dom";
const baseUrl = "http://localhost:3000";

class EditComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataProducto: {},
      dataCategoria: {},
      idProducto: "",
      nombre: "",
      descripcion: "",
      unidades: "",
      valor: "",
      estado: "",
      file: "",
      categoria_idcategoria: "",
      stringCategoria: "",
      //imagen modal
      profileImg: "../dist/img/user2-160x160.jpg",
      //validation
      validationNombre: "",
      validationDescripcion: "",
      validationUnidades: "",
      validationValor: "",
      validationEstado: "",
      validationFile: "",
      validationCategoria: "",
    };
  }
  imageHandler = (e) => {
    this.setState({ file: e.target.value });
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ profileImg: reader.result });
        this.setState({ file: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  validationModal() {
    console.log(this.state.nombre);
    let validationOK = true;
    if (this.state.nombre === "") {
      this.setState({ validationNombre: "is-invalid" });
      validationOK = false;
    } else {
      this.setState({ validationNombre: "is-valid" });
    }
    if (this.state.descripcion === "") {
      this.setState({ validationDescripcion: "is-invalid" });
      validationOK = false;
    } else {
      this.setState({ validationDescripcion: "is-valid" });
    }
    if (this.state.unidades === "") {
      this.setState({ validationUnidades: "is-invalid" });
      validationOK = false;
    } else {
      this.setState({ validationUnidades: "is-valid" });
    }
    if (this.state.valor === "") {
      this.setState({ validationValor: "is-invalid" });
      validationOK = false;
    } else {
      this.setState({ validationValor: "is-valid" });
    }
    if (this.state.categoria_idcategoria === "") {
      this.setState({ validationCategoria: "is-invalid" });
      validationOK = false;
    } else {
      this.setState({ validationCategoria: "is-valid" });
    }
    if (this.state.file === "") {
      this.setState({ validationFile: "is-invalid" });
      validationOK = false;
    } else {
      this.setState({ validationFile: "is-valid" });
    }
    if (validationOK === true) {
      this.sendUpdate();
    }
  }
  componentDidMount() {
    let idProducto = this.props.match.params.id;
    const url = baseUrl + "/producto?id=" + idProducto;
    const url2 = baseUrl + "/categoria";
    const requestOne = axios.get(url);
    const requestTwo = axios.get(url2);
    axios
      .all([requestOne, requestTwo])
      .then(
        axios.spread((...responses) => {
          const responseOne = responses[0];
          const responseTwo = responses[1];
          if (responseOne.status === 200 && responseTwo.status === 200) {
            const data = responseOne.data.body[0];
            const data2 = responseTwo.data.body[0];
            this.setState({
              dataProducto: data,
              dataCategoria: data2,
              idProducto: data.idProducto,
              nombre: data.nombre,
              descripcion: data.descripcion,
              unidades: data.unidades,
              valor: data.valor,
              file: data.file,
              categoria_idcategoria: data.categoria_idcategoria,
              stringCategoria: data2.nombre,
            });
          } else {
            alert("Error web service");
          }
        })
      )
      .catch((errors) => {
        alert("Error server " + errors);
      });
  }
  render() {
    const { profileImg } = this.state;
    return (
      <div className="card card-info">
        <div className="card-header">
          <h3 className="card-title">Editar productos</h3>
        </div>
        <div className="card-body">
          <div className="col-12">
            <div className="form-group row">
              <label htmlFor="NombreCreate" className="col-sm-2 col-form-label">
                Nombre
              </label>
              <div className="col-sm-12">
                <input
                  type="text"
                  className={`form-control ${this.state.validationNombre}`}
                  id="inputNombreCreate"
                  placeholder="Escriba un nombre"
                  value={this.state.nombre}
                  onChange={(value) =>
                    this.setState({ nombre: value.target.value })
                  }
                />
                <span
                  id="inputNombreCreate-error"
                  className="error invalid-feedback"
                >
                  Ingrese un nombre válido
                </span>
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="DescripcionCreate"
                className="col-sm-2 col-form-label"
              >
                Descripción
              </label>
              <div className="col-sm-12">
                <textarea
                  className={`form-control ${this.state.validationDescripcion}`}
                  rows="3"
                  placeholder="Escriba una descripción..."
                  value={this.state.descripcion}
                  onChange={(value) =>
                    this.setState({ descripcion: value.target.value })
                  }
                ></textarea>
                <span
                  id="inputDescripcionCreate-error"
                  className="error invalid-feedback"
                >
                  Ingrese una descripción
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-8">
              <div className="form-group row">
                <label
                  htmlFor="UnidadesCreate"
                  className="col-sm-2 col-form-labels"
                >
                  Unidades
                </label>
                <div className="col-sm-10">
                  <input
                    type="number"
                    className={`form-control ${this.state.validationUnidades}`}
                    id="inputUnidadesCreate"
                    value={this.state.unidades}
                    onChange={(value) =>
                      this.setState({ unidades: value.target.value })
                    }
                  />
                  <span
                    id="inputUnidadCreate-error"
                    className="error invalid-feedback"
                  >
                    Ingrese una cantidad
                  </span>
                </div>
              </div>

              <div className="form-group row">
                <label
                  htmlFor="UnidadesCreate"
                  className="col-sm-2 col-form-label"
                >
                  Categoría
                </label>
                <div className="col-sm-10">
                  <select
                    id="inputState"
                    className="form-control"
                    onChange={(value) =>
                      this.setState({
                        categoria_idcategoria: value.target.value,
                      })
                    }
                  >
                    <option
                      defaultValue={
                        this.state.dataProducto.categoria_idcategoria
                      }
                    >
                      {this.state.stringCategoria}
                    </option>
                    <option value="1">Admin</option>
                    <option value="2">Project Manager</option>
                    <option value="3">Programer</option>
                  </select>

                  <span
                    id="inputCategoriaCreate-error"
                    className="error invalid-feedback"
                  >
                    Seleccione una categoría
                  </span>
                </div>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="ValorCreate"
                  className="col-sm-2 col-form-label"
                >
                  Precio
                </label>
                <div className="col-sm-10">
                  <input
                    type="number"
                    className={`form-control ${this.state.validationValor}`}
                    id="inputValorCreate"
                    value={this.state.valor}
                    onChange={(value) =>
                      this.setState({ valor: value.target.value })
                    }
                  />
                  <span
                    id="inputValorCreate-error"
                    className="error invalid-feedback"
                  >
                    Ingrese un precio
                  </span>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="col-5">
                <div className="form-group row">
                  <label
                    htmlFor="ValorCreate"
                    className="col-sm-2 col-form-label"
                  >
                    Imagen
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="file"
                      className={`form-control ${this.state.validationFile}`}
                      id="inputImagenCreate"
                      placeholder="Seleccione un archivo"
                      value={this.state.imagen}
                      accept="image/*"
                      onChange={this.imageHandler}
                    />
                    <span
                      id="inputImagenCreate-error"
                      className="error invalid-feedback"
                    >
                      Ingrese una imagen
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-5">
                <div>
                  <img
                    src={profileImg}
                    alt=""
                    id=""
                    className="img mw-100"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-dismiss="modal"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => this.validationModal()}
          >
            Guardar
          </button>
        </div>
      </div>
    );
  }
  redireccionar() {
    this.props.history.push("/menu");
  }
  sendUpdate() {
    // url de backend
    const baseUrl =
      "http://localhost:3000/producto?id=" + this.state.idProducto;
    // parameter data post
    const datapost = {
      idProducto: this.state.idProducto,
      nombre: this.state.nombre,
      descripcion: this.state.descripcion,
      unidades: this.state.unidades,
      valor: this.state.valor,
      file: this.state.file,
      categoria_idcategoria: this.state.categoria_idcategoria,
    };
    axios
      .patch(baseUrl, datapost)
      .then((response) => {
        if (response.status === 200) {
          Swal.queue([
            {
              type: "success",
              title: "Éxito",
              confirmButtonText: "Aceptar",
              text: "Se ha actualizado correctamente",
              showLoaderOnConfirm: true,
              preConfirm: () => {
                return this.redireccionar();
              },
            },
          ]);
        } else {
          alert("Error");
        }
      })
      .catch((error) => {
        alert("Error 325 ");
      });
  }
}

export default EditComponent;
