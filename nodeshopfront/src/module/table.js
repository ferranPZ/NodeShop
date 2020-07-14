import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";
import axios from "axios";

class tableComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listUsuario: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://192.168.0.3:3000/usuario/list")
      .then((res) => {
        const data = res.data.data;
        this.setState({ listUsuario: data });
      })
      .catch((error) => {
        alert(error);
      });
  }

  /*
  componentDidMount() {
    const url ="http://192.168.0.3:3000/usuario/list"
    axios
      .get(url)
      .then((res) => {
        if (res.data.success) {
          const data = res.data;
          this.setState({ listUsuario: data });
        } else {
          alert("error web service");
        }
      })
      .catch((error) => {
        alert("error server" + error);
      });
  }
*/
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
          <button className="btn btn-outline-danger" onClick={()=>this.onDelete(data.id)}> Delete </button>
          </td>
        </tr>
      );
    });
  }
}

export default tableComponent;
