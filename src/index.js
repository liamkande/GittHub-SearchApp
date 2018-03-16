import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxPromise from 'redux-promise'
import './include/bootstrap'
import App from './App'
import reducers from './reducers'
import registerServiceWorker from './registerServiceWorker'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)

require('es6-promise').polyfill()
require('isomorphic-fetch')

ReactDOM.render(
<Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.getElementById('root'))
registerServiceWorker()
