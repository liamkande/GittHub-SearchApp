import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import SearchBar from './containers/searchBar'

class App extends Component {
  render() {
    return (
      <div className="container">
        <SearchBar />
      </div>
    )
  }
}

export default App
