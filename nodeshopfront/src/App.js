import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import "icheck-bootstrap";
//SPA <Router></Router>
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//Componentes de pagina
import Header from "./page-components/Header";
import Aside from "./page-components/Aside";
import ContentHeader from "./page-components/ContentHeader";
import InfoBoxes from "./page-components/InfoBoxes";
import MainRow from "./page-components/MainRow";
import Footer from "./page-components/Footer";
//Componentes funcionales
import ShowProductos from "./module/productos/show";
import Home from "./module/pages/Home";
import MenuProductos from "./module/productos/menu";
import EditarProductos from "./module/productos/edit";
import Details from "./module/productos/details";

function App() {
  return (
    <Router>
      <Header></Header>
      <Aside></Aside>
      <div className="content-wrapper">
        {/* <ContentHeader></ContentHeader> */}
        <section className="content">
          <div className="container-fluid">
            {/* Info boxes  
            <InfoBoxes></InfoBoxes>
          */}
            {/* <ol className="breadcrumb float-sm">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Productos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/otros2">
                  para probar el SPA 1
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/otro">
                  para probar el SPA 2
                </Link>
              </li>
            </ol> */}
            <div className="row">
              <div className="col-md-12">
                <div className="card-body">
                  {/* Productos aqui se llamará un template */}
                  
                  <Route path="/" exact component={ShowProductos} />
                  <Route path="/home" exact component={Home} />
                  <Route path="/otros2" exact component={InfoBoxes} />
                  <Route path="/otro" exact component={MainRow} />
                  <Route path="/menu" exact component={MenuProductos} />
                  <Route path="/edit/:id" component={EditarProductos} />
                  <Route path="/details/:id" component={Details} />
                  {/* Productos aqui se llamará un template */}
                </div>
              </div>
            </div>
            {/*  
            <MainRow></MainRow>
           */}
          </div>
        </section>
      </div>
      <Footer></Footer>
    </Router>
  );
}

export default App;
