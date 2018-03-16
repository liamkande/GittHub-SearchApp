import React, { Component } from 'react'

import SearchBar from './containers/searchBar'
import UserList from './containers/users_list'

class App extends Component {
  render() {
    return (
      <div className="container">
        <SearchBar />
        <UserList />
      </div>
    )
  }
}

export default App
