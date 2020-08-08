import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";
import axios from "axios";

import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

import moment from "moment";
//import Datatable from "react-bs-datatable";
import { css } from "emotion";

// Todo lo relacionado con la tabla en sí
import {
  Pagination,
  PaginationOpts,
  TableHeader,
  TableBody,
  Filter,
  useDatatableLifecycle,
  shouldTableUpdate,
} from "react-bs-datatable";

const customLabels = {
  first: "<<",
  last: ">>",
  prev: "<",
  next: ">",
  show: "Mostrar",
  entries: "filas",
  noResults: "No existen resultados",
  filterPlaceholder: "ingresar texto",
};
const onSortFunction = {
  date(columnValue) {
    // Convert the string date format to UTC timestamp
    // So the table could sort it by number instead of by string
    return moment(columnValue, "Do MMMM YYYY").valueOf();
  },
};
const CustomTable = React.memo((props) => {
  const {
    data,
    rowsPerPageOption,
    tableHeaders,
    onChangeFilter,
    onPageNavigate,
    classes,
    onRowsPerPageChange,
    onSortChange,
    tableClass,
    labels,
    filterable,
    filterText,
    rowsPerPage,
    currentPage,
    sortedProp,
    maxPage,
    Components,
  } = useDatatableLifecycle(props);

  return (
    <>
      <Components.Row className="controlRow__root">
        <Components.Col xs="12">
          <Filter
            classes={classes}
            tableHeaders={tableHeaders}
            placeholder={labels.filterPlaceholder}
            onChangeFilter={onChangeFilter}
            filterText={filterText}
            filterable={filterable}
            components={{
              Adornment: Components.Adornment,
              Button: Components.Button,
              ClearIcon: Components.ClearIcon,
              FormControl: Components.FormControl,
              InputGroup: Components.InputGroup,
            }}
          />
        </Components.Col>
      </Components.Row>
      <Components.Row>
        <Components.Col xs="12">
          <Components.Table className={tableClass}>
            <TableHeader
              classes={classes}
              tableHeaders={tableHeaders}
              sortedProp={sortedProp}
              onSortChange={onSortChange}
              components={{
                TableHead: Components.TableHead,
                TableCell: Components.TableCell,
                TableRow: Components.TableRow,
              }}
            />
            <TableBody
              classes={classes}
              tableHeaders={tableHeaders}
              labels={labels}
              data={data}
              components={{
                TableBody: Components.TableBody,
                TableCell: Components.TableCell,
                TableRow: Components.TableRow,
              }}
            />
          </Components.Table>
        </Components.Col>
      </Components.Row>
      <Components.Row className="controlRow__root bottom">
        <Components.Col xs={12} md={4} />
        <Components.Col xs={12} md={4}>
          <PaginationOpts
            classes={classes}
            labels={labels}
            onRowsPerPageChange={onRowsPerPageChange}
            rowsPerPage={rowsPerPage}
            rowsPerPageOption={rowsPerPageOption}
            components={{
              Form: Components.Form,
              FormGroup: Components.FormGroup,
              FormControl: Components.FormControl,
            }}
          />
        </Components.Col>
        <Components.Col xs={12} md={4} className="text-right">
          <Pagination
            classes={classes}
            data={data}
            rowsPerPage={rowsPerPage}
            currentPage={currentPage}
            onPageNavigate={onPageNavigate}
            labels={labels}
            maxPage={maxPage}
            components={{
              Button: Components.Button,
              ButtonGroup: Components.ButtonGroup,
            }}
          />
        </Components.Col>
      </Components.Row>
    </>
  );
}, shouldTableUpdate);

