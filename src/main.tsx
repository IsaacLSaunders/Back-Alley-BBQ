import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

//redux and redux toolkit imports
import { store } from './store'
import { Provider } from 'react-redux'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
)
