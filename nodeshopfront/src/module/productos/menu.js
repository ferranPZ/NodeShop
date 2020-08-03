import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";
import axios from "axios";

import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

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
      <table className="table table-hover table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th colSpan="2">Action</th>
          </tr>
        </thead>
        <tbody>{this.loadFillData()}</tbody>
      </table>
    );
  }

  loadFillData() {
    return this.state.listProducts.map((data, index) => {
      return (
        <tr key={index}>
          <th>{data.idProducto}</th>
          <th>{data.nombre}</th>
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
}

export default menuComponent;
