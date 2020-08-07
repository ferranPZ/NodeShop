import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";
const baseUrl = "http://localhost:3000";

class EditComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataProducto: {},
      nombre: "",
       
    };
  }

  componentDidMount() {
    let idProducto = this.props.match.params.id;
    const url = baseUrl + "/producto?id=" + idProducto;
    axios
      .get(url)
      .then((res) => {
        if (res.status === 200 ) {
          const data = res.data.body[0];
          this.setState({
            dataUsuario: data,
            nombre: data.nombre,
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
    return (
      <div>
        <div className="form-row justify-content-center">
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4">Nombre</label>
            <input
              type="text"
              className="form-control"
              placeholder="Nombre"
              value={this.state.nombre}
              onChange={(value) =>
                this.setState({ nombre: value.target.value })
              }
            />
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => this.sendUpdate()}
        >
          Update
        </button>
      </div>
    );
  }

  sendUpdate() {
    // get parameter id
    let userId = this.props.match.params.usuarioId;
    // url de backend
    const baseUrl = "http://localhost:3000/usuario/update/" + userId;

    // parameter data post
    const datapost = {
      name: this.state.campName,
      email: this.state.campEmail,
      phone: this.state.campPhone,
      address: this.state.campAddress,
      role: this.state.selectRole,
    };

    axios
      .post(baseUrl, datapost)
      .then((response) => {
        if (response.data.success) {
          alert(response.data.message);
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
