import React, { Component } from 'react'
import { connect } from 'react-redux'

 class UsersList extends Component {
   renderUser(props) {
     return (
       <tr key={props.id}>
         <td>
           <div className="card border-success mb-3">
             <div className="card-header bg-transparent border-primary">
                 <a className="font-weight-bold" href={props.html_url}><button type="button" className="btn btn-light float-left text-info">@{props.login}</button></a>
                  <button type="button" class="btn btn-secondary float-right" disabled>Repos <span className="badge badge-light">{props.public_repos}</span></button>
             </div>
             <div className="card-body">
                 <div className="row">
                   <div className="text-success col-4">
                     <img className="card-img-top" src={props.avatar_url} alt="Card image cap"/>
                   </div>
                   <div className="col-8">
                     <h5 className="card-title text-dark text-uppercase">{props.name}</h5>
                     <p className="card-text text-secondary">{props.bio}</p>
                   </div>
                 </div>
             </div>
            <div className="card-footer bg-transparent border-success">
                <a className="btn btn-primary float-right" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                  Followers <span className="badge badge-light">{props.followers}</span>
                </a>
                <a className="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                  Following <span className="badge badge-light">{props.following}</span>
                </a>
              <div className="collapse" id="collapseExample">
               <div className="card card-body">
                 Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
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
