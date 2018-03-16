import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchUser } from '../actions/index'


class SearchBar extends Component {
  constructor(props) {
  super(props)
  this.state = { term: ''}

  this.onInputChange = this.onInputChange.bind(this)
  this.handleSubmit = this.handleSubmit.bind(this)

}
onInputChange(event) {
      this.setState({term: event.target.value})
    //  console.log(event.target.value)
    }

handleSubmit = (e) => {
  e.preventDefault()
  const term = this.state.term
  if(!term){
    alert('Please enter a valid username')
  }
  else {
    this.props.fetchUser(term)
    this.setState({ term:'' })
  }
}
  render() {
    return (
        <form className="input-group mb-3 mt-3" onSubmit={this.handleSubmit}>
          <input type="text"
                 value={this.state.term}
                 onChange={this.onInputChange}
                 className="form-control"
                 placeholder="Enter a GitHub username"
                 aria-label="Recipient's username"
                 aria-describedby="basic-addon2" />
          <div className="input-group-append">
            <button type="submit" className="btn btn-primary" >Search User</button>
          </div>
        </form>
    )
  }
}

function mapDispatchToprops(dispatch) {
  return bindActionCreators({ fetchUser }, dispatch)

}

export default connect(null, mapDispatchToprops) (SearchBar)
