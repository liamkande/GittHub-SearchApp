import React, { Component } from 'react'
import { connect } from 'react-redux'

 class UsersList extends Component {
   renderUser(props) {
     return (
       <tr key={props.id}>
         <td><img width="75" src={props.avatar_url} className='float-left' alt="User"/></td>
       </tr>
     )
   }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>User handle</th>
          </tr>
        </thead>
        <tbody>
          {this.props.user.map(this.renderUser)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({ user }) {
  return { user } //{ user } === { user: user }
}

export default connect(mapStateToProps) (UsersList)
