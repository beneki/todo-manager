import ReactDom from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './app/store'
import React from 'react'

ReactDom.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
