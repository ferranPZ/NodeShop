import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

//SPA <Router></Router>
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Form from "./module/form";
import Table from "./module/table";
import Edit from './module/edit';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  {" "}
                  Usuario List{" "}
                </Link>
              </li>
            </ul>
            <Link className="btn btn-info " to="/form">
              Add Usuario
            </Link>
          </div>
        </nav>

        <div className="container py-4">
          <div className="row">

            <Route path="/" exact component={Table} />
            <Route path="/form" component={Form} />
            <Route path="/edit/:usuarioId" component={Edit} />

          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;