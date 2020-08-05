import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";
import axios from "axios";

import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

import moment from "moment";
import Datatable from "react-bs-datatable";


const header = [
  {
    title: "Username",
    prop: "username",
    sortable: true,
    filterable: true,
  },
  { title: "Name", prop: "realname", sortable: true },
  { title: "Location", prop: "location" },
  {
    title: 'Image', prop: 'image',
    cell: row => (<img height="32x" width="64px" alt={row.image} src={row.image} />),
  },
  { title: "Last Updated", prop: "date", sortable: true },
  {
    title: "Acciones",
    cell: (row) => (
      <div>
        {" "}
        <button
          className="btn-sm btn-danger"
          onClick={(e) => deleteRow(row.idProducto, e)}
        >
         <i className="fas fa-trash"></i>
        </button>
        <button
          className="btn-sm btn-warning"
          onClick={(e) => deleteRow(row.idProducto, e)}
        >
          <i className="fas fa-edit"></i>
         
        </button>
      </div>
    ),
  },
];

function deleteRow(idProducto, e) {
  e.preventDefault();
  console.log(idProducto);
}

/*
const body =[
  {
    idProducto: "1",
    username: "i-am-billy",
    realname: `Billy Numero `,
    location: "Mars",
    date: moment().subtract(1, "days").format("Do MMMM YYYY")
  },
]
*/

const body = Array.from(new Array(57), () => {
  const rd = (Math.random() * 20).toFixed(1);

  return {
    idProducto: `${rd}`,
    username: `Billy  ${rd}`,
    realname: `Billy Numero ${rd}`,
    location: `Casa  ${rd + rd + 5}`,
    image: "https://picsum.photos/200",
    date: moment().subtract(`${rd}`, "days").format("Do MMMM YYYY"),
  };
});

const classes = {
  table: 'table table-dark table-bordered responsive{-sm|-md}',
};
const onSortFunction = {
  date(columnValue) {
    // Convert the string date format to UTC timestamp
    // So the table could sort it by number instead of by string
    return moment(columnValue, "Do MMMM YYYY").valueOf();
  },
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
       
       
       
       
        <Datatable
          tableHeaders={header}
          tableBody={body}
          rowsPerPage={5}
          rowsPerPageOption={[5, 10, 30]}
          initialSort={{ prop: "username", isAscending: true }}
          onSort={onSortFunction}
          classes={classes}
        />

     
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
