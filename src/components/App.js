import React, { Component } from 'react'
import Collapsible from './Collapsible'

class AppFetch extends Component {

  constructor(props){
    super(props);
    this.state = {
        isLoading: true,
        contacts: [],
        number: 1
    }
  }

  componentDidMount(){
    this.fetchData()
  }
  fetchData(number){
    number = this.state.number
      this.setState({
          isLoading: true,
          contacts: [],
          number: ++number
      })
      const login = this.props.login
      fetch(`https://api.github.com/users/${login}/followers?page=${number}`)
      .then(response => response.json())
      .then(parsedJSON => parsedJSON.map(user => (
        {
          name: `${user.login}`,
          id: `${user.id}`,
          profile: `${user.html_url}`,
          picture: `${user.avatar_url}`
        }
      )))
      .then(contacts => this.setState({
        contacts,
        isLoading: false
      }))

      .catch(error => console.log('parsing failed', error))

    if(this.state.contacts.length < 1) {
      this.reset()
    }
  }
  reset(){
    this.setState({
        isLoading: true,
        contacts: [],
        number: 1
    })
    const login = this.props.login
    fetch(`https://api.github.com/users/${login}/followers?page=1`)
    .then(response => response.json())
    .then(parsedJSON => parsedJSON.map(user => (
      {
        name: `${user.login}`,
        id: `${user.id}`,
        profile: `${user.html_url}`,
        picture: `${user.avatar_url}`
      }
    )))
    .then(contacts => this.setState({
      contacts,
      isLoading: false
    }))

    .catch(error => console.log('parsing failed', error))
  }

  render() {
    const {isLoading, contacts} = this.state
    return (
      <div>
          <header>
            <div className="row">
              <div className="col-12 ">
                <h2>Followers Data<button className="btn btn-sm btn-danger float-right" onClick={(e) => {
                  this.fetchData()
                }}>Load more</button>
                <button className="btn btn-sm btn-success float-right" onClick={() => {
                  this.reset()
                }}>reset</button>
                </h2>
              </div>
            </div>
          </header>
          <div className={`content ${isLoading ? 'is-loading' : ''}`}>
              <div className="panel-group">
                  {
                      !isLoading && contacts.length > 0 ? contacts.map(contact => {
                          const {id, name, profile, picture} = contact
                          return <Collapsible key={id} title={name}>
                            <img src={picture} className="float-left mb-3" width={75} alt="Avatar"/>
                            <button className="btn btn-link float-right"
                                    data-toggle="collapse"
                                    aria-expanded="true"
                                    aria-controls="collapseOne"
                                    >
                                <a className="float-right" href={profile}>@{name}</a>
                            </button>
                          </Collapsible>
                      }) : null
                  }
              </div>
              <div className="loader">
                  <div className="icon"></div>
              </div>
          </div>
      </div>
    );
  }
}
export default AppFetch
