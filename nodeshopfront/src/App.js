import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

//SPA <Router></Router>
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Form from "./module/ejemplos_antiguos/form";
 
import Edit from "./module/ejemplos_antiguos/edit";

import Show_productos from "./module/productos/show";

import Header from "./page-components/Header";
import Menu from "./page-components/Menu";
import Footer from "./page-components/Footer";

function App() {
  return (
    <Router>
      <Header></Header>
      <Menu></Menu>
      <div className="container py-4">
        <div className="row">
          <Route path="/" exact component={Show_productos} />
        </div>
      </div>
      <Footer></Footer>
    </Router>
  );
}

export default App;
