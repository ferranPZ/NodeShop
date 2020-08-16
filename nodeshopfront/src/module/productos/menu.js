import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import moment from "moment";
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
  filterPlaceholder: "Ingresar texto",
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
const classes = {
  table: 'table table-bordered table-dark table-sm table-hover mt-3',
  
  theadCol: css`
    .table-datatable__root & {
      &.sortable:hover {
        background: #FFA500;
      }
    }
  `,
  tbodyRow: css`
    &:nth-of-type(even) {
    }
  `,
  paginationOptsFormText: css`
    &:first-of-type {
      margin-right: 8px;
    }
    &:last-of-type {
      margin-left: 8px;
    }
  `
};




const baseUrl = "http://localhost:3000";
class menuComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listProducts: [],
      dataCategoria: [],
      // variables crear
      idProducto: "",
      nombre: "",
      descripcion: "",
      unidades: "",
      valor: "",
      estado: "",
      categoria_idcategoria: "",
      //imagen modal
      file: null,
      profileImg: "dist/img/user2-160x160.jpg",
      fileName: "",
      //validation
      validationNombre: "",
      validationDescripcion: "",
      validationUnidades: "",
      validationValor: "",
      validationEstado: "",
      validationFile: "",
      validationCategoria: "",
    };
    this.imageHandler = this.imageHandler.bind(this);
  }
  header = [
    { title: "Nombre", prop: "nombre", sortable: true, filterable: true },
    { title: "Descripcion", prop: "descripcion", sortable: true },
    { title: "Unidades", prop: "unidades", sortable: true },
    { title: "Valor", prop: "valor", sortable: true },
    { title: "categoria", prop: "catNombre", sortable: true },
    {
      title: "Acciones",
      cell: (row) => (
        <div>
          <div className="btn-group">
           
            <Link
              className="btn fas fa-edit btn-warning"
              to={"/edit/" + row.idProducto}
              
            ></Link>
            <button
              className="btn  btn-danger"
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
    this.setState({ file: null });
    this.setState({ fileName: "" });
    this.setState({ profileImg: "dist/img/user2-160x160.jpg" });
    //validaciones
    this.setState({ validationNombre: "" });
    this.setState({ validationDescripcion: "" });
    this.setState({ validationUnidades: "" });
    this.setState({ validationValor: "" });
    this.setState({ validationEstado: "" });
    this.setState({ validationFile: "" });
    this.setState({ validationCategoria: "" });
  }
  //Funciones Crud
  validationModal() {
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

    if (validationOK === true) {
      this.sendSave();
    }
  }
  sendSave() {
    const formData = new FormData();
    formData.append("nombre", this.state.nombre);
    formData.append("descripcion", this.state.descripcion);
    formData.append("unidades", this.state.unidades);
    formData.append("valor", this.state.valor);
    formData.append("categoria_idcategoria", this.state.categoria_idcategoria);
    formData.append("file", this.state.file);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    const baseUrl = "http://localhost:3000/producto";
    axios
      .post(baseUrl, formData, config)
      .then((response) => {
        if (response.status === 201) {
          Swal.fire("Creado!", "Se ha creado el registro.", "success");
          this.loadProducts(); //para recargar
          this.CleanCreateForm();
        } else {
          Swal.fire("Error!", "Se ha producido un error.", "error");
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
  Toast() {
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
    const url = baseUrl + "/producto";
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
            const data = responseOne.data.body;
            const data2 = responseTwo.data;
            this.setState({ listProducts: data, dataCategoria: data2.body });
          } else {
            alert("Error web service");
          }
        })
      )
      .catch((errors) => {
        alert("Error server " + errors);
      });
  }
  imageHandler(e) {
    this.setState({ fileName: e.target.value });
    this.setState({ file: e.target.files[0] });
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ profileImg: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  }
  render() {
    const { profileImg } = this.state;

    const options = [];
    for (let j = 0; j < this.state.dataCategoria.length; j++) {
      options.push(
        <option
          value={this.state.dataCategoria[j].idcategoria}
          key={this.state.dataCategoria[j].idcategoria}
        >
          {this.state.dataCategoria[j].nombre}
        </option>
      );
    }

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
                        htmlFor="ValorCreate"
                        className="col-sm-2 col-form-label"
                      >
                        Imagen
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="file"
                          className={`form-control ${this.state.validationFile}`}
                          name="myImage"
                          value={this.state.fileName}
                          onChange={this.imageHandler}
                          accept="image/*"
                        />

                        <span
                          id="inputImagenCreate-error"
                          className="error invalid-feedback"
                        >
                          Ingrese una imagen
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
                          {options}
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
                  <div className="col-4">
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
                  onClick={() => this.validationModal()}
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
          classes={classes}
        />
      </div>
    );
  }
}
export default menuComponent;
