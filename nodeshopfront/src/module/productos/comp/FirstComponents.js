import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import config from '../../../config'

class FirstComponents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      tableData: [],
      orgtableData: [],
      perPage: 3,
      currentPage: 0,
    };
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    // only update chart if the data has changed
    if (prevProps.filtradoProductos !== this.props.filtradoProductos) {
      //   console.log(this.props.filtradoProductos);
      this.loadProducts();
    }
  }
  loadMoreData() {
    const data = this.state.orgtableData;
    const slice = data.slice(
      this.state.offset,
      this.state.offset + this.state.perPage
    );
    this.setState({
      pageCount: Math.ceil(data.length / this.state.perPage),
      tableData: slice,
    });
  }
  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
        this.loadMoreData();
      }
    );
  };
  loadProducts() {
    const data = this.props.filtradoProductos;
    //this.setState({ listProducts: data });

    var slice = data.slice(
      this.state.offset,
      this.state.offset + this.state.perPage
    );

    this.setState({
      pageCount: Math.ceil(data.length / this.state.perPage),
      orgtableData: data,
      tableData: slice,
    });
  }



  addDefaultSrc(ev){
    ev.target.src = 'http://localhost:3000/app/files/notAvailable.jpg'
    ev.target.style = "max-width: 19vw; display: block; margin-left: auto; margin-right: auto;"
    
  }

  render() {
    return (
      <div>
        <div className="row">
          {this.state.tableData.map((tdata, i) => (
           
            <div
              className="col-12 col-md-6 col-lg-4 d-flex align-items-stretch"
              key={i}
            >
            
              <div className="card w-100 mh-100" style={{ height: "530px" }}>
                {tdata.imagen !== "default" ? (
                  <img
                   
                    className="card-img-top"
                    src={`http://localhost:3000/app/files/${tdata.imagen}`}
                    onError={this.addDefaultSrc} 
                    alt="Card image cap"
                    style={{ height: "270px" }}
                  />
                ) : (
                  <img
                    className="card-img-top"
                    src="dist/img/user2-160x160.jpg"
                  />
                )}
                <h5 className="card-title px-3 py-1"><b>{tdata.nombre}</b></h5>
                <div className="card-body" style={{ height: "270px" }}>
                  <p className="card-text">{tdata.descripcion}</p>
                </div>
                <div className="card-footer">
                  <div className="row">
                    <div className="col">
                      <p className="text-danger">
                        <del className="mr-1">${tdata.valor}</del> $
                        {tdata.valor - (tdata.valor * 10) / 100}
                      </p>
                    </div>
                    <div className="col">
                      <Link
                        className="btn btn-primary float-right"
                        to={"/details/" + tdata.idProducto}
                      >
                        Ver
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <ReactPaginate
            previousLabel={"prev"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={this.state.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
        </div>
      </div>
    );
  }
}
 
export default FirstComponents;
