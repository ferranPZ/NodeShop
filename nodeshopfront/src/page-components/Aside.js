import React from "react";
import { Link } from "react-router-dom";
class Aside extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
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
            <span className="brand-text font-weight-light">AdminLTE 3</span>
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
                  Alexander Pierce
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

                <li className="nav-item has-treeview mb-3">
                  <button onClick={ () => this.setData()}>Set Data</button> 
                </li>

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
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          placeholder="Enter email"
                        />
                      </div>
                      <div className="form-group">
                        <p className="text-white">Contraseña</p>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          placeholder="Enter email"
                        />
                      </div>
                      <div>
                        <button type="submit" className="btn btn-primary mb-2">
                          Submit
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
  }

  setData() {
  
    let obj = {name: 'Felipe', age:'26', email:'a@gmail.com' };
    sessionStorage.setItem('myData', JSON.stringify(obj));
  }
 
}

export default Aside;
