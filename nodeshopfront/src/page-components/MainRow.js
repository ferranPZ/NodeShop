import React, { PureComponent } from 'react'

class MainRow extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
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
                          <a href="fake_url">OR9842</a>
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
                          <a href="fake_url">OR1848</a>
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
                          <a href="fake_url">OR7429</a>
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
                          <a href="fake_url">OR7429</a>
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
                          <a href="fake_url">OR1848</a>
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
                          <a href="fake_url">OR7429</a>
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
                          <a href="fake_url">OR9842</a>
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
                <a href="fake_url" className="btn btn-sm btn-info float-left">
                  Place New Order
                </a>
                <a
                  href="fake_url"
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
                        alt="Product_Image"
                        className="img-size-50"
                      />
                    </div>
                    <div className="product-info">
                      <a href="fake_url" className="product-title">
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
                        alt="Product_Image"
                        className="img-size-50"
                      />
                    </div>
                    <div className="product-info">
                      <a href="fake_url" className="product-title">
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
                        alt="Product_Image"
                        className="img-size-50"
                      />
                    </div>
                    <div className="product-info">
                      <a href="fake_url" className="product-title">
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
                        alt="Product_Image"
                        className="img-size-50"
                      />
                    </div>
                    <div className="product-info">
                      <a href="fake_url" className="product-title">
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
                <a href="fake_url" className="uppercase">
                  View All Products
                </a>
              </div>
              {/* /.card-footer */}
            </div>
            {/* /.card */}
          </div>
          {/* /.col */}
        </div>
        </div>
        );
      }
}

export default MainRow