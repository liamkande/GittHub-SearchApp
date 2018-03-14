import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../actions/index'


class SearchUser extends Component {

  state={
  user: ''
  }

handleSubmit = (e) => {
  e.preventDefault()
  const user = this.state.user
  if(!user){
    alert('Please enter a valid name')
  }
  else {
    this.props.fetchUser(user)
    this.setState({ user:'' })
  }
}
  render() {
    const { user } = this.props
    return (
      <div>
        <form className="input-group mb-3" onSubmit={this.handleSubmit}>
          <input type="text"
                 value={this.state.user}
                 onChange={(event) => this.setState({ user: event.target.value})}
                 className="form-control"
                 placeholder="Enter a GitHub username"
                 aria-label="Recipient's username"
                 aria-describedby="basic-addon2" />
          <div className="input-group-append">
            <button type="submit" className="btn btn-primary" >Search User</button>
          </div>
        </form>
      </div>

    )
  }
}

function mapStateToProps(state) {
  return { users: state.users.user }

}

export default connect(mapStateToProps, { fetchUser }) (SearchUser)
