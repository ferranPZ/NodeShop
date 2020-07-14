import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";
const baseUrl = "http://localhost:3000";

class EditComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataUsuario: {},
      campName: "",
      campEmail: "",
      campPhone: "",
      campAddress: "",
      stringRole: "",
      selectRole: 0,
    };
  }

  componentDidMount() {
    // parametro de id del usuario
    let userId = this.props.match.params.usuarioId;

    // http://localhost:3000/usuario/get/4

    // const url = baseUrl+"/usuario/get/"+userId
    //  axios.get(url)
    const url = baseUrl + "/usuario/get/" + userId;

    axios
      .get(url)
      .then((res) => {
        if (res.data.success) {
          const data = res.data.data[0];
          this.setState({
            dataUsuario: data,
            campName: data.name,
            campEmail: data.email,
            campPhone: data.phone,
            campAddress: data.address,
            stringRole: data.role.role,
            selectRole: data.roleId,
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
            <label htmlFor="inputPassword4">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              value={this.state.campName}
              onChange={(value) =>
                this.setState({ campName: value.target.value })
              }
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={this.state.campEmail}
              onChange={(value) =>
                this.setState({ campEmail: value.target.value })
              }
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputState">Role </label>
            <select
              id="inputState"
              className="form-control"
              onChange={(value) =>
                this.setState({ selectRole: value.target.value })
              }
            >
              <option defaultValue={this.state.dataUsuario.roleId}>
                {this.state.stringRole}
              </option>
              <option value="1">Admin</option>
              <option value="2">Project Manager</option>
              <option value="3">Programer</option>
            </select>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">Phone</label>
            <input
              type="number"
              className="form-control"
              placeholder="Phone"
              value={this.state.campPhone}
              onChange={(value) =>
                this.setState({ campPhone: value.target.value })
              }
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress">Address</label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
            value={this.state.campAddress}
            onChange={(value) =>
              this.setState({ campAddress: value.target.value })
            }
          />
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
