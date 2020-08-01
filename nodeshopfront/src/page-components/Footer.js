import React, { PureComponent } from 'react'

class Footer extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
<div>
  {/* Main Footer */}
  <footer className="main-footer">
    <strong>Copyright © 2014-2019 <a href=" ">AdminLTE.io</a>.</strong>
    All rights reserved.
    <div className="float-right d-none d-sm-inline-block">
      <b>Version</b> 3.0.5
    </div>
  </footer>
</div>

        )
    }
}

export default Footer