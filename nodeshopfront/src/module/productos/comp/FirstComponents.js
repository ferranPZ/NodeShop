import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";

import ReactPaginate from "react-paginate";

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
  render() {
    return (
      <div>
        <div className="row">
          {this.state.tableData.map((tdata, i) => (
            <div className="card" style={{ width: "18rem" }} key={i}>
              <img
                className="card-img-top"
                src={`http://localhost:3000/app/files/${tdata.imagen}`}
              />
              <div className="card-body">
                <h5 className="card-title">{tdata.idProducto}</h5>
                <p className="card-text">{tdata.nombre}</p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
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
