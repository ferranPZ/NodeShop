import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

//SPA <Router></Router>
import { BrowserRouter as Router   } from "react-router-dom";
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// luego usaremos Route y Link 

import Header from "./page-components/Header";
import Menu from "./page-components/Menu";
import Footer from "./page-components/Footer";

/*
import Show_productos from "./module/productos/show";
import Edit_productos from "./module/productos/edit";
import Form from "./module/ejemplos_antiguos/form";
 
import Edit from "./module/ejemplos_antiguos/edit";
 
 */


function App() {
  return (
    <Router>
      <Header></Header>
      <Menu></Menu>
 
      <Footer></Footer>
    </Router>
  );
}

export default App;
