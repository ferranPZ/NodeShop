//DEPENDENCES
import React from "react";
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';


import config from '../config'
import { timers } from "jquery";

//ASSETS
import './styles/Aside.css'


class Aside extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email:'',
      pass:'',
      loading:false,
      error:null,
      user:undefined,
      showOptionsAccount:false
    };
  }

  componentDidMount(){
    if (sessionStorage.getItem('JWT') && sessionStorage.getItem('myData')) {

        this.setState({user:JSON.parse(sessionStorage.getItem('myData'))})
      
    }
  }

  
  handleOnSubmit = async (e)=>{ 

    this.setState({
        error:null,
        loading:true
    })

    try {
        const data = await axios.post(`${config.api.host}:${config.api.port}/login`, { nombre: this.state.email, password: this.state.pass })
        this.setState({
            error:null,
            loading:false,
        })
        this.setData(data.data.body)
    } catch (error) {
        this.setState({
            error:true,
            loading:false
        })
    }





  }

  handleOnChange = (e)=>{
    this.setState({
      [e.target.name] : e.target.value 
    })
  }


  render() {

    if (this.state.loading === true) {
      return(
         <h1>cargando..</h1>
      )}


    //USUARIO_ADMIN

    //si existe un admin, muestra panel de admin con su info
    if(sessionStorage.getItem('JWT') && (sessionStorage.getItem('myData') && this.state.user)){
    return (
      <div>
        {/* Main Sidebar Container */}
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
          {/* Brand Logo */}
          <a href="fake_url" className="brand-link">
            <img
              src="dist/img/AdminLTELogo.png"
              alt="AdminLTE Logo"
              className="brand-image img-circle elevation-3"
              style={{ opacity: ".8" }}
            />
            <span className="brand-text font-weight-light">Electro  Store</span>
          </a>
          {/* Sidebar */}
          <div className="sidebar">
            {/* Sidebar user panel (optional) */}
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
              <div className="image">
                <img
                  src="dist/img/user2-160x160.jpg"
                  className="img-circle elevation-2"
                  alt="UserImage"
                />
              </div>
              <div className="info">
                <a href="fake_url" className="d-block">
                  {this.state.user.nombre}
                </a>
              </div>
            </div>
            {/* Sidebar Menu */}
            <nav className="mt-2">
              <ul
                className="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
              >
                {/* Add icons to the links using the .nav-icon class
       with font-awesome or any other icon font library */}

                {/* <li className="nav-item has-treeview mb-3">
                  <button onClick={ () => this.setData()}>Set Data</button> 
                </li> */}

                <li className="nav-item has-treeview mb-3">
                  
                {/* APRENDER A HACER NAVBARS EN REAAAACT  !!! */}
                  {/* <div onClick={ ()=>{console.log("funciona")}}>                     
                    <div className="nav-link">
                      <i className="nav-icon fas fa-user" />
                      <p>
                        Cuenta
                        <i className="fas fa-angle-left right" />
                      </p>
                    </div>
                  </div>

                  <div onClick={()=>{this.setState({showOptionsAccount:!this.state.showOptionsAccount})}}> 
                    Cuenta 2
                  </div> */}

                  <button onClick={this.logOut}> 
                        Cerrar sesión
                  </button>
                  

              

                  <ul id="AccountOptions" className="nav nav-treeview" style={(this.state.showOptionsAccount)?{ display: "" }:{ display: "none" }  }>
                    asdasdasd
                  </ul>
                </li>

                <li className="nav-item has-treeview menu-closed">
                  <a href="fake_url" className="nav-link active">
                    <i className="nav-icon fas fa-tachometer-alt" />
                    <p>
                      Dashboard
                      <i className="right fas fa-angle-left" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <a href="fake_url" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Dashboard v1</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="fake_url" className="nav-link active">
                        <i className="far fa-circle nav-icon" />
                        <p>Dashboard v2</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="fake_url" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Dashboard v3</p>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="fake_url" className="nav-link">
                    <i className="nav-icon fas fa-th" />
                    <p>
                      Widgets
                      <span className="right badge badge-danger">New</span>
                    </p>
                  </a>
                </li>

                <li className="nav-item has-treeview">
                  <a href="fake_url" className="nav-link">
                    <i className="nav-icon fas fa-user" />
                    <p>
                      Administrador
                      <i className="fas fa-angle-left right" />
                      <span className="badge badge-info right">6</span>
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <Link className="nav-link" to="/menu">
                        Gestionar Productos
                      </Link>
                    </li>
                  </ul>
                </li>

              </ul>
            </nav>
            {/* /.sidebar-menu */}
          </div>
          {/* /.sidebar */}
        </aside>
      </div>
    );
    }else{
      //USUARIO_INVITADO
      return (
        <div>
          {/* Main Sidebar Container */}
          <aside className="main-sidebar sidebar-dark-primary elevation-4">
            {/* Brand Logo */}
            <a href="fake_url" className="brand-link">
              <img
                src="dist/img/AdminLTELogo.png"
                alt="AdminLTE Logo"
                className="brand-image img-circle elevation-3"
                style={{ opacity: ".8" }}
              />
              <span className="brand-text font-weight-light">Electro  Store</span>
            </a>
            {/* Sidebar */}
            <div className="sidebar">
              {/* Sidebar user panel (optional) */}
       
              {/* Sidebar Menu */}
              <nav className="mt-2">
                <ul
                  className="nav nav-pills nav-sidebar flex-column"
                  data-widget="treeview"
                  role="menu"
                  data-accordion="false"
                >
                  

  
                  <li className="nav-item has-treeview mb-3">
                    <a href="#" className="nav-link">
                      <i className="nav-icon fas fa-user" />
                      <p>
                        Iniciar session
                        <i className="fas fa-angle-left right" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview" style={{ display: "none" }}>
                      <li className="nav-item">
                        <div className="form-group">
                          <p className="text-white">Correo</p>
                          <input
                            name="email"
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder="ingresa tu email"
                            onChange={this.handleOnChange} 
                            value={this.state.email}
                          />
                        </div>
                        <div className="form-group">
                          <p className="text-white">Contraseña</p>
                          <input
                            name="pass"
                            type="password"
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder="ingresa tu contraseña"
                            onChange={this.handleOnChange}
                            value={this.state.pass}
                          />
                        </div>
                        <div>
                          <button onClick={this.handleOnSubmit} type="submit" className="btn btn-primary mb-2">
                            Ingresar
                          </button>
                          <p className="mb-1">
                            <a href="forgot-password.html">
                              Olvidaste tu contraseña?
                            </a>
                          </p>
                        </div>
                      </li>
                    </ul>
                  </li>
  
           
  
  
                </ul>
              </nav>
              {/* /.sidebar-menu */}
            </div>
            {/* /.sidebar */}
          </aside>
        </div>
      );

    }

  }

  getUser = async(TOKEN)=>{

    this.setState({
      error:null,
      loading:true
    })

   try {
      const res = await axios.get(`${config.api.host}:${config.api.port}/login`, {
        headers: {
          'Authorization': `Bearer ${TOKEN}`
      }
      });
      if (res) {
        this.setState({
          error:null,
          loading:false,
        })
        return res.data;
      }
    } catch (error) {
      this.setState({
        error:error,
        loading:false
      })
      return error;
    }
  
  }



  logOut = ()=>{
    this.setState({loading:false})  
    sessionStorage.clear();
    

  }

  setData = async (TOKEN)=> {
    //si las credenciales son correctas, se crea sesion(token y datos de usario)
    try {
      let usr = await this.getUser(TOKEN)
      sessionStorage.setItem('JWT',TOKEN);
      sessionStorage.setItem('myData',JSON.stringify(usr.body));

      this.setState({user:usr})
    } catch (error) {
      console.error(error)
      this.setState({error:error})
    }
    
   

    // .then(res=>{
    //   console.log("usuario:", res)
    // })
    // .catch(error=>{
    //   console.error(error);
    // })
    //
    

  
 
}
}

export default Aside;
