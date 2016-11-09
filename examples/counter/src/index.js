import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import App from './containers/app.js'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
// import UserInfo from './components/UserInfo'
import counter from './reducers'

const loggerMiddleware = createLogger();
const store = createStore(counter, applyMiddleware(thunkMiddleware, loggerMiddleware));
const rootEl = document.getElementById('root')

const render = () => {
  console.log(JSON.stringify(store.getState()));

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
    ,
    rootEl
  )

}
render()
