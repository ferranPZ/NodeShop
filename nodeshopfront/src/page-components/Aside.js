//DEPENDENCES
import React from "react";
import { Link, Redirect} from "react-router-dom";
import axios from 'axios';
import config from '../config'
import { withRouter } from "react-router";
import swal from 'sweetalert';
import $ from 'jquery'; 



//components
import PageLoading from './PageLoading'



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
      user: JSON.parse(sessionStorage.getItem('myData')) || undefined ,
      showOptionsAccount:false,
      redirect:false
    };

    console.log("setea usr");
    console.log(JSON.parse(sessionStorage.getItem('myData')));


  }


  handleOnSubmit = async (e)=>{ 

    this.setState({
        error:null,
        loading:true
    })

    try {
        const data = await axios.post(`${config.api.host}:${config.api.port}/login`, { nombre: this.state.email, password: this.state.pass })
        await this.setData(data.data.body)
        this.setState({
            error:null,
            loading:false,
        })
        swal("Hola Administrador!", "Login exitoso 😉", "success");
    } catch (error) {
        swal("Error", "Datos incorrectos 😕", "error");
        this.setState({
            error:true,
            loading:false
        })
    }



  }
  componentDidMount(){
    this.setState({redirect:false})
    console.log("paso por aqio")
    $(document).on('shown.lte.pushmenu', function () {
        $('#login').show();
        console.log("hola")
    }).on('collapsed.lte.pushmenu', function(){
        $('#login').hide();
        console.log("hola")
    });

  }

  componentDidUpdate(){
    console.log("actualizacion");
    if(this.state.redirect){
      this.setState({redirect:false})
    }
  }

  handleOnChange = (e)=>{
    this.setState({
      [e.target.name] : e.target.value 
    })
  }

  defaultProfilePic = (e)=>{
    e.target.src = "dist/img/user2-160x160.jpg"
  }


  render() {
    if (this.state.loading) {
      return(
        <PageLoading />
      )
    }

    if (this.state.redirect) {
      return <Redirect to='/'/>;
    }

    console.log("render");
    if (this.state.loading === true) {
      return(
         <h1>cargando..</h1>
      )}


    //USUARIO_ADMIN

    //si existe un admin, muestra panel de admin con su info
    if(sessionStorage.getItem('JWT') && (sessionStorage.getItem('myData') && this.state.user)){
      console.log(" es admin");
    return (
      <div>
        {/* Main Sidebar Container */}
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
          {/* Brand Logo */}
          <Link to="/" className="brand-link">
          <i className="fas fa-robot"></i>
            <span className="brand-text font-weight-light"> ElectroStore </span>
          </Link>

         

          {/* Sidebar */}
          <div className="ownbar">
            {/* Sidebar user panel (optional) */}
    
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
              <div className="image">
                <img
                  //src={"dist/img/user2-160x160.jpg"}
                  src={"http://localhost:3000/app/profpic/"+this.state.user.fotoperfil}
                  onError={this.defaultProfilePic}
                  className="img-circle elevation-2 imgProfile"
                  alt="UserImage"
                />
              </div>

         
              <div className="info">
                <Link to="/" className="d-block text-white inactiveLink">
                  <h4>
                  <p className="mt-2">{this.state.user.nombre}</p>
                  </h4>
                  
                </Link>
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

                  <ul id="AccountOptions" className="nav nav-treeview" style={(this.state.showOptionsAccount)?{ display: "" }:{ display: "none" }  }>
                    asdasdasd
                  </ul>
                </li>

                <li className="nav-item has-treeview menu-closed">
                  <Link to="fake_url" className="nav-link active">
                    <i className="nav-icon fas fa-user" />
                    <p>
                      Cuenta
                      <i className="right fas fa-angle-left" />
                    </p>
                  </Link>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                    
                      <div className="nav-link" onClick={this.logOut}> 
                            Cerrar sesión
                      </div>
                    </li>
                    <li className="nav-item">
                    
                      <div className="nav-link" > 
                            Mi Perfil
                      </div>
                    </li>

                    {/* <li>

                      <Link to="fake_url" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Dashboard v1</p>
                      </Link>
                    </li>
                     */}
                  </ul>
                </li>
           
                <li className="nav-item has-treeview">
                  <Link to="fake_url" className="nav-link">
                    <i className="nav-icon fas fa-sitemap" />
                    <p>
                      Gestion de productos
                      <i className="fas fa-angle-left right" />
                    </p>
                  </Link>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <Link className="nav-link brand-text" to="/menu">
                        Modificar
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
       console.log(" es invitado");
      return (
      
        <div>
          {/* Main Sidebar Container */}
          <aside className="main-sidebar sidebar-dark-primary elevation-4">
            {/* Brand Logo */}
            <Link to="fake_url" className="brand-link">
              <img
                src="dist/img/AdminLTELogo.png"
                alt="AdminLTE Logo"
                className="brand-image img-circle elevation-3"
                style={{ opacity: ".8" }}
              />
              <span className="brand-text font-weight-light">Electro  Store</span>
            </Link>
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
                    <Link to="#" className="nav-link">
                      <i className="nav-icon fas fa-user" />
                      <p>
                        Iniciar session
                        <i className="fas fa-angle-left right" />
                      </p>
                    </Link>
                    <ul className="nav nav-treeview " style={{ display: "none" }}>
                      <li className="nav-item  brand-text" id="login" >
                        <div className="form-group">
                          <p className="brand-text font-weight-light text-white">Correo</p>
                          <input
                            name="email"
                            type="email"
                            className="form-control"
                            id="inputLogin"
                            placeholder="ingresa tu email"
                            onChange={this.handleOnChange} 
                            value={this.state.email}
                            onKeyPress={this.handleKeyPress}
                          />
                        </div>
                        <div className="form-group">
                          <p className="text-white">Contraseña</p>
                          <input
                            name="pass"
                            type="password"
                            className="form-control"
                            id="inputLogin"
                            placeholder="ingresa tu contraseña"
                            onChange={this.handleOnChange}
                            value={this.state.pass}
                            onKeyPress={this.handleKeyPress}
                          />
                        </div>
               

                        <div>
                          <button onClick={this.handleOnSubmit} type="submit" className="btn btn-primary mb-2"  >
                            Ingresar
                          </button>
                          <p className="mb-1">
                            <Link to="forgot-password.html">
                              Olvidaste tu contraseña?
                            </Link>
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

  handleKeyPress = (event)=>{
    if(event.key === 'Enter'){
      this.handleOnSubmit()
    }
  }

  logOut = ()=>{
    this.setState({user:undefined})  
    sessionStorage.clear();
    this.setState({ redirect: true });
    // redirigir a home 
  }

  setData = async (TOKEN)=> {
    //si las credenciales son correctas, se crea sesion(token y datos de usario)
    try {
      let usr = await this.getUser(TOKEN)
      sessionStorage.setItem('JWT',TOKEN);
      sessionStorage.setItem('myData',JSON.stringify(usr.body));
      this.setState({user:usr.body})
      console.log("seteo usr en state");
      console.log("usr:",this.state.user);
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
