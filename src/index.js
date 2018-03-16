import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxPromise from 'redux-promise'
import './include/bootstrap'
import './index.css'
import App from './App'
import reducers from './reducers'
import registerServiceWorker from './registerServiceWorker'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)

// Makes the ES6 Fetch Method compatible with all browsers
require('es6-promise').polyfill()
require('isomorphic-fetch')

ReactDOM.render(
<Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.getElementById('root'))
registerServiceWorker()
