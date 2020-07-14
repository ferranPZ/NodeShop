import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";
import axios from "axios";

import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

class tableComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listUsuario: [],
    };
  }

  componentDidMount() {
    this.loadUsuario();
  }

  loadUsuario() {
    axios
      .get("http://192.168.0.3:3000/usuario/list")
      .then((res) => {
        if (res.data.success) {
          const data = res.data.data;
          this.setState({ listUsuario: data });
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
            <th scope="col">Roles</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Phone</th>
            <th colSpan="2">Action</th>
          </tr>
        </thead>
        <tbody>{this.loadFillData()}</tbody>
      </table>
    );
  }

  loadFillData() {
    return this.state.listUsuario.map((data, index) => {
      return (
        <tr key={index}>
          <th>{data.id}</th>
          <td>{data.role.role}</td>
          <td>{data.name}</td>
          <td>{data.email}</td>
          <td>{data.address}</td>
          <td>{data.phone}</td>
          <td>
            <Link className="btn btn-outline-info " to={"/edit/" + data.id}>
              Edit id:{data.id}
            </Link>
          </td>
          <td>
            <button
              className="btn btn-outline-danger"
              onClick={() => this.onDelete(data.id)}
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
        this.sendDelete(id);
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

export default tableComponent;