//Lo relacionado con las notificaciones Toast
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
      // variables crear
      idProducto: "",
      nombre: "",
      descripcion: "",
      unidades: "",
      valor: "",
      estado: "",
      file: "",
      categoria_idcategoria: "",
      //imagen modal
      profileImg: "dist/img/user2-160x160.jpg",
    };
  }

  header = [
    { title: "Nombre", prop: "nombre", sortable: true, filterable: true },
    { title: "Descripcion", prop: "descripcion" },
    {
      title: "Acciones",
      cell: (row) => (
        <div>
          <div className="btn-group">
            <button className="btn-sm btn-warning">
              <Link
                className="btn fas fa-edit"
                to={"/edit/" + row.idProducto}
              ></Link>
            </button>

            <button
              className="btn-sm btn-danger"
              onClick={(e) => this.onDelete(row.idProducto, e)}
            >
              <i className="fas fa-trash"></i>
            </button>
          </div>
        </div>
      ),
    },
  ];

  CleanCreateForm() {
    this.setState({ nombre: "" });
    this.setState({ descripcion: "" });
    this.setState({ unidades: "" });
    this.setState({ valor: "" });
    this.setState({ file: "" });
    this.setState({ profileImg: "dist/img/user2-160x160.jpg" });
  }
  //Funciones Crud
  sendSave() {
    const datapost = {
      nombre: this.state.nombre,
      descripcion: this.state.descripcion,
      unidades: this.state.unidades,
      valor: this.state.valor,
      estado: 1,
      categoria_idcategoria: this.state.categoria_idcategoria,
      file: this.state.file,
    };
    console.log(datapost);
    const baseUrl = "http://localhost:3000/producto";
    axios
      .post(baseUrl, datapost)
      .then((response) => {
        if (response.status === 201) {
          this.alert();
          this.setState({ nombre: "" });
          this.setState({ descripcion: "" });
          this.setState({ unidades: "" });
          this.setState({ valor: "" });
          this.setState({ file: "" });
          this.setState({ categoria_id_categoria: "" });
          this.loadProducts(); //para recargar
        } else {
          console.log(response.status);
          alert("no funcko");
        }
      })
      .catch((error) => {
        alert("Error 34 " + error);
      });
  }
  EditRow(row, e) {
    this.setState({
      u_idProducto: row.idProducto,
      u_nombre: row.nombre,
      u_descripcion: row.descripcion,
      u_unidades: row.unidades,
      u_valor: row.valor,
      u_imagen: row.imagen,
    });
  }
  onDelete(id) {
    Swal.fire({
      title: "Estas seguro?",
      text: "Se eliminará el registro!",
      //  type: "warning",
      showCancelButton: true,
      confirmButtonText: "Si, eliminar!",
      cancelButtonText: "No, mantenerlo",
    }).then((result) => {
      if (result.value) {
        this.sendDelete(id);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelado", "Se ha cancelado su eliminación", "error");
      }
    });
  }
  sendDelete(idProducto) {
    // url de backend
    const baseUrl = "http://localhost:3000/producto"; // parameter data post
    // network UPDATE `producto` SET `estado`=1  WHERE 1
    axios
      .delete(baseUrl + "?id=" + idProducto)
      .then((response) => {
        if (response.statusText === "OK") {
          Swal.fire("Eliminado!", "Se ha eliminado el registro.", "success");
          this.loadProducts(); //para recargar
        }
      })
      .catch((error) => {
        alert("Error 325 ");
      });
  }
  //funciones Toast
  alert() {
    Toast.fire({
      icon: "success",
      title: "Creado con éxito",
    });
  }
  //Funciones del render
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

  imageHandler = (e) => {
    this.setState({ file: e.target.value });

    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ profileImg: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  render() {
    const { profileImg } = this.state;
    return (
      <div>
        <div className="card-body" style={{ height: "10px" }}>
          <button
            type="button"
            className="btn  bg-gradient-primary float-right my-2"
            data-toggle="modal"
            data-target="#exampleModalCenter"
          >
            Crear nuevo producto
          </button>
        </div>
        {/*----------------Modal----------------*/}

        {/* Modal Crear*/}
        <div
          className="modal fade"
          id="exampleModalCenter"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  Añadir productos
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
                <div className="col-12">
                  <div className="form-group row">
                    <label
                      htmlFor="NombreCreate"
                      className="col-sm-2 col-form-label"
                    >
                      Nombre
                    </label>
                    <div className="col-sm-12">
                      <input
                        type="text"
                        className="form-control"
                        id="inputNombreCreate"
                        placeholder="Escriba un nombre"
                        value={this.state.nombre}
                        onChange={(value) =>
                          this.setState({ nombre: value.target.value })
                        }
                      />
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
                        className="form-control"
                        rows="3"
                        placeholder="Escriba una descripción..."
                        value={this.state.descripcion}
                        onChange={(value) =>
                          this.setState({ descripcion: value.target.value })
                        }
                      ></textarea>
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
                          className="form-control"
                          id="inputUnidadesCreate"
                          value={this.state.unidades}
                          onChange={(value) =>
                            this.setState({ unidades: value.target.value })
                          }
                        />
                      </div>
                    </div>
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
                          className="form-control"
                          id="inputImagenCreate"
                          placeholder="Escriba un nombre"
                          value={this.state.file}
                          accept="image/*"
                          onChange={this.imageHandler}
                        />
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
                          <option defaultValue>Choose...</option>
                          <option value="1">option 1</option>
                          <option value="2">option 2</option>
                          <option value="3">option 3</option>
                          <option value="4">option 4</option>
                          <option value="5">option 5</option>
                        </select>
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
                          className="form-control"
                          id="inputValorCreate"
                          value={this.state.valor}
                          onChange={(value) =>
                            this.setState({ valor: value.target.value })
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div>
                      <img src={profileImg} alt="" id="" className="img mw-100" ></img>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={() => this.CleanCreateForm()}
                >
                  Limpiar campos
                </button>
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
                  onClick={() => this.sendSave()}
                >
                  Guardar
                </button>
              </div>
            </div>
          </div>
        </div>

        {/*----------------Tabla----------------*/}
        <CustomTable
          tableHeaders={this.header}
          tableBody={this.state.listProducts}
          rowsPerPage={5}
          rowsPerPageOption={[5, 10, 30]}
          initialSort={{ prop: "username", isAscending: true }}
          onSort={onSortFunction}
          labels={customLabels}
        />
      </div>
    );
  }
}

export default menuComponent;
