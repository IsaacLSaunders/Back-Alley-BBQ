import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

//redux and redux toolkit imports
import { store } from './store'
import { Provider } from 'react-redux'

//react router imports
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
          <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
    
)
