import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchUser } from '../actions/index'


class SearchBar extends Component {
  constructor(props) {
  super(props)
  this.state = { term: '' }

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
    //We need to go fetch the user data
    this.props.fetchUser(term)
    //this clears the input after the Search
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
  //this give us access to the function fetctUser here, originally created in the ActionCreator
  return bindActionCreators({ fetchUser }, dispatch)

}
// we're passing null as the 1rst argument here because whenever we are passing a function
// that is suppose to dispatch to the props of our container it always goes in as the 2nd argument here!
// usually the 1rst argument is for when we map state to props as well
// so null is pretty much telling redux that we understand that redux is to maitain some state
// but we dont need any state here.
export default connect(null, mapDispatchToprops) (SearchBar)
