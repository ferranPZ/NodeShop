import React, { PureComponent } from 'react'

class InfoBoxes extends PureComponent {
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
              </div>
        );
      }
}

export default InfoBoxes