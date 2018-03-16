import React, { Component } from 'react'

class Collapsible extends Component {
  render(){
    const {children} = this.props
    return (
      <div id="accordion">
        <div className="card">
          <div className="collapse multi-collapse show"
               aria-labelledby="headingOne"
               data-parent="#accordion"
               >
            <div className="card-body">
              {children}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Collapsible
