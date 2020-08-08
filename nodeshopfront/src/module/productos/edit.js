import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";

import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

const baseUrl = "http://localhost:3000";

class EditComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataProducto: {},
      idProducto: "",
      nombre: "",
      descripcion: "",
      unidades: "",
      valor: "",
      estado: "",
      file: "",
      categoria_idcategoria: "",
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
    this.sendUpdate();
  }

  componentDidMount() {
    let idProducto = this.props.match.params.id;
    const url = baseUrl + "/producto?id=" + idProducto;
    axios
      .get(url)
      .then((res) => {
        if (res.status === 200) {
          const data = res.data.body[0];

          this.setState({
            dataUsuario: data,
            idProducto: data.idProducto,
            nombre: data.nombre,
            descripcion: data.descripcion,
            unidades: data.unidades,
            valor: data.valor,
            file: data.file,
            categoria_idcategoria: data.categoria_idcategoria,
          });
        } else {
          alert("Error web service");
        }
      })
      .catch((error) => {
        alert("Error server " + error);
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
                    className={`form-control ${this.state.validationCategoria}`}
                    onChange={(value) =>
                      this.setState({
                        categoria_idcategoria: value.target.value,
                      })
                    }
                  >
                    <option value="">Seleccione una Categoría</option>
                    <option value="1">option 1</option>
                    <option value="2">option 2</option>
                    <option value="3">option 3</option>
                    <option value="4">option 4</option>
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

  sendUpdate() {
 
    // url de backend
    const baseUrl = "http://localhost:3000/producto?id=" + this.state.idProducto;
    console.log(baseUrl);
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
    console.log(datapost);
    axios
      .patch(baseUrl, datapost)
      .then((response) => {
        if (response.status===200) {
      
          
          Swal.fire({
            title: 'Te Han Hackeado',
            width: 600,
            padding: '3em',
            background: '#fff url(/images/trees.png)',
            backdrop: `
              rgba(0,0,123,0.4)
              url("https://media1.tenor.com/images/7fb90fa4f893a30e3b67485a9d937a93/tenor.gif?itemid=10106219")
              left top
              no-repeat
            `
          })






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
