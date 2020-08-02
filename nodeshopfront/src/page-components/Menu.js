import React, { PureComponent } from "react";
 
import Show_productos from "../module/productos/show";

class Test extends PureComponent {
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
        <a href="index3.html" className="brand-link">
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
              <a href="" className="d-block">
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
              <li className="nav-item has-treeview menu-open">
                <a href="#" className="nav-link active">
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p>
                    Dashboard
                    <i className="right fas fa-angle-left" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="./index.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Dashboard v1</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="./index2.html" className="nav-link active">
                      <i className="far fa-circle nav-icon" />
                      <p>Dashboard v2</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="./index3.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Dashboard v3</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="pages/widgets.html" className="nav-link">
                  <i className="nav-icon fas fa-th" />
                  <p>
                    Widgets
                    <span className="right badge badge-danger">New</span>
                  </p>
                </a>
              </li>
              <li className="nav-item has-treeview">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-copy" />
                  <p>
                    Layout Options
                    <i className="fas fa-angle-left right" />
                    <span className="badge badge-info right">6</span>
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="pages/layout/top-nav.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Top Navigation</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="pages/layout/top-nav-sidebar.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>Top Navigation + Sidebar</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/layout/boxed.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Boxed</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="pages/layout/fixed-sidebar.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>Fixed Sidebar</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="pages/layout/fixed-topnav.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>Fixed Navbar</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="pages/layout/fixed-footer.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>Fixed Footer</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="pages/layout/collapsed-sidebar.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>Collapsed Sidebar</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item has-treeview">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-chart-pie" />
                  <p>
                    Charts
                    <i className="right fas fa-angle-left" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="pages/charts/chartjs.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>ChartJS</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/charts/flot.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Flot</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/charts/inline.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Inline</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item has-treeview">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-tree" />
                  <p>
                    UI Elements
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="pages/UI/general.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>General</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/UI/icons.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Icons</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/UI/buttons.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Buttons</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/UI/sliders.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Sliders</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/UI/modals.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Modals &amp; Alerts</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/UI/navbar.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Navbar &amp; Tabs</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/UI/timeline.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Timeline</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/UI/ribbons.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Ribbons</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item has-treeview">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-edit" />
                  <p>
                    Forms
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="pages/forms/general.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>General Elements</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/forms/advanced.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Advanced Elements</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/forms/editors.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Editors</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="pages/forms/validation.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>Validation</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item has-treeview">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-table" />
                  <p>
                    Tables
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="pages/tables/simple.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Simple Tables</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/tables/data.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>DataTables</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/tables/jsgrid.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>jsGrid</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-header">EXAMPLES</li>
              <li className="nav-item">
                <a href="pages/calendar.html" className="nav-link">
                  <i className="nav-icon fas fa-calendar-alt" />
                  <p>
                    Calendar
                    <span className="badge badge-info right">2</span>
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/gallery.html" className="nav-link">
                  <i className="nav-icon far fa-image" />
                  <p>Gallery</p>
                </a>
              </li>
              <li className="nav-item has-treeview">
                <a href="#" className="nav-link">
                  <i className="nav-icon far fa-envelope" />
                  <p>
                    Mailbox
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="pages/mailbox/mailbox.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Inbox</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/mailbox/compose.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Compose</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="pages/mailbox/read-mail.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>Read</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item has-treeview">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-book" />
                  <p>
                    Pages
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a
                      href="pages/examples/invoice.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>Invoice</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="pages/examples/profile.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>Profile</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="pages/examples/e-commerce.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>E-commerce</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="pages/examples/projects.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>Projects</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="pages/examples/project-add.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>Project Add</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="pages/examples/project-edit.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>Project Edit</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="pages/examples/project-detail.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>Project Detail</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="pages/examples/contacts.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>Contacts</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item has-treeview">
                <a href="#" className="nav-link">
                  <i className="nav-icon far fa-plus-square" />
                  <p>
                    Extras
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="pages/examples/login.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Login</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="pages/examples/register.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>Register</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="pages/examples/forgot-password.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>Forgot Password</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="pages/examples/recover-password.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>Recover Password</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="pages/examples/lockscreen.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>Lockscreen</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="pages/examples/legacy-user-menu.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>Legacy User Menu</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="pages/examples/language-menu.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>Language Menu</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/examples/404.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Error 404</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/examples/500.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Error 500</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/examples/pace.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Pace</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/examples/blank.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Blank Page</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="starter.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Starter Page</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-header">MISCELLANEOUS</li>
              <li className="nav-item">
                <a href="https://adminlte.io/docs/3.0" className="nav-link">
                  <i className="nav-icon fas fa-file" />
                  <p>Documentation</p>
                </a>
              </li>
              <li className="nav-header">MULTI LEVEL EXAMPLE</li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="fas fa-circle nav-icon" />
                  <p>Level 1</p>
                </a>
              </li>
              <li className="nav-item has-treeview">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-circle" />
                  <p>
                    Level 1
                    <i className="right fas fa-angle-left" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Level 2</p>
                    </a>
                  </li>
                  <li className="nav-item has-treeview">
                    <a href="#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>
                        Level 2
                        <i className="right fas fa-angle-left" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          <i className="far fa-dot-circle nav-icon" />
                          <p>Level 3</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          <i className="far fa-dot-circle nav-icon" />
                          <p>Level 3</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          <i className="far fa-dot-circle nav-icon" />
                          <p>Level 3</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Level 2</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="fas fa-circle nav-icon" />
                  <p>Level 1</p>
                </a>
              </li>
              <li className="nav-header">LABELS</li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon far fa-circle text-danger" />
                  <p className="text">Important</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon far fa-circle text-warning" />
                  <p>Warning</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon far fa-circle text-info" />
                  <p>Informational</p>
                </a>
              </li>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>

