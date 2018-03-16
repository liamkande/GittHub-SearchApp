<td className="card bg-light mb-3">
  <div className="card-header text-uppercase font-weight-bold">{props.name}</div>
  <div className="card-body">
    <div className="row">
       <div className="col-sm">
         <img className="card-img-top" src={props.avatar_url} alt="Card image cap" width={75}/>
       </div>
       <div className="col-sm">
         <h5 className="card-title">Followers: {props.followers}</h5>
         <p className="card-text">Following: {props.following}</p>
         <p className="card-text">Repos: {props.public_repos}</p>
         <p className="card-text">{props.company}</p>
       </div>
    </div>
  </div>
</td>


//footer
<p>
  <a className="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    Followers <span class="badge badge-light">{props.followers}</span>
  </a>
  <a className="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    Following <span class="badge badge-light">{props.following}</span>
  </a>
</p>
<div className="collapse" id="collapseExample">
 <div className="card card-body">
   Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
 </div>
</div>
