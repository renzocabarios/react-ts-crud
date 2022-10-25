import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { store } from './state/store'
import { Provider } from 'react-redux'
import { Home } from './page'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <React.StrictMode>
      <Home />
    </React.StrictMode>
  </Provider >

)
