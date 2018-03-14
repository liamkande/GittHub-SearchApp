import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import SearchUser from './containers/searchUser'

class App extends Component {
  render() {
    return (
      <div className="container">
        <SearchUser />
      </div>
    )
  }
}

export default App
