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
 
















//Funciones CRUD
function onDelete(id) {
  Swal.fire({
    title: "Are you sure?",
    text: "You will not be able to recover this imaginary file!",
    //  type: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, delete it!",
    cancelButtonText: "No, keep it",
  }).then((result) => {
    if (result.value) {
      sendDelete(id);
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire("Cancelled", "Your imaginary file is safe :)", "error");
    }
  });
}
function sendDelete(idProducto) {
  // url de backend
  const baseUrl = "http://localhost:3000/producto/delete"; // parameter data post
  // network
  axios
    .post(baseUrl, {
      id: idProducto,
    })
    .then((response) => {
      if (response.data.success) {
        Swal.fire("Deleted!", "Your employee has been deleted.", "success");
        this.loadProducts(); //para recargar
      }
    })
    .catch((error) => {
      alert("Error 325 ");
    });
}

 

class menuComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listProducts: [],
      campName: "felipe",
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
            <button
              className="btn-sm btn-warning"
              data-toggle="modal"
              data-target="#exampleModalUpdate"
              onClick={(e) =>  this.EditRow(row, e)}
            >  
              <i className="fas fa-edit"></i>
            </button>
            <button
              className="btn-sm btn-danger"
              onClick={(e) => onDelete(row.idProducto, e)}
            >
              <i className="fas fa-trash"></i>
            </button>
          </div>
        </div>
      ),
    },
  ];

  EditRow(row, e) {
    this.setState({
      campName: row.idProducto,
      //{this.state.campName}  esto va en el modal
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

  render() {
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
                  Modal crear
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

                <div className="form-group row">
                  <label
                    htmlFor="inputEmail3"
                    className="col-sm-2 col-form-label"
                  >
                    idProducto
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail3"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="inputEmail3"
                    className="col-sm-2 col-form-label"
                  >
                    nombre
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail3"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="inputEmail3"
                    className="col-sm-2 col-form-label"
                  >
                    descripcion
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail3"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="inputEmail3"
                    className="col-sm-2 col-form-label"
                  >
                    unidades
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail3"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="inputEmail3"
                    className="col-sm-2 col-form-label"
                  >
                    valor
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail3"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="inputEmail3"
                    className="col-sm-2 col-form-label"
                  >
                    estado
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail3"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="inputEmail3"
                    className="col-sm-2 col-form-label"
                  >
                    imagen
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail3"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="inputEmail3"
                    className="col-sm-2 col-form-label"
                  >
                    categoria_idcategoria
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail3"
                      placeholder="Email"
                    />
                  </div>
                </div>

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
        {/* Modal Editar*/}
        <div
          className="modal fade"
          id="exampleModalUpdate"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalUpdateTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle"
                >
                  Modal Editar 
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

                <div className="form-group row">
                  <label
                    htmlFor="inputEmail3"
                    className="col-sm-2 col-form-label"
                  >
              
                  </label>
       

                  <div className="form-group row">
                  <label
                    htmlFor="inputEmail3"
                    className="col-sm-2 col-form-label"
                  >
                    idProducto
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail3"
                      placeholder="Email"
                      value={this.state.campName}
                      onChange={(value) =>
                        this.setState({ campName: value.target.value })
                      }
                    />
                    
                  </div>
                </div>




                </div>
  
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
