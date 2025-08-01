import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store, { persistor } from './redux/store.js'
import { PersistGate } from 'redux-persist/integration/react'
createRoot(document.getElementById('root')).render(
  
  <Provider store={store}>
    <PersistGate persistor={persistor}>
  <StrictMode>
    <App />
  </StrictMode>
  </PersistGate>
  </Provider>
  ,
)