      {/* Content Wrapper. Contains page content */}
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">Dashboard v2</h1>
              </div>
              {/* /.col */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Dashboard v2</li>
                </ol>
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </div>
        {/* /.content-header */}
        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            {/* Info boxes */}
            <div className="row">
              <div className="col-12 col-sm-6 col-md-3">
                <div className="info-box">
                  <span className="info-box-icon bg-info elevation-1">
                    <i className="fas fa-cog" />
                  </span>
                  <div className="info-box-content">
                    <span className="info-box-text">CPU Traffic</span>
                    <span className="info-box-number">
                      10
                      <small>%</small>
                    </span>
                  </div>
                  {/* /.info-box-content */}
                </div>
                {/* /.info-box */}
              </div>
              {/* /.col */}
              <div className="col-12 col-sm-6 col-md-3">
                <div className="info-box mb-3">
                  <span className="info-box-icon bg-danger elevation-1">
                    <i className="fas fa-thumbs-up" />
                  </span>
                  <div className="info-box-content">
                    <span className="info-box-text">Likes</span>
                    <span className="info-box-number">41,410</span>
                  </div>
                  {/* /.info-box-content */}
                </div>
                {/* /.info-box */}
              </div>
              {/* /.col */}
              {/* fix for small devices only */}
              <div className="clearfix hidden-md-up" />
              <div className="col-12 col-sm-6 col-md-3">
                <div className="info-box mb-3">
                  <span className="info-box-icon bg-success elevation-1">
                    <i className="fas fa-shopping-cart" />
                  </span>
                  <div className="info-box-content">
                    <span className="info-box-text">Sales</span>
                    <span className="info-box-number">760</span>
                  </div>
                  {/* /.info-box-content */}
                </div>
                {/* /.info-box */}
              </div>
              {/* /.col */}
              <div className="col-12 col-sm-6 col-md-3">
                <div className="info-box mb-3">
                  <span className="info-box-icon bg-warning elevation-1">
                    <i className="fas fa-users" />
                  </span>
                  <div className="info-box-content">
                    <span className="info-box-text">New Members</span>
                    <span className="info-box-number">2,000</span>
                  </div>
                  {/* /.info-box-content */}
                </div>
                {/* /.info-box */}
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title">Productos</h5>
                    <div className="card-tools">
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="collapse"
                      >
                        <i className="fas fa-minus" />
                      </button>
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-tool dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          <i className="fas fa-wrench" />
                        </button>
                        <div
                          className="dropdown-menu dropdown-menu-right"
                          role="menu"
                        >
                          <a href="#" className="dropdown-item">
                            Action
                          </a>
                          <a href="#" className="dropdown-item">
                            Another action
                          </a>
                          <a href="#" className="dropdown-item">
                            Something else here
                          </a>
                          <a className="dropdown-divider" />
                          <a href="#" className="dropdown-item">
                            Separated link
                          </a>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="remove"
                      >
                        <i className="fas fa-times" />
                      </button>
                    </div>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">
                    
                     

{/* Productos aqui se llamará un template */}
 
           





<Show_productos/>











     

{/* Productos aqui se llamará un template */}

                  
                      
              
                       
                     
                    
                    {/* /.row */}
                  </div>
                  {/* ./card-body */}
                </div>
                {/* /.card */}
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
            {/* Main row */}
            <div className="row">
              {/* Left col */}
              <div className="col-md-8">
                <div className="row"></div>
                {/* /.row */}
                {/* TABLE: LATEST ORDERS */}
                <div className="card">
                  <div className="card-header border-transparent">
                    <h3 className="card-title">Latest Orders</h3>
                    <div className="card-tools">
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="collapse"
                      >
                        <i className="fas fa-minus" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="remove"
                      >
                        <i className="fas fa-times" />
                      </button>
                    </div>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body p-0">
                    <div className="table-responsive">
                      <table className="table m-0">
                        <thead>
                          <tr>
                            <th>Order ID</th>
                            <th>Item</th>
                            <th>Status</th>
                            <th>Popularity</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <a href="pages/examples/invoice.html">OR9842</a>
                            </td>
                            <td>Call of Duty IV</td>
                            <td>
                              <span className="badge badge-success">
                                Shipped
                              </span>
                            </td>
                            <td>
                              <div
                                className="sparkbar"
                                data-color="#00a65a"
                                data-height={20}
                              >
                                90,80,90,-70,61,-83,63
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a href="pages/examples/invoice.html">OR1848</a>
                            </td>
                            <td>Samsung Smart TV</td>
                            <td>
                              <span className="badge badge-warning">
                                Pending
                              </span>
                            </td>
                            <td>
                              <div
                                className="sparkbar"
                                data-color="#f39c12"
                                data-height={20}
                              >
                                90,80,-90,70,61,-83,68
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a href="pages/examples/invoice.html">OR7429</a>
                            </td>
                            <td>iPhone 6 Plus</td>
                            <td>
                              <span className="badge badge-danger">
                                Delivered
                              </span>
                            </td>
                            <td>
                              <div
                                className="sparkbar"
                                data-color="#f56954"
                                data-height={20}
                              >
                                90,-80,90,70,-61,83,63
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a href="pages/examples/invoice.html">OR7429</a>
                            </td>
                            <td>Samsung Smart TV</td>
                            <td>
                              <span className="badge badge-info">
                                Processing
                              </span>
                            </td>
                            <td>
                              <div
                                className="sparkbar"
                                data-color="#00c0ef"
                                data-height={20}
                              >
                                90,80,-90,70,-61,83,63
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a href="pages/examples/invoice.html">OR1848</a>
                            </td>
                            <td>Samsung Smart TV</td>
                            <td>
                              <span className="badge badge-warning">
                                Pending
                              </span>
                            </td>
                            <td>
                              <div
                                className="sparkbar"
                                data-color="#f39c12"
                                data-height={20}
                              >
                                90,80,-90,70,61,-83,68
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a href="pages/examples/invoice.html">OR7429</a>
                            </td>
                            <td>iPhone 6 Plus</td>
                            <td>
                              <span className="badge badge-danger">
                                Delivered
                              </span>
                            </td>
                            <td>
                              <div
                                className="sparkbar"
                                data-color="#f56954"
                                data-height={20}
                              >
                                90,-80,90,70,-61,83,63
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a href="pages/examples/invoice.html">OR9842</a>
                            </td>
                            <td>Call of Duty IV</td>
                            <td>
                              <span className="badge badge-success">
                                Shipped
                              </span>
                            </td>
                            <td>
                              <div
                                className="sparkbar"
                                data-color="#00a65a"
                                data-height={20}
                              >
                                90,80,90,-70,61,-83,63
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/* /.table-responsive */}
                  </div>
                  {/* /.card-body */}
                  <div className="card-footer clearfix">
                    <a
                      href=" "
                      className="btn btn-sm btn-info float-left"
                    >
                      Place New Order
                    </a>
                    <a
                      href=" "
                      className="btn btn-sm btn-secondary float-right"
                    >
                      View All Orders
                    </a>
                  </div>
                  {/* /.card-footer */}
                </div>
                {/* /.card */}
              </div>
              {/* /.col */}
              <div className="col-md-4">
                {/* PRODUCT LIST */}
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Recently Added Products</h3>
                    <div className="card-tools">
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="collapse"
                      >
                        <i className="fas fa-minus" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="remove"
                      >
                        <i className="fas fa-times" />
                      </button>
                    </div>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body p-0">
                    <ul className="products-list product-list-in-card pl-2 pr-2">
                      <li className="item">
                        <div className="product-img">
                          <img
                            src="dist/img/default-150x150.png"
                            alt="Product Image"
                            className="img-size-50"
                          />
                        </div>
                        <div className="product-info">
                          <a
                            href=""
                            className="product-title"
                          >
                            Samsung TV
                            <span className="badge badge-warning float-right">
                              $1800
                            </span>
                          </a>
                          <span className="product-description">
                            Samsung 32" 1080p 60Hz LED Smart HDTV.
                          </span>
                        </div>
                      </li>
                      {/* /.item */}
                      <li className="item">
                        <div className="product-img">
                          <img
                            src="dist/img/default-150x150.png"
                            alt="Product Image"
                            className="img-size-50"
                          />
                        </div>
                        <div className="product-info">
                          <a
                            href=""
                            className="product-title"
                          >
                            Bicycle
                            <span className="badge badge-info float-right">
                              $700
                            </span>
                          </a>
                          <span className="product-description">
                            26" Mongoose Dolomite Men's 7-speed, Navy Blue.
                          </span>
                        </div>
                      </li>
                      {/* /.item */}
                      <li className="item">
                        <div className="product-img">
                          <img
                            src="dist/img/default-150x150.png"
                            alt="Product Image"
                            className="img-size-50"
                          />
                        </div>
                        <div className="product-info">
                          <a
                            href=""
                            className="product-title"
                          >
                            Xbox One{" "}
                            <span className="badge badge-danger float-right">
                              $350
                            </span>
                          </a>
                          <span className="product-description">
                            Xbox One Console Bundle with Halo Master Chief
                            Collection.
                          </span>
                        </div>
                      </li>
                      {/* /.item */}
                      <li className="item">
                        <div className="product-img">
                          <img
                            src="dist/img/default-150x150.png"
                            alt="Product Image"
                            className="img-size-50"
                          />
                        </div>
                        <div className="product-info">
                          <a
                            href=""
                            className="product-title"
                          >
                            PlayStation 4
                            <span className="badge badge-success float-right">
                              $399
                            </span>
                          </a>
                          <span className="product-description">
                            PlayStation 4 500GB Console (PS4)
                          </span>
                        </div>
                      </li>
                      {/* /.item */}
                    </ul>
                  </div>
                  {/* /.card-body */}
                  <div className="card-footer text-center">
                    <a href="" className="uppercase">
                      View All Products
                    </a>
                  </div>
                  {/* /.card-footer */}
                </div>
                {/* /.card */}
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
          </div>
          {/*/. container-fluid */}
        </section>
        {/* /.content */}
      </div>
      {/* /.content-wrapper */}
    </div>
  );
}
}





export default Test;
