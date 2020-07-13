import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";

class tableComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      listUsuario:[]
    }
  }

  componentDidMount(){

    axios.get("http://192.168.0.3:3000/usuario/list")
    .then(res => {
      const data = res.data.data;
      this.setState({ listUsuario:data });
    })
    .catch(error => {
      alert(error)
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
      <table class="table table-hover table-striped">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Roles</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Phone</th>
            <th colspan="2">Action</th>
          </tr>
        </thead>
        <tbody>
 
          {this.loadFillData()}
        </tbody>
      </table>
    );
  }

  loadFillData(){

    return this.state.listUsuario.map((data)=>{
      return(
        <tr>
          <th>{data.id}</th>
          <td>{data.role.role}</td>
          <td>{data.name}</td>
          <td>{data.email}</td>
          <td>{data.address}</td>
          <td>{data.phone}</td>
          <td>
            <button class="btn btn-outline-info "> Edit </button>
          </td>
          <td>
            <button class="btn btn-outline-danger "> Delete </button>
          </td>
        </tr>
      )
    });
  }

}

 


export default tableComponent;
