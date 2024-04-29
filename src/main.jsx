import ReactDOM from 'react-dom/client'
import { PrimeReactProvider } from "primereact/api";
import Tailwind from 'primereact/passthrough/tailwind';
import './index.scss'
import 'bootstrap-icons/font/bootstrap-icons.css';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(

  <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
    <App />
  </PrimeReactProvider>

)
