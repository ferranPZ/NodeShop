import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

//SPA <Router></Router>
import { BrowserRouter as Router } from "react-router-dom";
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// luego usaremos Route y Link

import Header from "./page-components/Header";
import Aside from "./page-components/Aside";
import ContentHeader from "./page-components/ContentHeader";
import InfoBoxes from "./page-components/InfoBoxes";
import MainRow from "./page-components/MainRow";
import Footer from "./page-components/Footer";
import ShowProductos from "./module/productos/show";

function App() {
  return (
    <Router>
      <Header></Header>
      <Aside></Aside>

      <div className="content-wrapper">
        <ContentHeader></ContentHeader>

        <section className="content">
          <div className="container-fluid">
            {/* Info boxes  
            <InfoBoxes></InfoBoxes>
          */}

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

                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="remove"
                      >
                        <i className="fas fa-times" />
                      </button>
                    </div>
                  </div>

                  <div className="card-body">
                    {/* Productos aqui se llamará un template */}

                    <ShowProductos />

                    {/* Productos aqui se llamará un template */}
                  </div>
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
