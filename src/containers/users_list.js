import React, { Component } from 'react'
import { connect } from 'react-redux'
import AppFetch from '../components/App'

 class UsersList extends Component {
   renderUser(props) {
     let id = props.id
     return (
       <tr key={id}>
         <td>
           <div className="card border-secondary bg-light mb-3">
             <div className="card-header bg-transparent border-secondary">
                 <a className="font-weight-bold" href={props.html_url}><button type="button" className="btn btn-light float-left text-info">@{props.login}</button></a>
                  <button type="button" className="btn btn-secondary float-right" disabled>Repos <span className="badge badge-light">{props.public_repos}</span></button>
             </div>
             <div className="card-body">
                 <div className="row">
                   <div className="text-success col-4">
                     <img className="card-img-top" src={props.avatar_url} alt="Card cap"/>
                   </div>
                   <div className="col-8">
                     <h5 className="card-title text-dark text-uppercase">{props.name}</h5>
                     <p className="card-text text-secondary">{props.bio}</p>
                   </div>
                 </div>
             </div>
            <div className="card-footer bg-light border-secondary">
              <div className="row">
                <div className="col-12">
                  <a className="btn btn-info float-right"
                     data-toggle="collapse"
                     href={`#${id}`}
                     role="button"
                     aria-expanded="false"
                     aria-controls="collapseExample"
                     >
                    Followers <span className="badge badge-light">{props.followers}</span>
                  </a>
                </div>
              </div>
              <div className="collapse" id={id}>
               <div className="card card-body">
                 <AppFetch login={props.login}/>
               </div>
              </div>
            </div>
          </div>
        </td>
       </tr>
     )
   }

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>User Handle</th>
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
