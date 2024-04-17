import React from 'react'
import ReactDOM from 'react-dom/client'
import { PrimeReactProvider } from "primereact/api";
import Tailwind from 'primereact/passthrough/tailwind';
import './index.scss'
import 'bootstrap-icons/font/bootstrap-icons.css';
import App from './app';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
     <App/>
    </PrimeReactProvider>
  </React.StrictMode>
)
